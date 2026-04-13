import { useEffect, useState } from "react";
import API_BASE_URL from "../config/api";

const ViewNewsletters = ({ goBack }) => {
  const [newsletters, setNewsletters] = useState([]);

  const fetchNewsletters = async () => {
    const res = await fetch(`${API_BASE_URL}/newsletters`);
const data = await res.json();
setNewsletters(data);
  };
  
  useEffect(() => {
    fetchNewsletters();
  }, []);

  const deleteNewsletter = async (id) => {
    const confirmDelete = window.confirm("Delete this newsletter?");

    if (!confirmDelete) return;

   await fetch(`${API_BASE_URL}/newsletters/${id}`, {
  method: "DELETE",
});

    setNewsletters(newsletters.filter((n) => n._id !== id));
  };

  const updateStatus = async (id, status) => {
    try {
      await fetch(`${API_BASE_URL}/newsletters/${id}/status`, {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ status }),
});

      setNewsletters((prev) =>
        prev.map((n) => (n._id === id ? { ...n, status } : n)),
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <button onClick={goBack} className="mb-4 bg-gray-200 px-4 py-2 rounded">
        ← Back
      </button>

      <h2 className="text-xl font-bold mb-4">Newsletter Subscribers</h2>

      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {newsletters.map((n) => (
              <tr key={n._id} className="border-t">
                <td className="p-3">{n.name}</td>

                <td className="p-3">{n.email}</td>

                <td className="p-3">
                  <select
                    value={n.status || "Pending"}
                    onChange={(e) => updateStatus(n._id, e.target.value)}
                    className={`px-3 py-1 rounded-full text-sm font-medium border outline-none cursor-pointer
      ${n.status === "Connected" ? "bg-green-100 text-green-600" : ""}
      ${n.status === "Pending" ? "bg-yellow-100 text-yellow-600" : ""}
      ${n.status === "Rejected" ? "bg-red-100 text-red-600" : ""}
    `}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Connected">Connected</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </td>

                <td className="p-3">
                  <button
                    onClick={() => deleteNewsletter(n._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
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

export default ViewNewsletters;
