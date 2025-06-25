package com.restaurant.backend.controller;

import com.restaurant.backend.entity.Order;
import com.restaurant.backend.repository.OrderRepository;
import com.restaurant.backend.service.OrderService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    private final OrderRepository orderRepository;
    private final OrderService orderService;

    @Autowired
    public OrderController(OrderRepository orderRepository, OrderService orderService) {
        this.orderRepository = orderRepository;
        this.orderService = orderService;
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
}
