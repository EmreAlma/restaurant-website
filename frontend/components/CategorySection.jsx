const CategorySection = () => {
  return (
    <section className="py-16 px-8">
      <h3 className="text-center text-2xl text-jellyBeanBlue mb-8">
        
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-white p-4 rounded shadow">
          <img
            src="/images/image2.png"
            alt="Beef Delight Burger"
            className="mx-auto w-24 h-24 rounded-full shadow mb-4"
          />
          <h1 className="text-center font-bold text-lg">Doppel Cheeseburger</h1>
          <p className="text-center text-sm text-lightColor my-2">
            Mit Tomaten, Salat, Zwiebeln, Essiggurken und Sauce nach Wahl
          </p>
          <div className="flex justify-between items-center">
            <span className="font-semibold">17.00 CHF</span>
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
            Chicken Nuggets Teller
          </h1>
          <p className="text-center text-sm text-lightColor my-2">
            Serviert mit Pommes Frites, Salat und Sauce nach Wahl
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
          <h1 className="text-center font-bold text-lg">Pizza Quattro Stagioni</h1>
          <p className="text-center text-sm text-lightColor my-2">
            Tomatensauce, Mozzarella, Schinken, Champignons, Peperoni, Artischocken, Oregano
          </p>
          <div className="flex justify-between items-center">
            <span className="font-semibold">21.50 CHF</span>
            <button>
              <i className="fas fa-plus-circle text-sunset text-xl"></i>
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-4 rounded shadow">
          <img
            src="/images/menu-3.png"
            alt="Chicken Tonkatsu Ramen"
            className="mx-auto w-24 h-24 rounded-full shadow mb-4"
          />
          <h1 className="text-center font-bold text-lg">
            Kebab im Fladenbrot
          </h1>
          <p className="text-center text-sm text-lightColor my-2">
            Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl
          </p>
          <div className="flex justify-between items-center">
            <span className="font-semibold">$10.99</span>
            <button>
              <i className="fas fa-plus-circle text-sunset text-xl"></i>
            </button>
          </div>
        </div>
         <div className="bg-white p-4 rounded shadow">
          <img
            src="/images/image2.png"
            alt="Beef Delight Burger"
            className="mx-auto w-24 h-24 rounded-full shadow mb-4"
          />
          <h1 className="text-center font-bold text-lg">Doppel Cheeseburger</h1>
          <p className="text-center text-sm text-lightColor my-2">
            Mit Tomaten, Salat, Zwiebeln, Essiggurken und Sauce nach Wahl
          </p>
          <div className="flex justify-between items-center">
            <span className="font-semibold">17.00 CHF</span>
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
            Chicken Nuggets Teller
          </h1>
          <p className="text-center text-sm text-lightColor my-2">
            Serviert mit Pommes Frites, Salat und Sauce nach Wahl
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
          <h1 className="text-center font-bold text-lg">Pizza Quattro Stagioni</h1>
          <p className="text-center text-sm text-lightColor my-2">
            Tomatensauce, Mozzarella, Schinken, Champignons, Peperoni, Artischocken, Oregano
          </p>
          <div className="flex justify-between items-center">
            <span className="font-semibold">21.50 CHF</span>
            <button>
              <i className="fas fa-plus-circle text-sunset text-xl"></i>
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-4 rounded shadow">
          <img
            src="/images/menu-3.png"
            alt="Chicken Tonkatsu Ramen"
            className="mx-auto w-24 h-24 rounded-full shadow mb-4"
          />
          <h1 className="text-center font-bold text-lg">
            Kebab im Fladenbrot
          </h1>
          <p className="text-center text-sm text-lightColor my-2">
            Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl
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
