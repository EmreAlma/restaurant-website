package com.restaurant.backend.repository;

import com.restaurant.backend.entity.Categories;
import com.restaurant.backend.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CategoryRepository extends JpaRepository<Categories, Long> {
}
