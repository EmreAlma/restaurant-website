package com.restaurant.backend.repository;

import com.restaurant.backend.entity.Order;
import com.restaurant.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface OrderRepository extends JpaRepository<Order, UUID> {
    List<Order> findByUser(User user);
    List<Order> findByUserId(UUID userId);
}
