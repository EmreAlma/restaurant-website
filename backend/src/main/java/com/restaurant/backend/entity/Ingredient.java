package com.restaurant.backend.entity;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name = "ingredient")
public class Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(name = "price")
    private Double price;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private IngredientCategories category;

    public Ingredient() {
    }
    public Ingredient(UUID id) {
        this.id = id;
    }

    public Ingredient(String name, Double price, Long categoryid) {
        this.name = name;
        this.price = price;
        this.category = new IngredientCategories();
        this.category.setId(categoryid);
    }

    public IngredientCategories getCategory() {
        return category;
    }

    public void setCategory(IngredientCategories category) {
        this.category = category;
    }

    public Double getPrice() {
        return price;
    }
    public void setPrice(Double price) {
        this.price = price;
    }
    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}