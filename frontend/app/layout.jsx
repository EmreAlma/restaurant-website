import "./globals.css";
import { CartProvider } from "../context/CartContext"; // Adjust the path if needed

export const metadata = {
  title: "Bite&Dine - Good Food, Great Mood",
  description: "Restaurant website built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome for icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
