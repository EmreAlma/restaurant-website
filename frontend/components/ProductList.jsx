"use client";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const ProductList = ({ categoryId }) => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart(); // cart context hook

  useEffect(() => {
    if (categoryId) {
      fetch(`http://localhost:8080/api/products/category/${categoryId}`)
        .then((res) => res.json())
        .then(setProducts);
    }
  }, [categoryId]);


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-8">
      {Array.isArray(products) &&
        products.map((prod) => (
          <div key={prod.id} className="bg-white p-4 rounded shadow">
            <h1 className="text-lg font-bold">{prod.name}</h1>
            <p className="text-sm text-gray-600 my-2">{prod.description}</p>
            <div className="mt-4 flex justify-between items-center">
              {prod.priceLarge ? (
                <div className="space-x-2 text-sm">
                  <button
                    onClick={() => addToCart(prod, "small")}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    {prod.price.toFixed(2)} CHF (small)
                  </button>
                  <button
                    onClick={() => addToCart(prod, "large")}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    {prod.priceLarge.toFixed(2)} CHF (large)
                  </button>
                </div>
              ) : (
                <span className="text-sm">
                  <button
                    onClick={() => addToCart(prod)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    {prod.price.toFixed(2)} CHF
                  </button>
                </span>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductList;
