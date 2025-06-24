package com.restaurant.backend.controller;


import com.restaurant.backend.entity.Order;
import com.restaurant.backend.entity.User;
import com.restaurant.backend.model.auth.AddressCreateRequest;
import com.restaurant.backend.service.AddressService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/address")
public class AddressController {
    private final AddressService addressService;

    public AddressController(AddressService addressService) {
        this.addressService = addressService;
    }

    @PostMapping("/create")
    public User createOrder(@RequestBody AddressCreateRequest addressCreateRequest) {
        return addressService.createAddress(addressCreateRequest);
    }
}
