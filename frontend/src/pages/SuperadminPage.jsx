import { useState, useEffect } from "react";
import axios from "axios";

const API_BASE = "http://localhost:5000";

export default function SuperadminPage() {
  const [admins, setAdmins] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const [error, setError] = useState("");

  const token = sessionStorage.getItem("adminToken");
  // Fetch admins from backend
  const fetchAdmins = async () => {
    try {
      const res = await axios.get(`${API_BASE}/admin`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Admins API response:", res.data);
      if (Array.isArray(res.data)) setAdmins(res.data);
      else setAdmins([]);
    } catch (err) {
      if (err.response) console.error("Fetch admins error:", err.response.data);
      else console.error("Fetch admins error:", err.message);
      setAdmins([]);
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  // Add new admin
  const handleAddAdmin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    try {
      await axios.post(
        `${API_BASE}/admin`,
        { email, password, role },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setEmail("");
      setPassword("");
      setRole("admin");
      setError("");
      fetchAdmins(); // refresh list
    } catch (err) {
      setError(err.response?.data?.msg || "Failed to add admin");
    }
  };

  // Delete admin
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this admin?")) return;

    try {
      await axios.delete(`${API_BASE}/admin/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchAdmins(); // refresh list
    } catch (err) {
      setError(err.response?.data?.msg || "Failed to delete admin");
    }
  };

  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Superadmin Dashboard</h1>

      {/* Add Admin Form */}
      <form
        onSubmit={handleAddAdmin}
        className="bg-white p-6 rounded shadow mb-6 w-full max-w-md"
      >
        <h2 className="text-xl font-semibold mb-4">Add New Admin</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border p-2 w-full mb-4"
        >
          <option value="admin">Admin</option>
          <option value="superadmin">Superadmin</option>
        </select>
        <button
          type="submit"
          className="bg-green-500 text-white p-2 w-full rounded hover:bg-green-600"
        >
          Add Admin
        </button>
      </form>

      {/* Admins Table */}
      <div className="bg-white p-6 rounded shadow w-full max-w-3xl">
        <h2 className="text-xl font-semibold mb-4">Existing Admins</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Role</th>
              <th className="border p-2">Created At</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <tr key={admin.id}>
                <td className="border p-2">{admin.id}</td>
                <td className="border p-2">{admin.email}</td>
                <td className="border p-2">{admin.role}</td>
                <td className="border p-2">
                  {new Date(admin.created_at).toLocaleString()}
                </td>
                <td className="border p-2">
                  <button
                    onClick={() => handleDelete(admin.id)}
                    className="bg-red-500 text-white p-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {admins.length === 0 && (
              <tr>
                <td colSpan="5" className="p-2 text-center">
                  No admins found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
