const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="text-gray-600 hover:text-sunset">
                Home
              </a>
            </li>
            <li>
              <a href="#menu" className="text-gray-600 hover:text-sunset">
                Menu
              </a>
            </li>
            <li>
              <a href="#dishes" className="text-gray-600 hover:text-sunset">
                Dishes
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-600 hover:text-sunset">
                About
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Unsere Kontaktdaten</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="tel:+8801234567890"
                className="text-gray-600 hover:text-sunset"
              >
                <i className="fas fa-phone mr-2"></i>062 965 05 05
              </a>
            </li>
            <li>
              <a
                href="mailto:info@biteanddine.com"
                className="text-gray-600 hover:text-sunset"
              >
                <i className="fas fa-envelope mr-2"></i>info@pizzaoregano.com
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-sunset">
                <i className="fas fa-map mr-2"></i>Hauptstrasse 15, , Rohrbach 4938 Bern
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Öffnungszeiten</h3>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li><strong>Montag:</strong> Geschlossen</li>
            <li><strong>Di–Do:</strong> 11:30–13:30 / 17:00–22:00</li>
            <li><strong>Freitag:</strong> 11:30–13:30 / 17:00–23:00</li>
            <li><strong>Samstag:</strong> 11:30–14:00 / 16:00–23:00</li>
            <li><strong>Sontag:</strong> 11:30–14:00 / 16:00–22:00</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t pt-4 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-4">
        <p className="text-gray-600">© 2025 Pizza Oregano. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-sunset">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-600 hover:text-sunset">
            Terms of Service
          </a>
          <a href="#" className="text-gray-600 hover:text-sunset">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
