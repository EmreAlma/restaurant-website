package com.restaurant.backend.repository;

import com.restaurant.backend.entity.Ingredient;
import com.restaurant.backend.entity.IngredientCategories;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface IngredientRepository extends JpaRepository<Ingredient, UUID> {
    List<Ingredient> findByCategoryId(Long categoryId);
    Optional<Ingredient> findByName(String name);
    List<Ingredient> findByCategoryIn(List<IngredientCategories> categories);
}
