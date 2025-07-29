package com.restaurant.backend.repository;

import com.restaurant.backend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface ProductRepository extends JpaRepository<Product, UUID> {
    List<Product> findByCategoryId(Long categoryId);
    List<Product> findByName(String name);
    List<Product> findByNameContainingIgnoreCase(String name);
}
