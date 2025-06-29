package com.restaurant.backend.controller;

import com.restaurant.backend.entity.Order;
import com.restaurant.backend.repository.OrderRepository;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class OrderWebSocketController {

    private final SimpMessagingTemplate messagingTemplate;
    private final OrderRepository orderRepository;

    public OrderWebSocketController(SimpMessagingTemplate messagingTemplate, OrderRepository orderRepository) {
        this.messagingTemplate = messagingTemplate;
        this.orderRepository = orderRepository;
    }
    public void broadcastNewOrder(Order order) {
        messagingTemplate.convertAndSend("/topic/orders", order);
    }

    @MessageMapping("/orders/getAll")
    @SendTo("/topic/orders")
    public List<Order> sendAllOrders() {
        List<Order> orders = orderRepository.findAllWithUserOrderItemsAddress();
         return orders;
    }

    @MessageMapping("/orders/updateStatus")
    public void updateOrderStatus(Order orderUpdate) {
        Order existingOrder = orderRepository.findById(orderUpdate.getId())
                .orElseThrow(() -> new RuntimeException("Order not found"));

        existingOrder.setOrderStatus(orderUpdate.getOrderStatus());
        Order updatedOrder = orderRepository.save(existingOrder);

        messagingTemplate.convertAndSend("/topic/orders", updatedOrder);
    }

}
