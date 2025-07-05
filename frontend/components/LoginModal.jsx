"use client";

import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const LoginModal = ({ isOpen, onClose, openRegisterModal }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { setCartItems } = useCart();

  useEffect(() => {
    if (isOpen) {
      setCredentials({ username: "", password: "" });
      setError("");
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      if (!res.ok) {
        setError("Ungültiger Benutzername oder Passwort.");
        return;
      }

      const data = await res.json();

      localStorage.setItem("user", JSON.stringify({
        token: data.token,
        id: data.id,
        role: data.userRole,
        username: data.username,
        firstName: data.firstName,
        lastName: data.lastName,
        phoneNumber: data.phoneNumber,
        address: data.address,
      }));

      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }


      onClose();
      location.reload();
    } catch (error) {
      console.error("Login error:", error);
      setError("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Benutzername"
            value={credentials.username}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Passwort"
            value={credentials.password}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />

          <button
            type="submit"
            className="w-full bg-sunset text-white py-2 rounded hover:bg-opacity-90 transition"
          >
            Einloggen
          </button>

          <div className="mt-4 text-sm text-center">
            <p className="mb-2">
              <button
                type="button"
                onClick={() => alert("Passwort zurücksetzen ist noch nicht implementiert.")}
                className="text-sunset hover:underline"
              >
                Passwort vergessen?
              </button>
            </p>
            <p>
              Noch kein Konto?{" "}
              <button
                type="button"
                onClick={openRegisterModal}
                className="text-sunset hover:underline"
              >
                Jetzt registrieren
              </button>
            </p>
          </div>
        </form>

        <button
          onClick={onClose}
          className="text-sm text-gray-500 mt-4 hover:underline"
        >
          Abbrechen
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
