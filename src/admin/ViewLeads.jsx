import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

import API from "../api/axios";

const ViewLeads = ({ goBack }) => {
  const [leads, setLeads] = useState([]);
const [search, setSearch] = useState("");
  useEffect(() => {
    API.get("/leads")
      .then((res) => setLeads(res.data))
      .catch((err) => console.log(err));
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await API.patch(`/leads/${id}/status`, { status });

      setLeads((prev) =>
        prev.map((lead) => (lead._id === id ? { ...lead, status } : lead)),
      );
    } catch (err) {
      console.log(err);
    }
  };

  const deleteLead = async (id) => {

  const confirmDelete = window.confirm("Are you sure you want to delete this lead?");

  if (!confirmDelete) return;

  try {

    await API.delete(`/leads/${id}`);

    setLeads(leads.filter((lead) => lead._id !== id));

  } catch (error) {

    console.error("Delete failed", error);

  }

};

const filteredLeads = leads.filter((lead) =>
  lead.name.toLowerCase().includes(search.toLowerCase()) ||
  lead.whatsapp.includes(search)
);


  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      {/* Top Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={goBack}
          className="p-2 rounded-lg hover:bg-gray-100 transition"
        >
          <ArrowLeft size={22} />
        </button>

        <h1 className="text-2xl font-bold text-gray-800">All Leads</h1>
      </div>

      <input
  type="text"
  placeholder="Search by name or phone"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="border px-3 py-2 rounded mb-4 w-full"
/>

      {/* Table Container */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          {/* Table Header */}
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 border-b border-gray-200 font-semibold text-gray-700">
                Name
              </th>
              <th className="p-4 border-b border-gray-200 font-semibold text-gray-700">
                WhatsApp
              </th>
              <th className="p-4 border-b border-gray-200 font-semibold text-gray-700">
                Pincode
              </th>
              <th className="p-4 border-b border-gray-200 font-semibold text-gray-700">
                Monthly Bill
              </th>
              <th className="p-4 border-b border-gray-200 font-semibold text-gray-700">
                Category
              </th>
              <th className="p-4 border-b border-gray-200 font-semibold text-gray-700">
                Status
              </th>
              <th className="p-4 border-b border-gray-200 font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {filteredLeads.map((lead) => (
              <tr
                key={lead._id}
                className="hover:bg-gray-50 transition border-b border-gray-200"
              >
                <td className="p-4">{lead.name}</td>
                <td className="p-4">{lead.whatsapp}</td>
                <td className="p-4">{lead.pincode}</td>
                <td className="p-4 font-medium text-gray-700">₹ {lead.bill}</td>
                <td className="p-4">
                  <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-600 font-medium">
                    {lead.category}
                  </span>
                </td>
                <td className="p-4">
                  <select
                    value={lead.status || "Pending"}
                    onChange={(e) => updateStatus(lead._id, e.target.value)}
                    className={`px-3 py-1 rounded-full text-sm font-medium border outline-none cursor-pointer
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
                <td className="p-4">
    <button
      onClick={() => deleteLead(lead._id)}
      className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer hover:bg-red-600 transition"
    >
      Delete
    </button>
  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewLeads;
