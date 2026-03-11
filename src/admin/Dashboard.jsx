import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../auth/AuthContext";
import { Outlet, useNavigate } from "react-router-dom";
import ViewLeads from "./ViewLeads";
import ViewNewsletters from "./ViewNewsletters";
import {
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
  Menu,
  Bell,
  User,
  FileText,
} from "lucide-react";

const Dashboard = () => {
  const { admin, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [time, setTime] = useState(new Date());
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [page, setPage] = useState("dashboard");

  const handleLogout = () => {
    logout();
    navigate("/admin");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = time.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formatTime = time.toLocaleTimeString();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-white shadow-lg fixed top-0 left-0 h-full z-30 transition-all duration-300
        ${sidebarCollapsed ? "w-20" : "w-64"}
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          
          {/* Logo */} <div className="p-5 border-b flex items-center justify-center font-bold text-blue-600 text-xl"> {sidebarCollapsed ? "SK" : "Savorka"} </div>

          {/* Menu */}
          <nav className="flex-1 p-3 space-y-2">
            <a className="flex items-center gap-3 p-3 rounded-lg bg-blue-100 text-blue-600 font-medium hover:bg-blue-200 transition">
              <LayoutDashboard size={20} />
              {!sidebarCollapsed && "Dashboard"}
            </a>

            <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition cursor-pointer">
              <Users size={20} />
              {!sidebarCollapsed && "Users"}
            </a>

            <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition cursor-pointer">
              <Settings size={20} />
              {!sidebarCollapsed && "Settings"}
            </a>
          </nav>

          {/* Logout Bottom */}
          <div className="p-3 border-t">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full p-3 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 transition cursor-pointer"
            >
              <LogOut size={20} />
              {!sidebarCollapsed && "Logout"}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Area */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300
        ${sidebarCollapsed ? "lg:ml-20" : "lg:ml-64"}`}
      >
        {/* Topbar */}
        <header className="bg-white shadow-sm p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Mobile menu */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden"
            >
              <Menu />
            </button>

            {/* Collapse button */}
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="hidden lg:block cursor-pointer"
            >
              <Menu />
            </button>

            <h1 className="text-xl font-semibold">Welcome {admin?.name}</h1>
          </div>

          <div className="flex items-center gap-6 relative">
            {/* Date Time */}
            <div className="hidden md:block text-right">
              <p className="text-sm text-gray-500">{formatDate}</p>
              <p className="font-semibold">{formatTime}</p>
            </div>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setNotifOpen(!notifOpen)}
                className="relative"
              >
                <Bell />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                  3
                </span>
              </button>

              {notifOpen && (
                <div className="absolute right-0 mt-3 w-64 bg-white shadow-lg rounded-lg p-3">
                  <p className="font-semibold mb-2">Notifications</p>
                  <p className="text-sm text-gray-600">New user registered</p>
                  <p className="text-sm text-gray-600">Server restarted</p>
                  <p className="text-sm text-gray-600">Backup completed</p>
                </div>
              )}
            </div>

            {/* Profile Menu */}
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2"
              >
                <User />
                <span className="hidden md:block">{admin?.name}</span>
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-3 w-40 bg-white shadow-lg rounded-lg">
                  <button className="w-full text-left p-3 hover:bg-gray-100">
                    Profile
                  </button>

                  <button className="w-full text-left p-3 hover:bg-gray-100">
                    Settings
                  </button>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left p-3 hover:bg-red-50 text-red-600"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {page === "dashboard" && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* Leads Card */}
              <div
                onClick={() => setPage("leads")}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer border-l-4 border-blue-500"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-gray-500 text-sm">Total Leads</h3>
                    <p className="text-3xl font-bold mt-2">View</p>
                  </div>

                  <div className="bg-blue-100 p-3 rounded-lg">
                    <FileText className="text-blue-600" />
                  </div>
                </div>
              </div>

              {/* Newsletter Card */}
              <div
                onClick={() => setPage("newsletters")}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer border-l-4 border-green-500"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-gray-500 text-sm">
                      Newsletter Subscribers
                    </h3>
                    <p className="text-3xl font-bold mt-2">View</p>
                  </div>

                  <div className="bg-green-100 p-3 rounded-lg">
                    <Users className="text-green-600" />
                  </div>
                </div>
              </div>
            </div>
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

// import { useContext } from "react";
// import { AuthContext } from "../auth/AuthContext";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const { admin, logout } = useContext(AuthContext);
//   const navigate = useNavigate();
//  const handleLogout = () => {
//     logout();
//     navigate("/admin");
//   };

//   return (
//     <div className="p-10">
//       <h1 className="text-3xl font-bold">
//         Welcome {admin?.name}
//       </h1>

//       <button
//         onClick={handleLogout}
//         className="mt-5 bg-red-500 text-white px-4 py-2"
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Dashboard;
