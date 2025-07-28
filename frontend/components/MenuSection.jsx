"use client";

import { useEffect, useState } from "react";
import ProductModal from "./ProductModal";

const MenuSection = () => {
  const [categories, setCategories] = useState([]);
  const [activeId, setActiveId] = useState(null);

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [catLoading, setCatLoading] = useState(true);
  const [prodLoading, setProdLoading] = useState(false);
  const [catError, setCatError] = useState(null);
  const [prodError, setProdError] = useState(null);

  // Kategorileri çek
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setCatLoading(true);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`);
        const data = await res.json();
        if (mounted && Array.isArray(data)) {
          setCategories(data);
          if (data.length > 0) {
            setActiveId(data[0].id);
          }
        }
      } catch (e) {
        setCatError("Kategoriler yüklenemedi.");
      } finally {
        setCatLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  // Seçili kategori ürünlerini çek
  useEffect(() => {
    if (!activeId) return;
    let mounted = true;

    (async () => {
      try {
        setProdLoading(true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/products/category/${activeId}`
        );
        const data = await res.json();
        if (mounted) {
          setProducts(Array.isArray(data) ? data : []);
        }
      } catch (e) {
        setProdError("Ürünler yüklenemedi.");
      } finally {
        setProdLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [activeId]);

  const handleCategoryClick = (id) => {
    setActiveId(id);
  };

  return (
    <section id="menu" className="py-16 px-8">
      <h2 className="text-2xl md:text-3xl font-bold text-sunset mb-6">
        Unsere Speisekarte
      </h2>
      {/* Category chips (CategoryMenu stilini korur) */}
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 py-2">
        {catLoading ? (
          <span className="text-sm text-gray-500">Kategoriler yükleniyor...</span>
        ) : catError ? (
          <span className="text-sm text-red-500">{catError}</span>
        ) : (
          categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className={`px-4 py-2 rounded-full border transition-all duration-150 snap-start ${
                activeId === cat.id
                  ? "bg-sunset text-white shadow-md scale-[1.03]"
                  : "bg-white text-gray-600 border-gray-300 hover:border-sunset/50"
              }`}
            >
              {cat.categoryName}
            </button>
          ))
        )}
      </div>

      {/* Products grid (ProductList stilini korur) */}
      <div className="relative">
        {prodLoading ? (
          <div className="px-2 py-6 text-sm text-gray-500">Ürünler yükleniyor...</div>
        ) : prodError ? (
          <div className="px-2 py-6 text-sm text-red-500">{prodError}</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-2 py-6">
            {Array.isArray(products) &&
              products.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-white rounded-lg p-3 shadow-sm border border-gray-200 flex flex-col justify-between transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <h2 className="text-sm font-semibold text-primary">{prod.name}</h2>
                      <span className="text-sm font-medium text-lightColor">
                        {(prod.price ?? 0).toFixed(2)} CHF
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 line-clamp-2">
                      {prod.description}
                    </p>
                  </div>
                  <div className="mt-3 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProduct(prod);
                      }}
                      className="bg-oil text-black px-3 py-1 rounded-full text-sm font-bold shadow hover:scale-105 hover:bg-yellow-300 active:scale-95 active:bg-yellow-400 transition-all duration-150 ease-in-out"
                      title="In den Warenkorb"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};

export default MenuSection;
