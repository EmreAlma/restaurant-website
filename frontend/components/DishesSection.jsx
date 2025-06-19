import React from "react";

const DishesSection = () => {
  return (
    <section id="dishes" className="py-16 px-8">
      <h3 className="text-center text-2xl text-jellyBeanBlue">Our Dishes</h3>
      <h1 className="text-center text-3xl text-sunset uppercase mb-8">
        Popular Dishes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Dish Card 1 */}
        <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="relative">
            <img
              src="/images/dish-1.png"
              alt="Crispy Fried Chicken"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute top-3 left-3 flex space-x-2">
              <button className="bg-white p-2 rounded-full shadow hover:bg-sunset hover:text-white transition">
                <i className="fas fa-heart"></i>
              </button>
              <button className="bg-white p-2 rounded-full shadow hover:bg-sunset hover:text-white transition">
                <i className="fas fa-eye"></i>
              </button>
            </div>
          </div>
          <div className="p-4 text-center">
            <h3 className="text-xl font-bold text-sunset mb-2">
              Crispy Fried Chicken
            </h3>
            <div className="flex justify-center items-center space-x-1 mb-2">
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star-half-alt text-jellyBeanBlue"></i>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-sunset">$14.99</span>
              <button className="bg-sunset text-white px-4 py-2 rounded hover:bg-jellyBeanBlue transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        {/* Dish Card 2 */}
        <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="relative">
            <img
              src="/images/dish-2.png"
              alt="Chicken Katsudon"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute top-3 left-3 flex space-x-2">
              <button className="bg-white p-2 rounded-full shadow hover:bg-sunset hover:text-white transition">
                <i className="fas fa-heart"></i>
              </button>
              <button className="bg-white p-2 rounded-full shadow hover:bg-sunset hover:text-white transition">
                <i className="fas fa-eye"></i>
              </button>
            </div>
          </div>
          <div className="p-4 text-center">
            <h3 className="text-xl font-bold text-sunset mb-2">
              Chicken Katsudon
            </h3>
            <div className="flex justify-center items-center space-x-1 mb-2">
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star-half-alt text-jellyBeanBlue"></i>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-sunset">$8.99</span>
              <button className="bg-sunset text-white px-4 py-2 rounded hover:bg-jellyBeanBlue transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Dish Card 3 */}
        <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="relative">
            <img
              src="/images/dish-3.png"
              alt="Beef Tacos"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute top-3 left-3 flex space-x-2">
              <button className="bg-white p-2 rounded-full shadow hover:bg-sunset hover:text-white transition">
                <i className="fas fa-heart"></i>
              </button>
              <button className="bg-white p-2 rounded-full shadow hover:bg-sunset hover:text-white transition">
                <i className="fas fa-eye"></i>
              </button>
            </div>
          </div>
          <div className="p-4 text-center">
            <h3 className="text-xl font-bold text-sunset mb-2">Beef Tacos</h3>
            <div className="flex justify-center items-center space-x-1 mb-2">
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star-half-alt text-jellyBeanBlue"></i>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-sunset">$5.99</span>
              <button className="bg-sunset text-white px-4 py-2 rounded hover:bg-jellyBeanBlue transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Dish Card 4 */}
        <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="relative">
            <img
              src="/images/dish-4.png"
              alt="Belgian Waffles"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute top-3 left-3 flex space-x-2">
              <button className="bg-white p-2 rounded-full shadow hover:bg-sunset hover:text-white transition">
                <i className="fas fa-heart"></i>
              </button>
              <button className="bg-white p-2 rounded-full shadow hover:bg-sunset hover:text-white transition">
                <i className="fas fa-eye"></i>
              </button>
            </div>
          </div>
          <div className="p-4 text-center">
            <h3 className="text-xl font-bold text-sunset mb-2">
              Belgian Waffles
            </h3>
            <div className="flex justify-center items-center space-x-1 mb-2">
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star-half-alt text-jellyBeanBlue"></i>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-sunset">$6.99</span>
              <button className="bg-sunset text-white px-4 py-2 rounded hover:bg-jellyBeanBlue transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Dish Card 5 */}
        <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="relative">
            <img
              src="/images/dish-5.png"
              alt="Pizza Margherita"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute top-3 left-3 flex space-x-2">
              <button className="bg-white p-2 rounded-full shadow hover:bg-sunset hover:text-white transition">
                <i className="fas fa-heart"></i>
              </button>
              <button className="bg-white p-2 rounded-full shadow hover:bg-sunset hover:text-white transition">
                <i className="fas fa-eye"></i>
              </button>
            </div>
          </div>
          <div className="p-4 text-center">
            <h3 className="text-xl font-bold text-sunset mb-2">
              Pizza Margherita
            </h3>
            <div className="flex justify-center items-center space-x-1 mb-2">
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star-half-alt text-jellyBeanBlue"></i>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-sunset">$9.99</span>
              <button className="bg-sunset text-white px-4 py-2 rounded hover:bg-jellyBeanBlue transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Dish Card 6 */}
        <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="relative">
            <img
              src="/images/dish-6.png"
              alt="Miso Ramen"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute top-3 left-3 flex space-x-2">
              <button className="bg-white p-2 rounded-full shadow hover:bg-sunset hover:text-white transition">
                <i className="fas fa-heart"></i>
              </button>
              <button className="bg-white p-2 rounded-full shadow hover:bg-sunset hover:text-white transition">
                <i className="fas fa-eye"></i>
              </button>
            </div>
          </div>
          <div className="p-4 text-center">
            <h3 className="text-xl font-bold text-sunset mb-2">Miso Ramen</h3>
            <div className="flex justify-center items-center space-x-1 mb-2">
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star-half-alt text-jellyBeanBlue"></i>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-sunset">$8.99</span>
              <button className="bg-sunset text-white px-4 py-2 rounded hover:bg-jellyBeanBlue transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DishesSection;
