import "./globals.css";
import { CartProvider } from "../context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Pizza Oregano",
  description: "Restaurant website built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body className="min-h-screen flex flex-col pt-20">
        <CartProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
