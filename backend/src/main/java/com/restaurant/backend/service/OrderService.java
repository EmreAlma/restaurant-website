package com.restaurant.backend.service;

import com.restaurant.backend.entity.Order;
import com.restaurant.backend.entity.OrderItem;
import com.restaurant.backend.entity.Product;
import com.restaurant.backend.entity.User;
import com.restaurant.backend.repository.OrderRepository;
import com.restaurant.backend.repository.ProductRepository;
import com.restaurant.backend.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;
    private final UserRepository userRepository;

    public OrderService(OrderRepository orderRepository, ProductRepository productRepository, UserRepository userRepository) {
        this.orderRepository = orderRepository;
        this.productRepository = productRepository;
        this.userRepository = userRepository;
    }

    @Transactional
    public Order createOrder(Order order) {
        if (order.getOrderItems() != null) {
            for (OrderItem item : order.getOrderItems()) {
                UUID productId = item.getProduct().getId();
                Product product = productRepository.findById(productId)
                        .orElseThrow(() -> new IllegalArgumentException("Product not found: " + productId));
                item.setProduct(product);
                item.setOrder(order);
            }
            calculateOrderPrice(order);
            setUserToOrder(order);
        }
        return orderRepository.save(order);
    }

    private void  calculateOrderPrice(Order order){
        Double totalPrice=0.0;
         for (OrderItem orderItem :order.getOrderItems()) {
             if(orderItem != null){
              totalPrice=totalPrice+  orderItem.getProduct().getPrice()*orderItem.getQuantity();
             }

         }
         order.setTotalPrice(totalPrice);
    }


    private void setUserToOrder(Order order){
        Optional<User> existingUser = userRepository.findById(order.getUser().getId());
        if(existingUser.isPresent()){
            order.setUser(existingUser.get());
        }
    }

}
