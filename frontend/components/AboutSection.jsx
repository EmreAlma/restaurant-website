const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-16 px-8 flex flex-col md:flex-row items-center"
    >
      <div className="md:w-5/12 mb-8 md:mb-0">
        <img
          src="/images/about-img.png"
          alt="About Us"
          className="w-10/12 sm:w-8/12 md:w-full max-w-md h-auto object-contain mx-auto rounded"
        />
      </div>

      <div className="md:w-7/12 md:pl-8">
        <h3 className="text-4xl text-sunset mb-4">
          Willkommen bei Pizzeria Oregano
        </h3>

        <p className="text-lg text-lightColor mb-4">
          Erleben Sie die perfekte Kombination aus italienischer und türkischer
          Küche in unserem gemütlichen und einladenden Restaurant. Bei <strong>Pizzeria Oregano</strong> bieten wir eine vielfältige
          Speisekarte, die für jeden Geschmack etwas bereithält.
        </p>
        
        <div className="text-lg text-lightColor mb-4">
          <p className="font-semibold mb-2">Unsere Services:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Schnelle Lieferung:</strong> Wir bringen Ihre Speisen warm und frisch direkt zu Ihnen nach Hause.</li>
            <li><strong>Abholservice:</strong> Holen Sie Ihre Bestellung einfach und bequem bei uns ab.</li>
          </ul>
        </div>

        <div className="text-lg text-lightColor mb-4 space-y-2">
          <p>Freuen Sie sich auf unvergessliche Geschmackserlebnisse – ob bei uns vor Ort oder gemütlich bei Ihnen zu Hause!</p>
          <p>📍 <strong>Adresse:</strong> Hauptstrasse 15, 4938 Rohrbach</p>
          <p>📞 <strong>Bestellung und Informationen:</strong> 062 965 05 05 oder <a href="https://www.pizzaoregano.ch" className="text-sunset underline">www.pizzaoregano.ch</a></p>
          <p>Guten Appetit!</p>
        </div>

        <div className="text-sm text-lightColor space-y-1">
          <p>&gt; Alle Preise sind inkl. gesetzlicher MWST.</p>
          <p>&gt; Alle Pizzas sind bei Abholung günstiger!</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
