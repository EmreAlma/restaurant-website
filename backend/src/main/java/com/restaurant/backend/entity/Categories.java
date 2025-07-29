package com.restaurant.backend.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name = "categories")
public class Categories {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "categoryName")
    private String categoryName;

    @ManyToMany
    @JoinTable(
            name = "category_ingredient_category",
            joinColumns = @JoinColumn(name = "category_id"),
            inverseJoinColumns = @JoinColumn(name = "ingredient_category_id")
    )
    @JsonIgnore
    private List<IngredientCategories> ingredientCategories = new ArrayList<>();


    public List<IngredientCategories> getIngredientCategories() {
        return ingredientCategories;
    }

    public void setIngredientCategories(List<IngredientCategories> ingredientCategories) {
        this.ingredientCategories = ingredientCategories;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public Categories(String categoryName, Long id) {
        this.categoryName = categoryName;
        this.id = id;
    }

    public Categories() {
    }

    public Categories(String categoryName) {
        this.categoryName = categoryName;
    }

    public Categories(String categoryName, List<IngredientCategories> ingredientCategories) {
        this.categoryName = categoryName;
        this.ingredientCategories = ingredientCategories;
    }
}
