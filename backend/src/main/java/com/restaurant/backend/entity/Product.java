package com.restaurant.backend.entity;

import jakarta.persistence.*;

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

    @Column(name = "image")
    private String image;


    @ManyToOne
    @JoinColumn(name = "category_id")
    private Categories category;

    public Categories getCategory() {
        return category;
    }

    public void setCategory(Categories category) {
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



    public Product(String name, String description, Double price, String image, Long categoryId) {
        this.id = UUID.randomUUID();
        this.name = name;
        this.description = description;
        this.price = price;

        this.image = image;
        this.category = new Categories();
        this.category.setId(categoryId);
    }

    public Product() {
    }
}
