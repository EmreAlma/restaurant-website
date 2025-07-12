package com.restaurant.backend.entity;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "order_item")
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @Column(name = "quantity")
    private  Integer quantity;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id", nullable = false)
    @JsonBackReference
    private Order order;

    @ManyToMany
    @JoinTable(
            name = "order_item_ingredient_add",
            joinColumns = @JoinColumn(name = "order_item_id"),
            inverseJoinColumns = @JoinColumn(name = "ingredient_id")
    )
    @JsonIgnore
    private List<Ingredient> ingredientsToAdd;

    @ManyToMany
    @JoinTable(
            name = "order_item_ingredient_remove",
            joinColumns = @JoinColumn(name = "order_item_id"),
            inverseJoinColumns = @JoinColumn(name = "ingredient_id")
    )
    @JsonIgnore
    private List<Ingredient> ingredientsToRemove;



    public List<Ingredient> getIngredientsToAdd() {
        return ingredientsToAdd;
    }

    public void setIngredientsToAdd(List<Ingredient> ingredientsToAdd) {
        this.ingredientsToAdd = ingredientsToAdd;
    }

    public List<Ingredient> getIngredientsToRemove() {
        return ingredientsToRemove;
    }

    public void setIngredientsToRemove(List<Ingredient> ingredientsToRemove) {
        this.ingredientsToRemove = ingredientsToRemove;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }
}
