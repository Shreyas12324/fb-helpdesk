import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", form);
      navigate("/login");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
  <div className="min-h-screen bg-blue-800 flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg w-[350px]">
      <h2 className="text-center text-lg font-semibold mb-6">Create Account</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 text-sm">Name</label>
        <input
          type="text"
          name="name"
          className="w-full border p-2 mb-4 rounded"
          value={form.name}
          onChange={handleChange}
          required
        />
        <label className="block mb-2 text-sm">Email</label>
        <input
          type="email"
          name="email"
          className="w-full border p-2 mb-4 rounded"
          value={form.email}
          onChange={handleChange}
          required
        />
        <label className="block mb-2 text-sm">Password</label>
        <input
          type="password"
          name="password"
          className="w-full border p-2 mb-4 rounded"
          value={form.password}
          onChange={handleChange}
          required
        />
        <div className="mb-4 flex items-center">
          <input type="checkbox" className="mr-2" />
          <label className="text-sm">Remember Me</label>
        </div>
        <button type="submit" className="bg-blue-800 text-white w-full py-2 rounded">Sign Up</button>
        <p className="text-sm mt-4 text-center">
          Already have an account? <a href="/login" className="text-blue-600">Login</a>
        </p>
      </form>
    </div>
    </div>
  );
}
