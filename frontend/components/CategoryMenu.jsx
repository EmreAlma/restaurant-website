"use client";

import { useEffect, useState } from "react";

const CategoryMenu = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCategories(data);
          console.log("Categories loaded:", data);
          if (data.length > 0) {
            setActiveId(data[0].id);
            onSelectCategory(data[0].id);
          }
        } else {
          console.error("Kategori verisi beklenilen formatta değil:", data);
        }
      })
      .catch((error) => {
        console.error("Kategori verisi alınırken hata oluştu:", error);
      });
  }, []);

  const handleClick = (id) => {
    console.log("Selected category:", id);
    setActiveId(id);
    onSelectCategory(id);
  };

  return (
    <div className="flex overflow-x-auto gap-4 px-4 py-2">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => handleClick(cat.id)}
          className={`px-4 py-2 rounded-full border transition ${
            activeId === cat.id
              ? "bg-sunset text-white"
              : "bg-white text-gray-600 border-gray-300"
          }`}
        >
          {cat.categoryName}
        </button>
      ))}
    </div>
  );
};

export default CategoryMenu;
