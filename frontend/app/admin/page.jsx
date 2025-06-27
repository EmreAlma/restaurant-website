// app/admin/page.jsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const AdminPage = () => {
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || user.role !== "OWNER") {
      router.push("/");
    }
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Willkommen im Admin Panel</h1>
      <p className="text-gray-700">Hier kannst du Bestellungen, Produkte, Kategorien und Benutzer verwalten.</p>
    </div>
  );
};

export default AdminPage;
