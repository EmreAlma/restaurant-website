package com.restaurant.backend.service;


import com.restaurant.backend.entity.Address;
import com.restaurant.backend.entity.Order;
import com.restaurant.backend.entity.User;
import com.restaurant.backend.model.auth.AddressCreateRequest;
import com.restaurant.backend.repository.AddressRepository;
import com.restaurant.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

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
            address.setStreet(addressCreateRequest.getStreet());
            address.setPostalCode(addressCreateRequest.getPostalCode());
            address.setUser(user);
            user.getAddresses().add(address);
            userRepository.save(user);
            return user;
        }
        return null;
    }
    public void setAddressToOrder(Order order){
        // TODO: User first address automaticly added to order it will be change and support multiple Address selection
        if (order.getAddress()!=null){
            order.setAddress(order.getUser().getAddresses().stream().findFirst().get());
            return;
        }
        UUID addressUUID=null;
        if(order.getAddress()!=null) {
            addressUUID=order.getAddress().getId();
            if (addressUUID!=null){
                Optional<Address> userAdress = addressRepository.findById(addressUUID);
                if (userAdress.isPresent()){
                    order.setAddress(userAdress.get());
                }
            }else {
            Address addressFromRequest = createAddressWithOrder(order.getAddress());
            order.setAddress(addressFromRequest);
            }
        }
    }
    private Address createAddressWithOrder(Address requestAddress){
        Address address=new Address();
        address.setCity(requestAddress.getCity());
        address.setStreet(requestAddress.getStreet());
        address.setPostalCode(requestAddress.getPostalCode());

        return address;
    }
}
