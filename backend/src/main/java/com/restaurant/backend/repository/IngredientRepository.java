package com.restaurant.backend.repository;

import com.restaurant.backend.entity.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface IngredientRepository extends JpaRepository<Ingredient, UUID> {
    List<Ingredient> findByCategoryId(Long categoryId);
}
