const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Our Branches</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-sunset">
                <i className="fas fa-map-marker-alt mr-2"></i>Mirpur
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-sunset">
                <i className="fas fa-map-marker-alt mr-2"></i>Dhanmandi
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-sunset">
                <i className="fas fa-map-marker-alt mr-2"></i>Gulshan
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-sunset">
                <i className="fas fa-map-marker-alt mr-2"></i>Banani
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="text-gray-600 hover:text-sunset">
                Home
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
            <li>
              <a href="#menu" className="text-gray-600 hover:text-sunset">
                Menu
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="tel:+8801234567890"
                className="text-gray-600 hover:text-sunset"
              >
                <i className="fas fa-phone mr-2"></i>+880 1234 567-890
              </a>
            </li>
            <li>
              <a
                href="mailto:info@biteanddine.com"
                className="text-gray-600 hover:text-sunset"
              >
                <i className="fas fa-envelope mr-2"></i>info@biteanddine.com
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-sunset">
                <i className="fas fa-map mr-2"></i>69/a, Mirpur, Dhaka 1234
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Connect with Us
          </h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-8 h-8 bg-sunset text-white rounded-full flex items-center justify-center hover:bg-jellyBeanBlue"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-sunset text-white rounded-full flex items-center justify-center hover:bg-jellyBeanBlue"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-sunset text-white rounded-full flex items-center justify-center hover:bg-jellyBeanBlue"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t pt-4 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-4">
        <p className="text-gray-600">© 2025 Bite&Dine. All rights reserved.</p>
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
