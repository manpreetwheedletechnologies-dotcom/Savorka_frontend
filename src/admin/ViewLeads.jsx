import { useEffect, useState } from "react";
import { ArrowLeft, Search } from "lucide-react";
import API_BASE_URL from "../config/api";
import toast from "react-hot-toast";

const ViewLeads = ({ goBack }) => {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [category, setCategory] = useState("Residential");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const leadsPerPage = 10;

  // Fetch Leads
  const fetchLeads = async () => {
    try {
      setLoading(true);

      const res = await fetch(`${API_BASE_URL}/leads?category=${category}`);

      if (!res.ok) {
        throw new Error("Failed to fetch leads");
      }

      const data = await res.json();

      setLeads(data);

      if (data.length === 0) {
        toast("No leads found for this category");
      }
    } catch (error) {
      toast.error("Unable to load leads. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    fetchLeads();
  }, [category]);

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch]);

  // Search debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  // Update Status
  const updateStatus = async (id, status) => {
    try {
      const res = await fetch(`${API_BASE_URL}/leads/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      if (!res.ok) {
        throw new Error("Status update failed");
      }

      setLeads((prev) =>
        prev.map((lead) => (lead._id === id ? { ...lead, status } : lead)),
      );

      toast.success("Lead status updated");
    } catch (err) {
      toast.error("Failed to update status");
    }
  };

  // Delete Lead
  const deleteLead = (id) => {
    toast((t) => (
      <div className="flex flex-col gap-3">
        <span className="font-medium">
          Are you sure you want to delete this lead?
        </span>

        <div className="flex gap-2 justify-end">
          <button
            className="px-3 py-1 text-sm bg-gray-200 rounded"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>

          <button
            className="px-3 py-1 text-sm bg-red-500 text-white rounded"
            onClick={async () => {
              toast.dismiss(t.id);

              try {
                const res = await fetch(`${API_BASE_URL}/leads/${id}`, {
                  method: "DELETE",
                });

                if (!res.ok) {
                  throw new Error("Delete failed");
                }

                setLeads((prev) => prev.filter((lead) => lead._id !== id));

                toast.success("Lead deleted successfully");
              } catch (error) {
                toast.error("Failed to delete lead");
              }
            }}
          >
            Delete
          </button>
        </div>
      </div>
    ));
  };

  // Search Filter
  const filteredLeads = leads.filter((lead) => {
    const name = lead.name?.toLowerCase() || "";
    const phone = String(lead.whatsapp || "");

    return (
      name.includes(debouncedSearch.toLowerCase()) ||
      phone.includes(debouncedSearch)
    );
  });

  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;

  const currentLeads = filteredLeads.slice(indexOfFirstLead, indexOfLastLead);

  const totalPages = Math.ceil(filteredLeads.length / leadsPerPage);

  // Dynamic Columns
  const getColumns = () => {
    if (category === "Residential") {
      return [
        "Name",
        "WhatsApp",
        "Pincode",
        "Monthly Bill",
        "Status",
        "Actions",
      ];
    }

    if (category === "Housing Society") {
      return [
        "Name",
        "Society Name",
        "Pincode",
        "WhatsApp",
        "Monthly Bill",
        "AGM Status",
        "Designation",
        "Status",
        "Actions",
      ];
    }

    if (category === "Commercial") {
      return [
        "Name",
        "Company Name",
        "City",
        "Pincode",
        "WhatsApp",
        "Monthly Bill",
        "Status",
        "Actions",
      ];
    }
  };

  const columns = getColumns();

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button onClick={goBack} className="p-2 rounded-lg hover:bg-gray-100">
            <ArrowLeft size={22} />
          </button>

          <h1 className="text-2xl font-bold text-gray-800">Leads Dashboard</h1>
        </div>

        <div className="text-sm text-gray-500">
          Total Leads :{" "}
          <span className="font-semibold">{filteredLeads.length}</span>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="flex gap-3 mb-6">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border px-3 py-2 rounded-lg"
        >
          <option value="Residential">Residential</option>
          <option value="Housing Society">Housing Society</option>
          <option value="Commercial">Commercial</option>
        </select>

        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 text-gray-400" size={18} />

          <input
            type="text"
            placeholder="Search by name or phone"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border pl-10 pr-3 py-2 rounded-lg w-full"
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="border rounded-lg overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((col, i) => (
                <th key={i} className="p-4 text-sm font-semibold text-gray-600">
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={columns.length} className="text-center py-10">
                  <div className="py-10 text-gray-500 animate-pulse">
                    Loading leads...
                  </div>
                </td>
              </tr>
            ) : filteredLeads.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="text-center py-10 text-gray-400"
                >
                  No matching leads found
                </td>
              </tr>
            ) : (
              currentLeads.map((lead) => (
                <tr key={lead._id} className="border-t hover:bg-gray-50">
                  {category === "Residential" && (
                    <>
                      <td className="p-4">{lead.name}</td>
                      <td className="p-4">{lead.whatsapp}</td>
                      <td className="p-4">{lead.pincode}</td>
                      <td className="p-4">₹ {lead.bill}</td>
                    </>
                  )}

                  {category === "Housing Society" && (
                    <>
                      <td className="p-4">{lead.name}</td>
                      <td className="p-4">{lead.societyName}</td>
                      <td className="p-4">{lead.pincode}</td>
                      <td className="p-4">{lead.whatsapp}</td>
                      <td className="p-4">₹ {lead.monthlyBill}</td>
                      <td className="p-4">{lead.agmStatus}</td>
                      <td className="p-4">{lead.designation}</td>
                    </>
                  )}

                  {category === "Commercial" && (
                    <>
                      <td className="p-4">{lead.name}</td>
                      <td className="p-4">{lead.companyName}</td>
                      <td className="p-4">{lead.city}</td>
                      <td className="p-4">{lead.pincode}</td>
                      <td className="p-4">{lead.whatsapp}</td>
                      <td className="p-4">₹ {lead.commercialBill}</td>
                    </>
                  )}

                  {/* STATUS */}
                  <td className="p-4">
                    <select
                      value={lead.status}
                      onChange={(e) => updateStatus(lead._id, e.target.value)}
                      className={`px-3 py-1 rounded-full text-xs font-medium border

                      ${lead.status === "Connected" ? "bg-green-100 text-green-600" : ""}
                      ${lead.status === "Pending" ? "bg-yellow-100 text-yellow-600" : ""}
                      ${lead.status === "Rejected" ? "bg-red-100 text-red-600" : ""}

                      `}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Connected">Connected</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>

                  {/* ACTION */}
                  <td className="p-4">
                    <button
                      onClick={() => deleteLead(lead._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-6">
        <div className="text-sm text-gray-500">
          Page {currentPage} of {totalPages}
        </div>

        <div className="flex gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="px-3 py-1 border rounded disabled:opacity-40"
          >
            Previous
          </button>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-3 py-1 border rounded disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewLeads;

