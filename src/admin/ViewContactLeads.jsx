import { useEffect, useState } from "react";
import API_BASE_URL from "../config/api";
import toast from "react-hot-toast";
import { ArrowLeft, Trash2, Search, FileDown, X } from "lucide-react";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const ViewContactLeads = ({ goBack }) => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);

  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");

  const [confirmDelete, setConfirmDelete] = useState(null);
  const [showMessage, setShowMessage] = useState(null);

  const fetchLeads = async () => {
    try {
      setLoading(true);

      const res = await fetch(`${API_BASE_URL}/contact-leads`);
      const data = await res.json();

      setLeads(data);
    } catch {
      toast.error("Failed to load contact leads");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  /* ---------------- STATUS UPDATE ---------------- */

  const updateStatus = async (id, status) => {
    try {
      await fetch(`${API_BASE_URL}/contact-leads/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      setLeads((prev) =>
        prev.map((l) => (l._id === id ? { ...l, status } : l)),
      );

      toast.success("Status updated");
    } catch {
      toast.error("Update failed");
    }
  };

  /* ---------------- DELETE ---------------- */

  const deleteLead = async (id) => {
    try {
      await fetch(`${API_BASE_URL}/contact-leads/${id}`, {
        method: "DELETE",
      });

      setLeads((prev) => prev.filter((l) => l._id !== id));

      toast.success("Lead deleted");
    } catch {
      toast.error("Delete failed");
    }
  };

  /* ---------------- BULK DELETE ---------------- */

  const deleteSelected = async () => {
    try {
      await Promise.all(
        selected.map((id) =>
          fetch(`${API_BASE_URL}/contact-leads/${id}`, {
            method: "DELETE",
          }),
        ),
      );

      setLeads((prev) => prev.filter((l) => !selected.includes(l._id)));

      setSelected([]);

      toast.success("Selected leads deleted");
    } catch {
      toast.error("Bulk delete failed");
    }
  };

  /* ---------------- EXPORT PDF ---------------- */

  const exportPDF = () => {
    const doc = new jsPDF();

    doc.text("Contact Leads", 14, 15);

    autoTable(doc, {
      startY: 20,
      head: [["Name", "Company", "Phone", "Email", "Subject", "Status"]],
      body: leads.map((l) => [
        l.fullName,
        l.companyName,
        l.phone,
        l.email,
        l.subject,
        l.status,
      ]),
    });

    doc.save("contact-leads.pdf");
  };

  /* ---------------- SEARCH FILTER ---------------- */

  const filteredLeads = leads.filter((l) =>
    `${l.fullName} ${l.email} ${l.companyName}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  /* ---------------- STATUS COLOR ---------------- */

  const statusColor = (status) => {
    if (status === "Pending") return "bg-yellow-100 text-yellow-700";

    if (status === "Replied") return "bg-green-100 text-green-700";

    if (status === "Closed") return "bg-gray-200 text-gray-700";

    return "";
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      {/* HEADER */}

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button onClick={goBack}>
            <ArrowLeft />
          </button>

          <h1 className="text-xl font-bold">Contact Leads ({leads.length})</h1>
        </div>

        <div className="flex gap-3">
          {/* SEARCH */}

          <div className="relative">
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={16}
            />

            <input
              type="text"
              placeholder="Search leads..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border rounded-lg pl-9 pr-3 py-2 text-sm"
            />
          </div>

          {/* EXPORT */}

          <button
            onClick={exportPDF}
            className="flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm"
          >
            <FileDown size={16} />
            Export
          </button>

          {/* BULK DELETE */}

          {selected.length > 0 && (
            <button
              onClick={deleteSelected}
              className="bg-red-500 text-white px-3 py-2 rounded-lg text-sm"
            >
              Delete Selected
            </button>
          )}
        </div>
      </div>

      {/* TABLE */}

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    e.target.checked
                      ? setSelected(filteredLeads.map((l) => l._id))
                      : setSelected([])
                  }
                />
              </th>

              <th className="p-3">Name</th>
              <th className="p-3">Company</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Email</th>
              <th className="p-3">Subject</th>
              <th className="p-3">Message</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {loading && (
              <tr>
                <td colSpan="9" className="text-center py-6">
                  Loading leads...
                </td>
              </tr>
            )}

            {!loading &&
              filteredLeads.map((l) => (
                <tr key={l._id} className="border-t hover:bg-gray-50">
                  <td className="p-3">
                    <input
                      type="checkbox"
                      checked={selected.includes(l._id)}
                      onChange={(e) =>
                        e.target.checked
                          ? setSelected([...selected, l._id])
                          : setSelected(selected.filter((i) => i !== l._id))
                      }
                    />
                  </td>

                  <td className="p-3 font-medium">{l.fullName}</td>

                  <td className="p-3">{l.companyName}</td>

                  <td className="p-3">{l.phone}</td>

                  <td className="p-3">{l.email}</td>

                  <td className="p-3">{l.subject}</td>

                  {/* MESSAGE */}

                  <td className="p-3 max-w-[220px]">
                    {l.message.split(" ").length > 3 ? (
                      <>
                        {l.message.split(" ").slice(0, 3).join(" ")}...
                        <button
                          onClick={() => setShowMessage(l.message)}
                          className="text-blue-600 ml-1 text-xs"
                        >
                          Read more
                        </button>
                      </>
                    ) : (
                      l.message
                    )}
                  </td>

                  {/* STATUS */}

                  <td className="p-3">
                    <select
                      value={l.status}
                      onChange={(e) => updateStatus(l._id, e.target.value)}
                      className={`px-2 py-1 rounded text-xs ${statusColor(
                        l.status,
                      )}`}
                    >
                      <option>Pending</option>
                      <option>Replied</option>
                      <option>Closed</option>
                    </select>
                  </td>

                  {/* ACTION */}

                  <td className="p-3">
                    <button
                      onClick={() => setConfirmDelete(l._id)}
                      className="text-red-500"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* DELETE CONFIRMATION */}

      {confirmDelete && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Delete this lead?</h2>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setConfirmDelete(null)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  deleteLead(confirmDelete);
                  setConfirmDelete(null);
                }}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MESSAGE MODAL */}

      {showMessage && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white max-w-lg w-full p-6 rounded-xl shadow-lg relative">
            <button
              onClick={() => setShowMessage(null)}
              className="absolute top-3 right-3"
            >
              <X />
            </button>

            <h2 className="font-semibold mb-3">Full Message</h2>

            <p className="text-gray-700">{showMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewContactLeads;
