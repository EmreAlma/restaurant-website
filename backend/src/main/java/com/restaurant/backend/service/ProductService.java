package com.restaurant.backend.service;

import com.restaurant.backend.entity.Ingredient;
import com.restaurant.backend.entity.Product;
import com.restaurant.backend.model.product.ProductIngredients;
import com.restaurant.backend.repository.IngredientRepository;
import com.restaurant.backend.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {
    private final ProductRepository productRepository;
    private final IngredientRepository ingredientRepository;

    public ProductService(ProductRepository productRepository, IngredientRepository ingredientRepository) {
        this.productRepository = productRepository;
        this.ingredientRepository = ingredientRepository;
    }

    public List<Product> findAllProducts(){
        return productRepository.findAll();
    }

    public List<Product> getProductsByCategoryId(Long categoryId) {
        return productRepository.findByCategoryId(categoryId);
    }

    public List<ProductIngredients> getProductsWithIngredients(Long categoryId) {
        List<ProductIngredients> productIngredientsList = new ArrayList<>();

        List<Product> products = productRepository.findByCategoryId(categoryId);
        List<Ingredient> ingredients = ingredientRepository.findByCategoryId(categoryId);

        for (Product product : products) {
            ProductIngredients pi = new ProductIngredients();

            pi.setId(product.getId());
            pi.setName(product.getName());
            pi.setDescription(product.getDescription());
            pi.setPrice(product.getPrice());
            pi.setImage(product.getImage());
            pi.setCategory(product.getCategory());

            List<Ingredient> matchedIngredients = ingredients.stream()
                    .filter(i -> i.getCategory().getId().equals(product.getCategory().getId()))
                    .collect(Collectors.toList());

            pi.setIngredientstoAdd(matchedIngredients);
            pi.setIngredientstoRemove(product.getDefaultIngredients());

            productIngredientsList.add(pi);
        }

        return productIngredientsList;
    }

}
