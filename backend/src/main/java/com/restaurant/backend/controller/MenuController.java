package com.restaurant.backend.controller;

import com.restaurant.backend.entity.MenuItem;
import com.restaurant.backend.service.MenuItemService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MenuController {
    
    private final MenuItemService menuItemService;

    public MenuController(MenuItemService menuItemService) {
        this.menuItemService = menuItemService;
    }

    @GetMapping("/api/menu")
    public List<MenuItem> getMenuItems() {
        return menuItemService.getAllMenuItems();
    }
}
