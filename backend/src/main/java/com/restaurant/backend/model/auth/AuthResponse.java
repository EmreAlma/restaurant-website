package com.restaurant.backend.model.auth;

import com.restaurant.backend.entity.Address;
import com.restaurant.backend.enums.UserRoles;

import java.util.List;
import java.util.UUID;

public class AuthResponse {
    private String token;
    private UUID id;
    private String username;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private UserRoles userRole;
    private  List<Address> address;


    public AuthResponse(String token, UUID id, String username, String firstName, String lastName, String phoneNumber, UserRoles userRole, List<Address> address) {
        this.token = token;
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.userRole = userRole;
        this.address = address;
    }

    public UserRoles getUserRole() {
        return userRole;
    }

    public void setUserRole(UserRoles userRole) {
        this.userRole = userRole;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public  List<Address> getAddress() {
        return address;
    }

    public void setAddress( List<Address> address) {
        this.address = address;
    }
    
}
