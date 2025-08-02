package com.restaurant.backend.model.product;

import com.restaurant.backend.entity.Categories;
import com.restaurant.backend.entity.Ingredient;


import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class ProductIngredients {
    private UUID id;

    private String name;

    private String description;

    private Double price;

    private String image;

    private Categories category;

   private List<Ingredient> ingredientstoAdd=new ArrayList<>();

    private List<Ingredient> ingredientstoRemove=new ArrayList<>();


    public ProductIngredients() {
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Categories getCategory() {
        return category;
    }

    public void setCategory(Categories category) {
        this.category = category;
    }

    public List<Ingredient> getIngredientstoAdd() {
        return ingredientstoAdd;
    }

    public void setIngredientstoAdd(List<Ingredient> ingredientstoAdd) {
        this.ingredientstoAdd = ingredientstoAdd;
    }

    public List<Ingredient> getIngredientstoRemove() {
        return ingredientstoRemove;
    }

    public void setIngredientstoRemove(List<Ingredient> ingredientstoRemove) {
        this.ingredientstoRemove = ingredientstoRemove;
    }
}
