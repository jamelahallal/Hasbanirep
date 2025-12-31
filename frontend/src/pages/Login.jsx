import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/login", {
        email: email.trim().toLowerCase(),
        password: password.trim(),
      });

      console.log("Server response:", res.data); // Already there
      console.log("Submitting email:", email);
      console.log("Submitting password:", password);

      // Log role for debugging
      console.log("Role from response:", res.data.role);
      const role = res.data.role.toLowerCase().trim();
      console.log("Normalized role:", role);

      // Save token and role
      sessionStorage.setItem("adminToken", res.data.token);
      sessionStorage.setItem("adminRole", role);

      navigate(role === "superadmin" ? "/admin/superadmin" : "/admin/products");
    } catch (err) {
      console.error("Login error:", err.response?.data);
      setError(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow w-96"
      >
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
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
          className="border p-2 w-full mb-4"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">
          Login
        </button>
      </form>
    </div>
  );
}
