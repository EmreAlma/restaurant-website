package com.restaurant.backend.repository;

import com.restaurant.backend.entity.Address;
import com.restaurant.backend.entity.Categories;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface AddressRepository extends JpaRepository<Address, UUID> {
}
