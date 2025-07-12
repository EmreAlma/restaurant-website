package com.restaurant.backend.entity;


import jakarta.persistence.*;


@Entity
@Table(name = "categories")
public class Categories {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "categoryName")
    private String categoryName;


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
}
