import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Trash2 } from "lucide-react";
import API_BASE_URL from "../config/api";
import toast from "react-hot-toast";

const STATUS_OPTIONS = ["Pending", "Approved", "Rejected", "Spam"];

const ViewComments = ({ goBack }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState([]);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [actionLoadingId, setActionLoadingId] = useState("");
  const [bulkDeleting, setBulkDeleting] = useState(false);

  const fetchComments = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE_URL}/comments`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Failed to fetch comments.");
      }

      setComments(Array.isArray(data) ? data : []);
    } catch (error) {
      toast.error(error?.message || "Failed to fetch comments.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const filteredComments = useMemo(() => {
    return comments.filter((item) => {
      const matchesSearch =
        item.name?.toLowerCase().includes(search.toLowerCase()) ||
        item.email?.toLowerCase().includes(search.toLowerCase()) ||
        item.comment?.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        filterStatus === "All" ? true : item.status === filterStatus;

      return matchesSearch && matchesStatus;
    });
  }, [comments, search, filterStatus]);

  const isAllSelected =
    filteredComments.length > 0 &&
    filteredComments.every((item) => selectedIds.includes(item._id));

  const toggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedIds((prev) =>
        prev.filter((id) => !filteredComments.some((item) => item._id === id))
      );
    } else {
      setSelectedIds((prev) => [
        ...new Set([...prev, ...filteredComments.map((item) => item._id)]),
      ]);
    }
  };

  const toggleSelectOne = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleStatusChange = async (id, status) => {
    try {
      setActionLoadingId(id);

      const res = await fetch(`${API_BASE_URL}/comments/${id}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Failed to update comment status.");
      }

      setComments((prev) =>
        prev.map((item) => (item._id === id ? { ...item, status } : item))
      );

      toast.success("Comment status updated.");
    } catch (error) {
      toast.error(error?.message || "Failed to update comment status.");
    } finally {
      setActionLoadingId("");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this comment?"
    );
    if (!confirmDelete) return;

    try {
      setActionLoadingId(id);

      const res = await fetch(`${API_BASE_URL}/comments/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Failed to delete comment.");
      }

      setComments((prev) => prev.filter((item) => item._id !== id));
      setSelectedIds((prev) => prev.filter((item) => item !== id));
      toast.success("Comment deleted successfully.");
    } catch (error) {
      toast.error(error?.message || "Failed to delete comment.");
    } finally {
      setActionLoadingId("");
    }
  };

  const handleBulkDelete = async () => {
    if (selectedIds.length === 0) {
      toast.error("Please select comments to delete.");
      return;
    }

    const confirmDelete = window.confirm(
      `Delete ${selectedIds.length} selected comment(s)?`
    );
    if (!confirmDelete) return;

    try {
      setBulkDeleting(true);

      const res = await fetch(`${API_BASE_URL}/comments`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ids: selectedIds }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Failed to delete selected comments.");
      }

      setComments((prev) => prev.filter((item) => !selectedIds.includes(item._id)));
      setSelectedIds([]);
      toast.success("Selected comments deleted successfully.");
    } catch (error) {
      toast.error(error?.message || "Failed to delete selected comments.");
    } finally {
      setBulkDeleting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl border shadow-sm p-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-5">
        <div className="flex items-center gap-3">
          <button
            onClick={goBack}
            className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 hover:bg-gray-50"
          >
            <ArrowLeft size={18} />
            Back
          </button>
          <div>
            <h2 className="text-xl font-bold">All Comments</h2>
            <p className="text-sm text-gray-500">
              Manage all submitted website comments
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:flex-row">
          <input
            type="text"
            placeholder="Search by name, email, comment..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-lg border px-3 py-2 outline-none focus:border-blue-500"
          />

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="rounded-lg border px-3 py-2 outline-none focus:border-blue-500"
          >
            <option value="All">All Status</option>
            {STATUS_OPTIONS.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>

          <button
            onClick={handleBulkDelete}
            disabled={bulkDeleting || selectedIds.length === 0}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-white disabled:opacity-50"
          >
            <Trash2 size={16} />
            {bulkDeleting ? "Deleting..." : `Delete Selected (${selectedIds.length})`}
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[1100px] text-sm">
          <thead>
            <tr className="border-b bg-gray-50 text-left">
              <th className="p-3">
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  onChange={toggleSelectAll}
                />
              </th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Comment</th>
              <th className="p-3">Policy</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="8" className="p-6 text-center text-gray-500">
                  Loading comments...
                </td>
              </tr>
            ) : filteredComments.length === 0 ? (
              <tr>
                <td colSpan="8" className="p-6 text-center text-gray-500">
                  No comments found.
                </td>
              </tr>
            ) : (
              filteredComments.map((item) => (
                <tr key={item._id} className="border-b align-top hover:bg-gray-50">
                  <td className="p-3">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(item._id)}
                      onChange={() => toggleSelectOne(item._id)}
                    />
                  </td>

                  <td className="p-3 font-medium">{item.name}</td>
                  <td className="p-3">{item.email}</td>
                  <td className="p-3 max-w-[380px] whitespace-pre-wrap break-words">
                    {item.comment}
                  </td>
                  <td className="p-3">
                    {item.acceptedPolicy ? "Accepted" : "No"}
                  </td>
                  <td className="p-3">
                    <select
                      value={item.status}
                      onChange={(e) => handleStatusChange(item._id, e.target.value)}
                      disabled={actionLoadingId === item._id}
                      className="rounded-md border px-2 py-1 outline-none focus:border-blue-500"
                    >
                      {STATUS_OPTIONS.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="p-3">
                    {new Date(item.createdAt).toLocaleString()}
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => handleDelete(item._id)}
                      disabled={actionLoadingId === item._id}
                      className="inline-flex items-center gap-2 rounded-md bg-red-50 px-3 py-2 text-red-600 hover:bg-red-100 disabled:opacity-50"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewComments;