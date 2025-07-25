"use client";
import { useMemo, useState, useEffect } from "react";
import { X } from "lucide-react"; 

const ProductModal = ({ product, onClose, onAddToCart }) => {
  const [selectedToAdd, setSelectedToAdd] = useState([]);
  const [selectedToRemove, setSelectedToRemove] = useState([]);

  // Varsayılan olarak modal açıldığında state'i sıfırla
  useEffect(() => {
    setSelectedToAdd([]);
    setSelectedToRemove([]);
  }, [product]);

  if (!product) return null;

  const toggle = (list, setter) => (id) => {
    setter((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleIngredientToAdd = toggle(selectedToAdd, setSelectedToAdd);
  const toggleIngredientToRemove = toggle(selectedToRemove, setSelectedToRemove);

  const ingredientsToAdd =
    product.ingredientstoAdd?.filter((i) => selectedToAdd.includes(i.id)) ?? [];
  const ingredientsToRemove =
    product.ingredientstoRemove?.filter((i) =>
      selectedToRemove.includes(i.id)
    ) ?? [];

  const extraPrice = useMemo(
    () =>
      ingredientsToAdd.reduce(
        (sum, i) => sum + (i.price ?? 0),
        0
      ),
    [ingredientsToAdd]
  );

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      ingredientsToAdd,
      ingredientsToRemove,
      extraPrice,
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-lg mx-4 rounded-xl bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-start justify-between border-b p-5">
          <div>
            <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
            {product.description && (
              <p className="mt-1 text-sm text-gray-500">
                {product.description}
              </p>
            )}
          </div>

          <button
            className="rounded p-1 text-gray-500 hover:bg-gray-100"
            onClick={onClose}
            aria-label="Modal schließen"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body (scrollable) */}
        <div className="max-h-[80vh] overflow-y-auto p-5">
          {/* Extra Zutaten */}
          {product.ingredientstoAdd?.length > 0 && (
            <section className="mb-6">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-700">
                Extra Zutaten
              </h3>
              <div className="space-y-2">
                {product.ingredientstoAdd.map((ingredient) => (
                  <label
                    key={ingredient.id}
                    className="flex cursor-pointer items-center justify-between rounded border p-2 text-sm hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedToAdd.includes(ingredient.id)}
                        onChange={() => toggleIngredientToAdd(ingredient.id)}
                        className="h-4 w-4 rounded border-gray-300 text-sunset focus:ring-sunset"
                      />
                      <span>{ingredient.name}</span>
                    </div>
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700">
                      {(ingredient.price ?? 0).toFixed(2)} CHF
                    </span>
                  </label>
                ))}
              </div>
            </section>
          )}

          {/* Zutaten entfernen */}
          {product.ingredientstoRemove?.length > 0 && (
            <section className="mb-2">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-700">
                Zutaten entfernen
              </h3>
              <div className="space-y-2">
                {product.ingredientstoRemove.map((ingredient) => (
                  <label
                    key={ingredient.id}
                    className="flex cursor-pointer items-center gap-2 rounded border p-2 text-sm hover:bg-gray-50"
                  >
                    <input
                      type="checkbox"
                      checked={selectedToRemove.includes(ingredient.id)}
                      onChange={() => toggleIngredientToRemove(ingredient.id)}
                      className="h-4 w-4 rounded border-gray-300 text-sunset focus:ring-sunset"
                    />
                    <span>{ingredient.name}</span>
                  </label>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Footer / Actions */}
        <div className="flex items-center justify-between border-t p-5">
          <button
            onClick={onClose}
            className="rounded-md px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
          >
            Abbrechen
          </button>

          <button
          onClick={handleAddToCart}
          className="rounded-md bg-sunset px-4 py-2 text-sm font-semibold text-white transition hover:bg-opacity-90"
          >
            Hinzufügen
            {extraPrice > 0 && (
              <span className="ml-2 rounded bg-white/20 px-2 py-0.5 text-xs">
                +{extraPrice.toFixed(2)} CHF
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;