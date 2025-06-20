import React, { useState, useEffect } from "react";

const HomeSection = () => {
  const images = [
    "/images/image4.png",
    "/images/image2.png",
    "/images/dish-5.png",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="pt-32 flex flex-col md:flex-row items-center justify-between px-8 pb-32"
    >
      <div className="flex-1">
        <h2 className="text-5xl text-sunset font-bold mb-4">
          Satisfy Your Cravings <br />
          Anytime, Anywhere
        </h2>
        <p className="text-lg text-lightColor mb-6">
          Craving something delicious? We've got you covered. Freshly prepared
          meals, delivered right to your doorstep.
        </p>
        <button className="bg-sunset text-white px-6 py-3 rounded hover:bg-jellyBeanBlue transition">
          Discover Food
        </button>
      </div>

      <div className="flex-1 relative mt-8 md:mt-0 w-full h-[400px]">
        <img
          src={images[index]}
          alt={`Food ${index + 1}`}
          className="absolute w-[80%] h-auto rounded object-cover transition-opacity duration-1000"
        />
      </div>
    </section>
  );
};

export default HomeSection;
