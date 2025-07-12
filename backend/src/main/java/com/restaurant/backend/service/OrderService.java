package com.restaurant.backend.service;

import com.restaurant.backend.config.JwtUtil;
import com.restaurant.backend.controller.OrderWebSocketController;
import com.restaurant.backend.entity.*;
import com.restaurant.backend.enums.OrderStatus;
import com.restaurant.backend.model.order.OrderItemRequestDTO;
import com.restaurant.backend.model.order.OrderRequestDTO;
import com.restaurant.backend.repository.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.transaction.Transactional;

import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.*;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;
    private final UserRepository userRepository;
    private final AddressService addressService;
    private final JwtUtil jwtUtil;
    private final SimpMessagingTemplate messagingTemplate;
    private final OrderWebSocketController orderWebSocketController;
    private final IngredientRepository ingredientRepository;
    private final AddressRepository addressRepository;



    public OrderService(OrderRepository orderRepository, ProductRepository productRepository, UserRepository userRepository, AddressService addressService, JwtUtil jwtUtil, SimpMessagingTemplate messagingTemplate, OrderWebSocketController orderWebSocketController, IngredientRepository ingredientRepository, AddressRepository addressRepository) {
        this.orderRepository = orderRepository;
        this.productRepository = productRepository;
        this.userRepository = userRepository;


        this.addressService = addressService;
        this.jwtUtil = jwtUtil;
        this.messagingTemplate = messagingTemplate;

        this.orderWebSocketController = orderWebSocketController;
        this.ingredientRepository = ingredientRepository;
        this.addressRepository = addressRepository;
    }

    @Transactional
    public Order createOrder(Order order, HttpServletRequest request) {
        if (order.getOrderItems() != null) {
            for (OrderItem item : order.getOrderItems()) {
                UUID productId = item.getProduct().getId();
                Product product = productRepository.findById(productId)
                        .orElseThrow(() -> new IllegalArgumentException("Product not found: " + productId));
                item.setProduct(product);
                item.setOrder(order);
            }
            calculateOrderPrice(order);
            setUserToOrder(order, request);
            addressService.setAddressToOrder(order);
        }
        order.setOrderStatus(OrderStatus.CREATED);
        Order savedOrder = orderRepository.save(order);
        orderWebSocketController.broadcastNewOrder(savedOrder);
        return savedOrder;
    }


    @Transactional
    public Order createOrder(OrderRequestDTO orderRequest, HttpServletRequest request) {
        Order order = new Order();


        order.setTotalPrice(orderRequest.getTotalPrice());
        order.setOrderTime(Instant.now());
        order.setOrderStatus(OrderStatus.CREATED);

        List<OrderItem> orderItems = new ArrayList<>();

        for (OrderItemRequestDTO itemDTO : orderRequest.getOrderItems()) {
            OrderItem orderItem = new OrderItem();

            Product product = productRepository.findById(itemDTO.getProductId())
                    .orElseThrow(() -> new RuntimeException("Product not found: " + itemDTO.getProductId()));
            orderItem.setProduct(product);

            orderItem.setQuantity(itemDTO.getQuantity());

            List<Ingredient> ingredientsToAdd = itemDTO.getIngredientsToAdd() != null
                    ? ingredientRepository.findAllById(itemDTO.getIngredientsToAdd())
                    : Collections.emptyList();
            orderItem.setIngredientsToAdd(ingredientsToAdd);

            List<Ingredient> ingredientsToRemove = itemDTO.getIngredientsToRemove() != null
                    ? ingredientRepository.findAllById(itemDTO.getIngredientsToRemove())
                    : Collections.emptyList();
            orderItem.setIngredientsToRemove(ingredientsToRemove);

            orderItem.setOrder(order); // OrderItem ile Order ilişkisi

            orderItems.add(orderItem);
        }

        order.setOrderItems(orderItems);
        setUserToOrder(order,request);
        addressService.setAddressToOrder(order);

        Order savedOrder = orderRepository.save(order);
        orderWebSocketController.broadcastNewOrder(savedOrder);
        return savedOrder;
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

    private void setUserToOrder(Order order, HttpServletRequest request){
        String token = request.getHeader("Authorization");
        if (token == null || !token.startsWith("Bearer ")) {
          return;
        }

        String username = jwtUtil.extractUsername(token.substring(7));
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("Kullanıcı bulunamadı"));
            order.setUser(user);
    }




    public List<Order> getOrdersByUserId(UUID userId) {
        return orderRepository.findByUserId(userId);
    }

    public List<Order> getOrdersByUser(User user) {
        return orderRepository.findByUser(user);
    }

}
