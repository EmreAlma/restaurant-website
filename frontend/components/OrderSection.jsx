import { useState } from "react";

const OrderSection = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <section
      id="order"
      className="py-16 px-8 bg-gray-100 rounded-lg max-w-4xl mx-auto my-16"
    >
      <h3 className="text-center text-xl text-sunset mb-2">Order Now</h3>
      <h1 className="text-center text-3xl text-gray-800 mb-8">Free and Fast</h1>
      <form className="space-y-6">
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex-1">
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your number"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex-1">
            <label className="block text-gray-700 mb-1">Order</label>
            <select className="w-full p-2 border rounded">
              <option disabled selected>
                Select your food
              </option>
              <option>Beef Lovers Pizza</option>
              <option>Beef Delight Burger</option>
              <option>Chicken Tonkatsu Ramen</option>
              <option>Assorted Fruit Salad</option>
              <option>Belgian Waffles</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 mb-1">Additional Food</label>
            <select className="w-full p-2 border rounded">
              <option disabled selected>
                Select Sides
              </option>
              <option>French Fries</option>
              <option>Garlic Bread</option>
              <option>Szechuan Sauce</option>
              <option>Caesar Salad</option>
              <option>Coleslaw</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex-1">
            <label className="block text-gray-700 mb-1">Item Quantity</label>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={decreaseQuantity}
                className="bg-sunset text-white px-3 py-1 rounded"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                readOnly
                className="w-16 p-2 border rounded text-center"
              />
              <button
                type="button"
                onClick={increaseQuantity}
                className="bg-sunset text-white px-3 py-1 rounded"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 mb-1">Date and Time</label>
            <input
              type="datetime-local"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex-1">
            <label className="block text-gray-700 mb-1">Address</label>
            <textarea
              placeholder="Enter your address"
              className="w-full p-2 border rounded"
              rows="3"
            ></textarea>
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 mb-1">
              Additional Info (if any)
            </label>
            <textarea
              placeholder="Start typing"
              className="w-full p-2 border rounded"
              rows="3"
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-sunset text-white p-3 rounded hover:bg-jellyBeanBlue transition"
        >
          Order Now
        </button>
      </form>
    </section>
  );
};

export default OrderSection;
