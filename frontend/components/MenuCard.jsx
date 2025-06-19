import React from "react";

const MenuCard = ({ title, description, price, image }) => {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-sunset hover:text-white transition">
          <i className="fas fa-heart"></i>
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-center items-center space-x-1 mb-2">
          {[...Array(4)].map((_, i) => (
            <i key={i} className="fas fa-star text-jellyBeanBlue"></i>
          ))}
          <i className="fas fa-star-half-alt text-jellyBeanBlue"></i>
        </div>
        <h3 className="text-center text-xl text-sunset font-bold mb-2">
          {title}
        </h3>
        <p className="text-center text-sm text-lightColor mb-4">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-sunset">{price}</span>
          <button className="bg-sunset text-white px-4 py-2 rounded hover:bg-jellyBeanBlue transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
