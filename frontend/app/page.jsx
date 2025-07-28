"use client";

import { useState } from "react";
import HomeSection from "../components/HomeSection";
import CategorySection from "../components/CategorySection"
import AboutSection from "../components/AboutSection";
import MenuSection from "../components/MenuSection";
import ReviewSection from "../components/ReviewSection";

export default function Home() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  return (
    <>
      <main>
        <HomeSection />
        <CategorySection />
        <MenuSection />
        <AboutSection />
        <ReviewSection />
      </main>
    </>
  );
}