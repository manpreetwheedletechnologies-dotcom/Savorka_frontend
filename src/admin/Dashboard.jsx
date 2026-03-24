import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import ViewLeads from "./ViewLeads";
import ViewNewsletters from "./ViewNewsletters";
import ViewContactLeads from "./ViewContactLeads";
import API_BASE_URL from "../config/api";
import MessageSquareText from "lucide-react/dist/esm/icons/message-square-text";
import ViewComments from "./ViewComments";

import {
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
  Menu,
  Bell,
  User,
  FileText,
  Mail,
} from "lucide-react";

import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const Dashboard = () => {
  const { admin, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [time, setTime] = useState(new Date());

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const [page, setPage] = useState("dashboard");

  const [contactCount, setContactCount] = useState(0);
  const [leadCount, setLeadCount] = useState(0);
  const [newsletterCount, setNewsletterCount] = useState(0);

  const [notifications, setNotifications] = useState([]);

  const [loading, setLoading] = useState(true);
  const [commentCount, setCommentCount] = useState(0);

  const handleLogout = () => {
    logout();
    navigate("/admin");
  };

  /* ---------------- CLOCK ---------------- */

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  /* ---------------- FETCH DATA ---------------- */
  const fetchDashboardData = async () => {
    try {
      const leadsRes = await fetch(`${API_BASE_URL}/leads`);
      const contactsRes = await fetch(`${API_BASE_URL}/contact-leads`);
      const newslettersRes = await fetch(`${API_BASE_URL}/newsletters`);
      const commentsCountRes = await fetch(`${API_BASE_URL}/comments/count`);

      const leads = await leadsRes.json();
      const contacts = await contactsRes.json();
      const newsletters = await newslettersRes.json();
      const commentsCountData = await commentsCountRes.json();

      if (Array.isArray(leads) && leads.length > leadCount) {
        toast.success("New Lead Received 🚀");
        setNotifications((prev) => [
          { message: "New Lead Received", time: new Date() },
          ...prev,
        ]);
      }

      if (Array.isArray(newsletters) && newsletters.length > newsletterCount) {
        toast.success("New Newsletter Subscriber 📩");
        setNotifications((prev) => [
          { message: "New Newsletter Subscriber", time: new Date() },
          ...prev,
        ]);
      }

      if (commentsCountData?.total > commentCount) {
        toast.success("New Comment Received 💬");
        setNotifications((prev) => [
          { message: "New Comment Received", time: new Date() },
          ...prev,
        ]);
      }

      setLeadCount(Array.isArray(leads) ? leads.length : 0);
      setNewsletterCount(Array.isArray(newsletters) ? newsletters.length : 0);
      setContactCount(Array.isArray(contacts) ? contacts.length : 0);
      setCommentCount(commentsCountData?.total || 0);

      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  // const fetchDashboardData = async () => {
  //   try {
  //     const leads = await fetch(`${API_BASE_URL}/leads`).then((r) => r.json());
  //     const contacts = await fetch(`${API_BASE_URL}/contact-leads`).then((r) =>
  //       r.json()
  //     );
  //     const newsletters = await fetch(`${API_BASE_URL}/newsletters`).then((r) =>
  //       r.json()
  //     );

  //     if (leads.length > leadCount) {
  //       toast.success("New Lead Received 🚀");

  //       setNotifications((prev) => [
  //         { message: "New Lead Received", time: new Date() },
  //         ...prev,
  //       ]);
  //     }

  //     if (newsletters.length > newsletterCount) {
  //       toast.success("New Newsletter Subscriber 📩");

  //       setNotifications((prev) => [
  //         { message: "New Newsletter Subscriber", time: new Date() },
  //         ...prev,
  //       ]);
  //     }

  //     setLeadCount(leads.length);
  //     setNewsletterCount(newsletters.length);
  //     setContactCount(contacts.length);

  //     setLoading(false);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  useEffect(() => {
    fetchDashboardData();

    const interval = setInterval(fetchDashboardData, 10000);

    return () => clearInterval(interval);
  }, [leadCount, newsletterCount, commentCount]);

  /* ---------------- DATE FORMAT ---------------- */

  const formatDate = time.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formatTime = time.toLocaleTimeString();

  return (
    <div className="flex min-h-screen bg-gray-100 text-[14px]">
      <Toaster position="top-right" />

      {/* ---------------- SIDEBAR ---------------- */}

      <aside
        className={`bg-white border-r fixed top-0 left-0 h-full z-40 transition-all duration-500 ease-in-out
        ${sidebarCollapsed ? "w-20" : "w-64"}
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          <div className="p-5 border-b text-center font-bold text-blue-600 text-lg">
            {sidebarCollapsed ? "SK" : "Savorka"}
          </div>

          {/* MENU */}

          <nav className="flex-1 p-3 space-y-2">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setPage("dashboard")}
              className={`flex w-full items-center gap-3 p-3 rounded-lg transition
              ${
                page === "dashboard"
                  ? "bg-blue-100 text-blue-600"
                  : "hover:bg-gray-100"
              }`}
            >
              <LayoutDashboard size={20} />
              {!sidebarCollapsed && "Dashboard"}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              className="flex w-full items-center gap-3 p-3 rounded-lg hover:bg-gray-100"
            >
              <Users size={20} />
              {!sidebarCollapsed && "Users"}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              className="flex w-full items-center gap-3 p-3 rounded-lg hover:bg-gray-100"
            >
              <Settings size={20} />
              {!sidebarCollapsed && "Settings"}
            </motion.button>
          </nav>

          {/* LOGOUT */}

          <div className="p-3 border-t">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-red-50 text-gray-600 hover:text-red-600"
            >
              <LogOut size={20} />
              {!sidebarCollapsed && "Logout"}
            </button>
          </div>
        </div>
      </aside>

      {/* ---------------- MAIN AREA ---------------- */}

      <div
        className={`flex-1 flex flex-col h-screen transition-all duration-300
        ${sidebarCollapsed ? "lg:ml-20" : "lg:ml-64"}`}
      >
        {/* ---------------- TOPBAR ---------------- */}

        <header className="bg-white border-b px-6 py-4 flex justify-between items-center sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden"
            >
              <Menu />
            </button>

            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="hidden lg:block"
            >
              <Menu />
            </button>

            <h1 className="font-semibold text-lg">Welcome {admin?.name}</h1>
          </div>

          <div className="flex items-center gap-6">
            {/* DATE */}

            <div className="hidden md:block text-right">
              <p className="text-xs text-gray-500">{formatDate}</p>
              <p className="font-semibold">{formatTime}</p>
            </div>

            {/* NOTIFICATIONS */}

            <div className="relative">
              <button onClick={() => setNotifOpen(!notifOpen)}>
                <div className="relative">
                  <Bell />

                  {notifications.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                      {notifications.length}
                    </span>
                  )}
                </div>
              </button>

              {notifOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-3 w-80 bg-white shadow-xl rounded-xl p-4"
                >
                  <p className="font-semibold mb-3">Notifications</p>

                  <div className="max-h-64 overflow-y-auto space-y-2">
                    {notifications.length === 0 && (
                      <p className="text-sm text-gray-500">No notifications</p>
                    )}

                    {notifications.map((n, i) => (
                      <div key={i} className="p-2 rounded-lg hover:bg-gray-100">
                        <p className="text-sm">{n.message}</p>
                        <p className="text-xs text-gray-400">
                          {new Date(n.time).toLocaleTimeString()}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* PROFILE */}

            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2"
              >
                <User />
                <span className="hidden md:block">{admin?.name}</span>
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-3 w-40 bg-white shadow-xl rounded-xl">
                  <button className="w-full p-3 text-left hover:bg-gray-100">
                    Profile
                  </button>

                  <button className="w-full p-3 text-left hover:bg-gray-100">
                    Settings
                  </button>

                  <button
                    onClick={handleLogout}
                    className="w-full p-3 text-left text-red-600 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* ---------------- CONTENT ---------------- */}

        <main className="p-6 space-y-6 overflow-y-auto flex-1">
          {page === "dashboard" && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* LEADS */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                onClick={() => setPage("leads")}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg cursor-pointer border"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-500 text-sm">Total Leads</p>

                    {loading ? (
                      <div className="h-8 w-16 bg-gray-200 animate-pulse rounded mt-2"></div>
                    ) : (
                      <h2 className="text-3xl font-bold mt-2">{leadCount}</h2>
                    )}
                  </div>

                  <div className="bg-blue-100 p-3 rounded-lg">
                    <FileText className="text-blue-600" />
                  </div>
                </div>
              </motion.div>

              {/* NEWSLETTER */}

              <motion.div
                whileHover={{ y: -6 }}
                onClick={() => setPage("newsletters")}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg cursor-pointer border"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-500 text-sm">
                      Newsletter Subscribers
                    </p>

                    {loading ? (
                      <div className="h-8 w-16 bg-gray-200 animate-pulse rounded mt-2"></div>
                    ) : (
                      <h2 className="text-3xl font-bold mt-2">
                        {newsletterCount}
                      </h2>
                    )}
                  </div>

                  <div className="bg-green-100 p-3 rounded-lg">
                    <Users className="text-green-600" />
                  </div>
                </div>
              </motion.div>

              {/* CONTACT */}

              <motion.div
                whileHover={{ y: -6 }}
                onClick={() => setPage("contacts")}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg cursor-pointer border"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-500 text-sm">Contact Leads</p>

                    {loading ? (
                      <div className="h-8 w-16 bg-gray-200 animate-pulse rounded mt-2"></div>
                    ) : (
                      <h2 className="text-3xl font-bold mt-2">
                        {contactCount}
                      </h2>
                    )}
                  </div>

                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Mail className="text-purple-600" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -6 }}
                onClick={() => setPage("comments")}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg cursor-pointer border"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-500 text-sm">Comments</p>

                    {loading ? (
                      <div className="h-8 w-16 bg-gray-200 animate-pulse rounded mt-2"></div>
                    ) : (
                      <h2 className="text-3xl font-bold mt-2">
                        {commentCount}
                      </h2>
                    )}
                  </div>

                  <div className="bg-orange-100 p-3 rounded-lg">
                    <MessageSquareText className="text-orange-600" />
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {page === "comments" && (
            <ViewComments goBack={() => setPage("dashboard")} />
          )}

          {page === "contacts" && (
            <ViewContactLeads goBack={() => setPage("dashboard")} />
          )}

          {page === "leads" && (
            <ViewLeads goBack={() => setPage("dashboard")} />
          )}

          {page === "newsletters" && (
            <ViewNewsletters goBack={() => setPage("dashboard")} />
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
