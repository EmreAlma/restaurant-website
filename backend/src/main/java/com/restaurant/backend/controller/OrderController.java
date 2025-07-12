package com.restaurant.backend.controller;

import com.restaurant.backend.config.JwtUtil;
import com.restaurant.backend.entity.Order;
import com.restaurant.backend.entity.User;
import com.restaurant.backend.model.order.OrderRequestDTO;
import com.restaurant.backend.repository.OrderRepository;
import com.restaurant.backend.repository.UserRepository;
import com.restaurant.backend.service.OrderService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    private final OrderRepository orderRepository;
    private final OrderService orderService;
    private final JwtUtil jwtUtil;
    private final UserRepository userRepository;

    @Autowired
    public OrderController(OrderRepository orderRepository, OrderService orderService, JwtUtil jwtUtil, UserRepository userRepository) {
        this.orderRepository = orderRepository;
        this.orderService = orderService;
        this.jwtUtil = jwtUtil;
        this.userRepository = userRepository;
    }
    @GetMapping("/all")
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @PostMapping("/create")
    public Order createOrder( @RequestBody Order order,
                              HttpServletRequest request) {
        return orderService.createOrder(order,request);
    }



    @DeleteMapping("/delete/{id}")
    public void deleteOrder(@PathVariable UUID id) {
        orderRepository.deleteById(id);
    }

    @GetMapping("/my-orders")
    public ResponseEntity<List<Order>> getOrdersFromToken(@RequestHeader("Authorization") String authHeader) {
        String token = authHeader.startsWith("Bearer ") ? authHeader.substring(7) : authHeader;
        String username = jwtUtil.extractUsername(token);
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("Kullanıcı bulunamadı"));
        List<Order> orders = orderService.getOrdersByUser(user);

        return ResponseEntity.ok(orders);
    }
}
