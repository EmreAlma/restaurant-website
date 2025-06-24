package com.restaurant.backend.service;


import com.restaurant.backend.entity.Address;
import com.restaurant.backend.entity.Order;
import com.restaurant.backend.entity.User;
import com.restaurant.backend.model.auth.AddressCreateRequest;
import com.restaurant.backend.repository.AddressRepository;
import com.restaurant.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AddressService {
    private final AddressRepository addressRepository;
    private final UserRepository userRepository;

    public AddressService(AddressRepository addressRepository, UserRepository userRepository) {
        this.addressRepository = addressRepository;
        this.userRepository = userRepository;
    }


    public User createAddress(AddressCreateRequest addressCreateRequest) {
        Optional<User> optionalUser= userRepository.findById(addressCreateRequest.getUserId());
        if (optionalUser.isPresent()){
            User user=optionalUser.get();
            Address address=new Address();
            address.setCity(addressCreateRequest.getCity());
            address.setFullName(addressCreateRequest.getFullName());
            address.setStreet(addressCreateRequest.getStreet());
            address.setPostalCode(addressCreateRequest.getPostalCode());
            address.setDescription(addressCreateRequest.getDescription());
            address.setUser(user);
            user.getAddresses().add(address);
            userRepository.save(user);
            return user;
        }
        return null;
    }
}
