package com.restaurant.backend.model.order;

import java.util.List;
import java.util.UUID;

public class OrderItemRequestDTO {
    private UUID productId;
    private Integer quantity;
    private List<UUID> ingredientsToAdd;
    private List<UUID> ingredientsToRemove;


    public UUID getProductId() {
        return productId;
    }
    public void setProductId(UUID productId) {
        this.productId = productId;
    }

    public Integer getQuantity() {
        return quantity;
    }
    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public List<UUID> getIngredientsToAdd() {
        return ingredientsToAdd;
    }
    public void setIngredientsToAdd(List<UUID> ingredientsToAdd) {
        this.ingredientsToAdd = ingredientsToAdd;
    }

    public List<UUID> getIngredientsToRemove() {
        return ingredientsToRemove;
    }
    public void setIngredientsToRemove(List<UUID> ingredientsToRemove) {
        this.ingredientsToRemove = ingredientsToRemove;
    }
}
