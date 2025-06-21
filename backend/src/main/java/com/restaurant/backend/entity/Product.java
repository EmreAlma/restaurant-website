package com.restaurant.backend.entity;

import com.restaurant.backend.enums.ProductCategory;
import com.restaurant.backend.enums.UserRoles;
import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.UUID;

@Entity
@Table(name = "product")
public class Product {

    @Id
    private UUID id;

    @Column(nullable = false)
    private String name;

    private String description;

    @Column(name = "price")
    private Double price;

    @Column(name = "price_large")
    private Double priceLarge;

    @Column(name = "image")
    private String image;


    @Column(name = "category")
    @Enumerated(EnumType.STRING)
    private ProductCategory category;

    public ProductCategory getCategory() {
        return category;
    }

    public void setCategory(ProductCategory category) {
        this.category = category;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
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

    public Double getPriceLarge() {
        return priceLarge;
    }

    public void setPriceLarge(Double priceLarge) {
        this.priceLarge = priceLarge;
    }

    public Product(String name, String description, Double price, Double priceLarge, String image, ProductCategory category) {
        this.id=UUID.randomUUID();
        this.name = name;
        this.description = description;
        this.price = price;
        this.priceLarge = priceLarge;
        this.image = image;
        this.category = category;
    }

    public Product() {
    }
}
