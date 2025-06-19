const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-16 px-8 flex flex-col md:flex-row items-center"
    >
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img
          src="/images/about-img.png"
          alt="About Us"
          className="w-full rounded"
        />
      </div>
      <div className="md:w-1/2 md:pl-8">
        <h3 className="text-4xl text-sunset mb-4">
          Where Flavor Meets Passion
        </h3>
        <p className="text-lg text-lightColor mb-4">
          At our restaurant, every dish is a masterpiece crafted with the finest
          ingredients. Our mission is to serve food that delights your taste
          buds and warms your heart.
        </p>
        <p className="text-lg text-lightColor mb-4">
          From the farm to your plate, our commitment to quality ensures an
          unforgettable dining experience.
        </p>
        <div className="flex space-x-6 mb-4">
          <div className="flex items-center space-x-2">
            <i className="fas fa-star text-3xl text-jellyBeanBlue"></i>
            <div>
              <span className="font-bold text-lg text-sunset">
                Exceptional Taste
              </span>
              <p className="text-sm text-lightColor">
                Dishes created by chefs passionate about flavor and
                authenticity.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-thumbs-up text-3xl text-jellyBeanBlue"></i>
            <div>
              <span className="font-bold text-lg text-sunset">
                Trusted by Many
              </span>
              <p className="text-sm text-lightColor">
                A reputation built on excellent service and memorable dining
                experiences.
              </p>
            </div>
          </div>
        </div>
        <button className="bg-sunset text-white px-6 py-3 rounded hover:bg-jellyBeanBlue transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
