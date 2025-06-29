"use client";

import { useState } from "react";
import Header from "../components/Header";
import HomeSection from "../components/HomeSection";
import CategorySection from "../components/CategorySection";
import CategoryMenu from "../components/CategoryMenu";
import DishesSection from "../components/DishesSection";
import AboutSection from "../components/AboutSection";
import ProductList from "../components/ProductList";
import ReviewSection from "../components/ReviewSection";
import Footer from "../components/Footer";

export default function Home() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  return (
    <>
      <Header />
      <main>
        <HomeSection />
        <CategorySection />
        <CategoryMenu onSelectCategory={setSelectedCategoryId} />
        <ProductList categoryId={selectedCategoryId} />
        <DishesSection />
        <AboutSection />
        <ReviewSection />
      </main>
      <Footer />
    </>
  );
}

