package com.restaurant.backend.repository;


import com.restaurant.backend.entity.IngredientCategories;
import org.springframework.data.jpa.repository.JpaRepository;


public interface IngredientCategoriesRepository extends JpaRepository<IngredientCategories, Long> {
}
