package com.restaurant.backend.controller;

import com.restaurant.backend.entity.Order;
import com.restaurant.backend.enums.UserRoles;
import com.restaurant.backend.repository.OrderRepository;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;

import java.security.Principal;
import java.util.List;
import java.util.Map;

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
    public List<Order> sendAllOrders(@Header("simpSessionAttributes") Map<String, Object> sessionAttrs) {
        Object userObj = sessionAttrs.get("user");

        if (userObj instanceof UserDetails userDetails) {
            boolean isOwner = userDetails.getAuthorities().stream()
                    .anyMatch(auth -> auth.getAuthority().equals(UserRoles.OWNER.toString()));

            if (!isOwner) {
                throw new AccessDeniedException("Yalnızca OWNER kullanıcılar tüm siparişleri görebilir.");
            }

            return orderRepository.findAllWithUserOrderItemsAddress();
        }

        throw new AccessDeniedException("Kullanıcı bilgisi bulunamadı.");
    }

    @MessageMapping("/orders/updateStatus")
    public void updateOrderStatus(Order orderUpdate, Principal principal) {
        Order existingOrder = orderRepository.findById(orderUpdate.getId())
                .orElseThrow(() -> new RuntimeException("Order not found"));

        existingOrder.setOrderStatus(orderUpdate.getOrderStatus());
        existingOrder.setDeliveryTime(orderUpdate.getDeliveryTime());
        Order updatedOrder = orderRepository.save(existingOrder);

        // Admin tarafına güncel siparişi gönder
        messagingTemplate.convertAndSend("/topic/orders", updatedOrder);

        // Müşteriye sipariş onaylandı mesajı gönder
        if (updatedOrder.getUser() != null) {
            String username = updatedOrder.getUser().getUsername();
            String confirmationMessage = "Ihre Bestellung wurde bestätigt. Geplante Lieferzeit: " +
                    (updatedOrder.getDeliveryTime() != null ? updatedOrder.getDeliveryTime().toString() : "Unbekannt");
            messagingTemplate.convertAndSendToUser(username, "/queue/order-confirmed", confirmationMessage);
        }
    }
}
