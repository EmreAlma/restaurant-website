"use client";
import { useState } from "react";

const ProductModal = ({ product, onClose, onAddToCart }) => {
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
        const ingredientsToAdd = product.ingredientstoAdd?.filter((i) =>
            selectedIngredientsToAdd.includes(i.id)
        );

        const ingredientsToRemove = product.ingredientstoRemove?.filter((i) =>
            selectedIngredientsToRemove.includes(i.id)
        );

        onAddToCart({
            ...product,
            ingredientsToAdd: ingredientsToAdd || [],
            ingredientsToRemove: ingredientsToRemove || [],
        });
        onClose();
    };

    if (!product) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-md w-full shadow-lg relative">
                <button
                    className="absolute top-2 right-2 text-gray-500"
                    onClick={onClose}
                >
                    ✕
                </button>
                <h2 className="text-xl font-bold mb-4">{product.name}</h2>
                <p className="text-sm text-gray-600 mb-4">{product.description}</p>

                <div className="mb-4">
                    <h3 className="font-semibold mb-2">Malzeme Ekle</h3>
                    {product.ingredientstoAdd?.map((ingredient) => (
                        <label key={ingredient.id} className="block text-sm mb-1">
                            <input
                                type="checkbox"
                                checked={selectedIngredientsToAdd.includes(ingredient.id)}
                                onChange={() => toggleIngredientToAdd(ingredient.id)}
                                className="mr-2"
                            />
                            {ingredient.name} ({ingredient.price.toFixed(2)} CHF)
                        </label>
                    ))}
                </div>

                <div className="mb-4">
                    <h3 className="font-semibold mb-2">Malzeme Çıkar</h3>
                    {product.ingredientstoRemove?.map((ingredient) => (
                        <label key={ingredient.id} className="block text-sm mb-1">
                            <input
                                type="checkbox"
                                checked={selectedIngredientsToRemove.includes(ingredient.id)}
                                onChange={() => toggleIngredientToRemove(ingredient.id)}
                                className="mr-2"
                            />
                            {ingredient.name} ({ingredient.price?.toFixed(2) || "0.00"} CHF)
                        </label>
                    ))}
                </div>

                <button
                    onClick={handleAddToCart}
                    className="bg-oil text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-yellow-300 transition-all"
                >
                    Sepete Ekle
                </button>
            </div>
        </div>
    );
};

export default ProductModal;
