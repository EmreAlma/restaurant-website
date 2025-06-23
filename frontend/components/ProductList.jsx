"use client";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const ProductList = ({ categoryId }) => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    if (categoryId) {
      fetch(`http://localhost:8080/api/products/category/${categoryId}`)
        .then((res) => res.json())
        .then(setProducts);
    }
  }, [categoryId]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-2 py-6">
      {Array.isArray(products) &&
        products.map((prod) => (
          <div
            key={prod.id}
            className="bg-white rounded-lg p-3 shadow-sm border border-gray-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-1">
                <h2 className="text-sm font-semibold text-primary">
                  {prod.name}
                </h2>
                <span className="text-sm font-medium text-lightColor">
                  {prod.price.toFixed(2)} CHF
                </span>
              </div>
              <p className="text-xs text-gray-600 line-clamp-2">{prod.description}</p>
            </div>
            <div className="mt-3 text-right">
              <button
                onClick={() => addToCart(prod)}
                className="bg-oil text-black px-3 py-1 rounded-full text-sm font-bold shadow hover:scale-105 hover:bg-yellow-300 active:scale-95 active:bg-yellow-400 transition-all duration-150 ease-in-out"
                title="In den Warenkorb"
              >
                +
              </button>

            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductList;
