"use client";

import { useState } from "react";

const RegisterPage = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      role: "CUSTOMER", // veya backend'in desteklediği başka bir varsayılan rol
    };

    try {
      const res = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Registration failed");

      const data = await res.json();
      console.log("Registered user:", data);
      alert("Erfolgreich registriert!");
    } catch (err) {
      console.error(err);
      alert("Fehler bei der Registrierung.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold mb-6 text-sunset">Registrieren</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="firstName" placeholder="Vorname" value={form.firstName} onChange={handleChange} required className="w-full border p-2 rounded" />
        <input name="lastName" placeholder="Nachname" value={form.lastName} onChange={handleChange} required className="w-full border p-2 rounded" />
        <input name="email" type="email" placeholder="E-Mail" value={form.email} onChange={handleChange} required className="w-full border p-2 rounded" />
        <input name="phoneNumber" placeholder="Telefonnummer" value={form.phoneNumber} onChange={handleChange} className="w-full border p-2 rounded" />
        <input name="username" placeholder="Benutzername" value={form.username} onChange={handleChange} required className="w-full border p-2 rounded" />
        <input name="password" type="password" placeholder="Passwort" value={form.password} onChange={handleChange} required className="w-full border p-2 rounded" />
        <button type="submit" className="w-full bg-sunset text-white py-2 rounded hover:bg-opacity-90">Registrieren</button>
      </form>
    </div>
  );
};

export default RegisterPage;
