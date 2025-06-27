"use client";

import Link from "next/link";

const AdminDashboard = () => {
  const cards = [
    { title: "Bestellungen verwalten", link: "/admin/orders", description: "Alle Bestellungen anzeigen und verwalten" },
    { title: "Produkte verwalten", link: "/admin/products", description: "Produkte hinzufügen, bearbeiten oder löschen" },
    { title: "Kategorien verwalten", link: "/admin/categories", description: "Produktkategorien verwalten" },
    { title: "Benutzerübersicht", link: "/admin/users", description: "Alle registrierten Benutzer anzeigen" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-sunset">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <Link key={index} href={card.link}>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md cursor-pointer border border-gray-200 transition">
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
