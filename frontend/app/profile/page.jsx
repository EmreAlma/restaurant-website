"use client";

import { useEffect, useState } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  if (!user) {
    return <p className="p-4">Bitte zuerst einloggen.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-sunset">Mein Profil</h1>
      <div className="space-y-2 bg-white p-4 rounded shadow">
        <p><strong>Vorname:</strong> {user.firstName}</p>
        <p><strong>Nachname:</strong> {user.lastName}</p>
        <p><strong>E-Mail:</strong> {user.username}</p>
        <p><strong>Telefonnummer:</strong> {user.phoneNumber || "-"}</p>

        {user.address && user.address.length > 0 ? (
          <>
            <h2 className="mt-4 text-lg font-semibold text-sunset">Adresse</h2>
            {user.address.map((addr, idx) => (
              <div key={idx} className="text-sm bg-gray-50 p-3 rounded mt-2 border">
                <p>{addr.fullName}</p>
                <p>{addr.street}</p>
                <p>{addr.postalCode} {addr.city}</p>
                {addr.description && <p className="italic">{addr.description}</p>}
              </div>
            ))}
          </>
        ) : (
          <p className="mt-4 text-sm text-gray-500 italic">Keine Adresse vorhanden.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
