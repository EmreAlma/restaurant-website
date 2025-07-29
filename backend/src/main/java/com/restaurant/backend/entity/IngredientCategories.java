package com.restaurant.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "IngredientCategories")
public class IngredientCategories {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "categoryName")
    private String categoryName;


    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public IngredientCategories(String categoryName) {
        this.categoryName = categoryName;
    }

    public IngredientCategories() {
    }
}
