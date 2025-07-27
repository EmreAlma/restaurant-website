"use client";

import { useState } from "react";
import HomeSection from "../components/HomeSection";
import CategorySection from "../components/CategorySection";
import CategoryMenu from "../components/CategoryMenu";
import AboutSection from "../components/AboutSection";
import ProductList from "../components/ProductList";
import ReviewSection from "../components/ReviewSection";

export default function Home() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  return (
    <>
      <main>
        <HomeSection />
        <CategorySection />
        <CategoryMenu onSelectCategory={setSelectedCategoryId} />
        <ProductList categoryId={selectedCategoryId} />
        <AboutSection />
        <ReviewSection />
      </main>
    </>
  );
}