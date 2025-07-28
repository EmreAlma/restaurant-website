"use client";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const ProductModal = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const [selectedIngredientsToAdd, setSelectedIngredientsToAdd] = useState([]);
  const [selectedIngredientsToRemove, setSelectedIngredientsToRemove] = useState([]);

  const toggleIngredientToAdd = (ingredientId) => {
    setSelectedIngredientsToAdd((prev) =>
      prev.includes(ingredientId)
        ? prev.filter((id) => id !== ingredientId)
        : [...prev, ingredientId]
    );
  };

  const toggleIngredientToRemove = (ingredientId) => {
    setSelectedIngredientsToRemove((prev) =>
      prev.includes(ingredientId)
        ? prev.filter((id) => id !== ingredientId)
        : [...prev, ingredientId]
    );
  };

  const handleAddToCart = () => {
    const ingredientsToAdd =
      product.ingredientstoAdd?.filter((i) => selectedIngredientsToAdd.includes(i.id)) ?? [];

    const ingredientsToRemove =
      product.ingredientstoRemove?.filter((i) => selectedIngredientsToRemove.includes(i.id)) ?? [];

    const extraPrice = ingredientsToAdd.reduce((sum, i) => sum + (i.price ?? 0), 0);

    addToCart({
      ...product,
      ingredientsToAdd,
      ingredientsToRemove,
      extraPrice, // qty yok – her biri 1 kabul
    });

    onClose();
  };

  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-2 text-sunset">{product.name}</h2>
        {product.description && (
          <p className="text-sm text-gray-600 mb-4">{product.description}</p>
        )}

        {/* Extra Zutaten */}
        {product.ingredientstoAdd?.length > 0 && (
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Extra Zutaten</h3>
            <div className="space-y-1 max-h-40 overflow-y-auto pr-1">
              {product.ingredientstoAdd.map((ingredient) => (
                <label key={ingredient.id} className="flex items-center text-sm">
                  <input
                    type="checkbox"
                    checked={selectedIngredientsToAdd.includes(ingredient.id)}
                    onChange={() => toggleIngredientToAdd(ingredient.id)}
                    className="mr-2 accent-sunset"
                  />
                  {ingredient.name} ({(ingredient.price ?? 0).toFixed(2)} CHF)
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Zutaten entfernen */}
        {product.ingredientstoRemove?.length > 0 && (
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Zutaten entfernen</h3>
            <div className="space-y-1 max-h-40 overflow-y-auto pr-1">
              {product.ingredientstoRemove.map((ingredient) => (
                <label key={ingredient.id} className="flex items-center text-sm">
                  <input
                    type="checkbox"
                    checked={selectedIngredientsToRemove.includes(ingredient.id)}
                    onChange={() => toggleIngredientToRemove(ingredient.id)}
                    className="mr-2 accent-sunset"
                  />
                  {ingredient.name}
                </label>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={handleAddToCart}
          className="w-full bg-oil text-black font-semibold py-2 rounded-full hover:bg-yellow-300 transition"
        >
          Zum Warenkorb hinzufügen
        </button>
      </div>
    </div>
  );
};

export default ProductModal;