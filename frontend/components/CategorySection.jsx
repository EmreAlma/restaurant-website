const CategorySection = () => {
  return (
    <section className="py-16 px-8">
      <h3 className="text-center text-2xl text-jellyBeanBlue mb-8">
        Featured Flavours
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-white p-4 rounded shadow">
          <img
            src="/images/image2.png"
            alt="Beef Delight Burger"
            className="mx-auto w-24 h-24 rounded-full shadow mb-4"
          />
          <h1 className="text-center font-bold text-lg">Beef Delight Burger</h1>
          <p className="text-center text-sm text-lightColor my-2">
            Grilled twin beef patty with bacon, cheese and fresh ingredients
            creating a delightful experience.
          </p>
          <div className="flex justify-between items-center">
            <span className="font-semibold">$9.99</span>
            <button>
              <i className="fas fa-plus-circle text-sunset text-xl"></i>
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-4 rounded shadow">
          <img
            src="/images/image3.png"
            alt="Chicken Cutlet with fries"
            className="mx-auto w-24 h-24 rounded-full shadow mb-4"
          />
          <h1 className="text-center font-bold text-lg">
            Chicken Cutlet with fries
          </h1>
          <p className="text-center text-sm text-lightColor my-2">
            A deep fried chicken cutlet with crispy french fries and salad on
            the side.
          </p>
          <div className="flex justify-between items-center">
            <span className="font-semibold">$12.99</span>
            <button>
              <i className="fas fa-plus-circle text-sunset text-xl"></i>
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-4 rounded shadow">
          <img
            src="/images/image4.png"
            alt="Beef Lovers Pizza"
            className="mx-auto w-24 h-24 rounded-full shadow mb-4"
          />
          <h1 className="text-center font-bold text-lg">Beef Lovers Pizza</h1>
          <p className="text-center text-sm text-lightColor my-2">
            A traditional meaty pizza topped with fresh tomatoes, mozzarella and
            olives.
          </p>
          <div className="flex justify-between items-center">
            <span className="font-semibold">$14.99</span>
            <button>
              <i className="fas fa-plus-circle text-sunset text-xl"></i>
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-4 rounded shadow">
          <img
            src="/images/image5.png"
            alt="Chicken Tonkatsu Ramen"
            className="mx-auto w-24 h-24 rounded-full shadow mb-4"
          />
          <h1 className="text-center font-bold text-lg">
            Chicken Tonkatsu Ramen
          </h1>
          <p className="text-center text-sm text-lightColor my-2">
            A rich brothy ramen with boiled egg and roasted chicken slices.
          </p>
          <div className="flex justify-between items-center">
            <span className="font-semibold">$10.99</span>
            <button>
              <i className="fas fa-plus-circle text-sunset text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
