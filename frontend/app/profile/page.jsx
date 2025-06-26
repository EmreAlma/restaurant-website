"use client";

import { useEffect, useState } from "react";

const ProfilPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const localUser = localStorage.getItem("user");
    if (localUser) {
      setUser(JSON.parse(localUser));
    }
  }, []);

  if (!user) return <p className="p-4">Bitte einloggen...</p>;

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Mein Profil</h1>
      <div className="space-y-2">
        <p><strong>Vorname:</strong> {user.firstName}</p>
        <p><strong>Nachname:</strong> {user.lastName}</p>
        <p><strong>Telefon:</strong> {user.phoneNumber || "-"}</p>
        <p><strong>E-Mail / Benutzername:</strong> {user.username}</p>
      </div>
    </div>
  );
};

export default ProfilPage;
