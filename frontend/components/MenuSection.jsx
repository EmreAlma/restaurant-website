"use client";

import React, { useEffect, useState } from "react";
import MenuCard from "./MenuCard";

const MenuSection = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/menu`);
        const data = await res.json();
        if (Array.isArray(data)) {
          setMenuItems(data);
        } else {
          console.error("Menü verisi beklenilen formatta değil:", data);
        }
      } catch (error) {
        console.error("Menü verisi alınırken hata oluştu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <section id="menu" className="py-16 px-8">
      <h3 className="text-center text-2xl text-jellyBeanBlue mb-4">Our Menu</h3>
      <h1 className="text-center text-3xl text-sunset uppercase mb-8">
        Today's Delights
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {menuItems.map((item) => (
          <MenuCard
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
