"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || user.role !== "OWNER") {
      router.push("/");
    } else {
      setIsAuthorized(true);
    }
  }, []);

  if (!isAuthorized) return null;

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4 space-y-6">
        <h2 className="text-xl font-bold">Admin Panel</h2>
        <nav className="flex flex-col space-y-2">
          <Link href="/admin/orders" className="hover:text-sunset">Bestellungen</Link>
          <Link href="/admin/products" className="hover:text-sunset">Produkte</Link>
          <Link href="/admin/categories" className="hover:text-sunset">Kategorien</Link>
          <Link href="/admin/users" className="hover:text-sunset">Kunden</Link>
        </nav>
      </aside>
      <main className="flex-1 bg-gray-100 p-6 overflow-auto">
        {children}
      </main>
    </div>
  );
}