import "./globals.css";
import { CartProvider } from "../context/CartContext";
import { AuthProvider } from "../context/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RouteGuards from "@/components/RouteGuards";
import { Suspense } from "react";

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
        <AuthProvider>
            <CartProvider>
                <Header />
                <main className="flex-grow">{children}</main>
                <Footer />
                <Suspense fallback={null}>
                    <RouteGuards />
                </Suspense>
            </CartProvider>
        </AuthProvider>
        </body>
        </html>
    );
}
