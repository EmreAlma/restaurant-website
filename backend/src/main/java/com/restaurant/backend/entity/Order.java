package com.restaurant.backend.entity;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.restaurant.backend.enums.OrderStatus;
import jakarta.persistence.*;

import java.math.BigInteger;
import java.time.Instant;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<OrderItem> orderItems;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "address_id")
    private Address address;

    @Column(name = "order_time", updatable = false, nullable = false)
    private Instant orderTime;

    @Column(name = "totalPrice")
    private Double totalPrice;

    @Column(name = "orderStatus")
    private OrderStatus orderStatus;

    @Column(name = "deliveryTime")
    private Instant deliveryTime;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "user_id")
    private User user;


    public Instant getOrderTime() {
        return orderTime;
    }

    public void setOrderTime(Instant orderTime) {
        this.orderTime = orderTime;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public OrderStatus getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(OrderStatus orderStatus) {
        this.orderStatus = orderStatus;
    }

    public Double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }
    public Instant getDeliveryTime() {
    return deliveryTime;
    }

    public void setDeliveryTime(Instant deliveryTime) {
        this.deliveryTime = deliveryTime;
    }

    @PrePersist
    protected void onCreate() {
        this.orderTime = Instant.now();
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public List<OrderItem> getOrderItems() {
        return orderItems;
    }

    public void setOrderItems(List<OrderItem> orderItems) {
        this.orderItems = orderItems;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public Order(List<OrderItem> orderItems, Address address) {
        this.orderItems = orderItems;
        this.address = address;
        this.orderTime=Instant.now();
        this.orderStatus=OrderStatus.CREATED;
    }

    public Order() {
    }
}
