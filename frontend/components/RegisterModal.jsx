"use client";

import { useState, useEffect } from "react";

const RegisterModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (isOpen) {
      setForm({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
      });
      setSuccessMessage("");
      setErrorMessage("");
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    ...form,
    role: "CUSTOMER",
  };
try {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

    if (!res.ok) throw new Error("Registration failed");

    const text = await res.text(); // 🔄 JSON yerine text
    console.log("Register response:", text);

    setSuccessMessage("✅ Erfolgreich registriert!");
    setErrorMessage("");
    setTimeout(() => {
      onClose();
    }, 1000);
  } catch (err) {
    console.error("Register error:", err);
    setErrorMessage("❌ Fehler bei der Registrierung.");
    setSuccessMessage("");
  }
};



  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-sunset">Registrieren</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input name="username" type="email" placeholder="E-Mail" value={form.username} onChange={handleChange} required className="w-full border p-2 rounded" />
          <input name="firstName" placeholder="Vorname" value={form.firstName} onChange={handleChange} required className="w-full border p-2 rounded" />
          <input name="lastName" placeholder="Nachname" value={form.lastName} onChange={handleChange} required className="w-full border p-2 rounded" />
          <input name="phoneNumber" placeholder="Telefonnummer" value={form.phoneNumber} onChange={handleChange} className="w-full border p-2 rounded" />
          <input name="password" type="password" placeholder="Passwort" value={form.password} onChange={handleChange} required className="w-full border p-2 rounded" />

          <button type="submit" className="w-full bg-sunset text-white py-2 rounded hover:bg-opacity-90">
            Registrieren
          </button>
        </form>

        {(successMessage || errorMessage) && (
          <p className="text-sm mt-2 text-center text-gray-700">
            {successMessage || errorMessage}
          </p>
        )}

        <button onClick={onClose} className="text-sm text-gray-500 mt-4 hover:underline block mx-auto">
          Abbrechen
        </button>
      </div>
    </div>
  );
};

export default RegisterModal;
