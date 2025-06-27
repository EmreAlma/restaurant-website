// app/admin/layout.jsx
export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-800 text-white p-4 hidden md:block">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav className="space-y-4">
          <a href="/admin" className="block hover:underline">Dashboard</a>
          <a href="/admin/orders" className="block hover:underline">Bestellungen</a>
          <a href="/admin/products" className="block hover:underline">Produkte</a>
          <a href="/admin/categories" className="block hover:underline">Kategorien</a>
          <a href="/admin/users" className="block hover:underline">Benutzer</a>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
}
