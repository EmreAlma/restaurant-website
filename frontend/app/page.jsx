"use client";

import { useState } from "react";
import Header from "../components/Header";
import Cart from "../components/Cart";
import HomeSection from "../components/HomeSection";
import CategorySection from "../components/CategorySection";
import CategoryMenu from "../components/CategoryMenu";
import DishesSection from "../components/DishesSection";
import AboutSection from "../components/AboutSection";
import MenuSection from "../components/MenuSection";
import ProductList from "../components/ProductList";
import ReviewSection from "../components/ReviewSection";
import OrderSection from "../components/OrderSection";
import Footer from "../components/Footer";

export default function Home() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  return (
    <>
      <Header />
      <Cart />
      <main>
        <HomeSection />
        <CategorySection />
        <CategoryMenu onSelectCategory={setSelectedCategoryId} />
        <ProductList categoryId={selectedCategoryId} />
        <DishesSection />
        <AboutSection />
        <MenuSection />
        <ReviewSection />
        <OrderSection />
      </main>
      <Footer />
    </>
  );
}

