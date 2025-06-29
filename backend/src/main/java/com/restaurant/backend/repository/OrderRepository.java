package com.restaurant.backend.repository;

import com.restaurant.backend.entity.Order;
import com.restaurant.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.UUID;

public interface OrderRepository extends JpaRepository<Order, UUID> {
    List<Order> findByUser(User user);
    List<Order> findByUserId(UUID userId);


    @Query("SELECT DISTINCT o FROM Order o LEFT JOIN FETCH o.user LEFT JOIN FETCH o.orderItems oi LEFT JOIN FETCH o.address")
    List<Order> findAllWithUserOrderItemsAddress();

    @Query("SELECT DISTINCT o FROM Order o " +
            "LEFT JOIN FETCH o.user " +
            "LEFT JOIN FETCH o.orderItems oi " +
            "LEFT JOIN FETCH o.address " +
            "WHERE o.user.id = :userId")
    List<Order> findByUserIdWithDetails(@Param("userId") UUID userId);
}
