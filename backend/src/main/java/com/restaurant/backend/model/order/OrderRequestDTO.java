package com.restaurant.backend.model.order;

import java.time.Instant;
import java.util.List;

public class OrderRequestDTO {
    private Double totalPrice;
    private AddressDTO address;
    private List<OrderItemRequestDTO> orderItems;
    private String comment;
    private Instant deliveryTime;

    // Getters & Setters

    public Double getTotalPrice() {
        return totalPrice;
    }
    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public AddressDTO getAddress() {
        return address;
    }
    public void setAddress(AddressDTO address) {
        this.address = address;
    }

    public List<OrderItemRequestDTO> getOrderItems() {
        return orderItems;
    }
    public void setOrderItems(List<OrderItemRequestDTO> orderItems) {
        this.orderItems = orderItems;
    }

    public String getComment() {
        return comment;
    }
    public void setComment(String comment) {
        this.comment = comment;
    }

    public Instant getDeliveryTime() {
        return deliveryTime;
    }
    public void setDeliveryTime(Instant deliveryTime) {
        this.deliveryTime = deliveryTime;
    }
}
