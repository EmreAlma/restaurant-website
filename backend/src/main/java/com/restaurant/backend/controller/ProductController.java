package com.restaurant.backend.controller;

import com.restaurant.backend.entity.Product;
import com.restaurant.backend.model.product.ProductIngredients;
import com.restaurant.backend.repository.ProductRepository;
import com.restaurant.backend.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {


    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.findAllProducts();
    }

//    @GetMapping("/category/{categoryId}")
//    public List<Product> getProductsByCategoryId(@PathVariable Long categoryId) {
//        return productService.getProductsByCategoryId(categoryId);
//    }

    @GetMapping("/category/{categoryId}")
    public List<ProductIngredients> getProductsByCategoryIds(@PathVariable Long categoryId) {
        return productService.getProductsWithIngredients(categoryId);
    }

}
