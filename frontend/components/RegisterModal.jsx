"use client";

import { useState, useEffect } from "react";

const RegisterModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (isOpen) {
      setForm({
        password: "",
        firstName: "",
        lastName: "",
        email: "",
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
      // username: form.email, // if backend needs a username send email as username
      role: "CUSTOMER",
    };

    try {
      const res = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Registration failed");

      const data = await res.json();
      setSuccessMessage("✅ Erfolgreich registriert!");
      setErrorMessage("");
      onClose(); // Modal kapatılabilir ya da toast eklenebilir
    } catch (err) {
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
          <input name="firstName" placeholder="Vorname" value={form.firstName} onChange={handleChange} required className="w-full border p-2 rounded" />
          <input name="lastName" placeholder="Nachname" value={form.lastName} onChange={handleChange} required className="w-full border p-2 rounded" />
          <input name="email" type="email" placeholder="E-Mail" value={form.email} onChange={handleChange} required className="w-full border p-2 rounded" />
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
