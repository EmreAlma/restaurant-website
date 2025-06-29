package com.restaurant.backend.boostrap;

import com.restaurant.backend.entity.Categories;
import com.restaurant.backend.entity.Product;
import com.restaurant.backend.entity.User;
import com.restaurant.backend.enums.UserRoles;
import com.restaurant.backend.repository.CategoryRepository;
import com.restaurant.backend.repository.ProductRepository;
import com.restaurant.backend.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DataInitializer {

    private final CategoryRepository categoryRepository;
    private final ProductRepository productRepository;
     private final UserRepository userRepository;
     private final PasswordEncoder passwordEncoder;
    public DataInitializer(CategoryRepository categoryRepository, ProductRepository productRepository, UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.categoryRepository = categoryRepository;
        this.productRepository = productRepository;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostConstruct
    public void initData() {

        inertAdminUser();
        initCategories();
        initProducts();
        
    }
    private void inertAdminUser(){
        List<User> users=userRepository.findAll();
      boolean isAdminExist=   users.stream().anyMatch(user -> UserRoles.OWNER.equals(user.getRole()));
      if(!isAdminExist){
          User adminUser=new User();
          adminUser.setRole(UserRoles.OWNER);
          adminUser.setLastName("admin");
          adminUser.setFirstName("admin");
          adminUser.setUsername("admin");
          adminUser.setPassword(passwordEncoder.encode("admin"));
          userRepository.save(adminUser);

      }

    }

    private void initCategories() {
if (categoryRepository.findAll().isEmpty()){
    List<Categories> categoriesList=new ArrayList<>();
    categoriesList.add(new Categories("Pizza"));
    categoriesList.add(new Categories("Pizza Big"));
    categoriesList.add(new Categories("Pide"));
    categoriesList.add(new Categories("Warme Snacks"));
    categoriesList.add(new Categories("Salate"));
    categoriesList.add(new Categories("Dessert"));
    categoriesList.add(new Categories("Getränke"));
    categoriesList.add(new Categories("Biere & Weine"));

    categoryRepository.saveAll(categoriesList);
}
    }

    private void initProducts() {
        if (productRepository.findAll().isEmpty()) {
            List<Product> products = List.of(
                    new Product("Pizza Margherita ", "Tomatensauce, Mozzarella, Oregano", 15.5, "/images/products/pizza-1.jpg", 1L),
                    new Product("Pizza Margherita ", "Tomatensauce, Mozzarella, Oregano", 25.5, "/images/products/pizza-1.jpg", 2L),
                    new Product("Pizza Funghi ", "Tomatensauce, Mozzarella, Champignons, Oregano", 16.5, "/images/products/pizza-2.jpg", 1L),
                    new Product("Pizza Funghi ", "Tomatensauce, Mozzarella, Champignons, Oregano", 29.5, "/images/products/pizza-2.jpg", 2L),
                    new Product("Pizza Cipolla ", "Tomatensauce, Mozzarella, Zwiebeln, Oregano", 16.5, "/images/products/pizza-3.jpg", 1L),
                    new Product("Pizza Cipolla ", "Tomatensauce, Mozzarella, Zwiebeln, Oregano", 29.5, "/images/products/pizza-3.jpg", 2L),
                    new Product("Pizza Feta ", "Tomatensauce, Mozzarella, Feta, Oregano", 17.5, "/images/products/pizza-4.jpg", 1L),
                    new Product("Pizza Feta ", "Tomatensauce, Mozzarella, Feta, Oregano", 30.5, "/images/products/pizza-4.jpg", 2L),
                    new Product("Pizza Gorgonzola ", "Tomatensauce, Mozzarella, Gorgonzola, Oregano", 17.5, "/images/products/pizza-5.jpg", 1L),
                    new Product("Pizza Gorgonzola ", "Tomatensauce, Mozzarella, Gorgonzola, Oregano", 30.5, "/images/products/pizza-5.jpg", 2L),
                    new Product("Pizza Prosciutto e Funghi ", "Tomatensauce, Mozzarella, Schinken, Champignons, Oregano", 19.5, "/images/products/pizza-6.jpg", 1L),
                    new Product("Pizza Prosciutto e Funghi ", "Tomatensauce, Mozzarella, Schinken, Champignons, Oregano", 32.5, "/images/products/pizza-6.jpg", 2L),
                    new Product("Pizza Prosciutto ", "Tomatensauce, Mozzarella, Schinken, Oregano", 18.5, "/images/products/pizza-7.jpg", 1L),
                    new Product("Pizza Prosciutto ", "Tomatensauce, Mozzarella, Schinken, Oregano", 30.5, "/images/products/pizza-7.jpg", 2L),
                    new Product("Pizza Pommes ", "Tomatensauce, Mozzarella, Pommes Frites, Oregano", 18.5, "/images/products/pizza-8.jpg", 1L),
                    new Product("Pizza Pommes ", "Tomatensauce, Mozzarella, Pommes Frites, Oregano", 30.5, "/images/products/pizza-8.jpg", 2L),
                    new Product("Pizza Napoli ", "Tomatensauce, Mozzarella, Sardellen, Kapern, Oregano", 19.5, "/images/products/pizza-9.jpg", 1L),
                    new Product("Pizza Napoli ", "Tomatensauce, Mozzarella, Sardellen, Kapern, Oregano", 32.5, "/images/products/pizza-9.jpg", 2L),
                    new Product("Pizza Frutti di Mare ", "Tomatensauce, Mozzarella, Meeresfrüchte, Oregano", 21.5, "/images/products/pizza-10.jpg", 1L),
                    new Product("Pizza Frutti di Mare ", "Tomatensauce, Mozzarella, Meeresfrüchte, Oregano", 32.5, "/images/products/pizza-10.jpg", 2L),
                    new Product("Pizza Hewina ", "Tomatensauce, Mozzarella, frische Tomaten, Oliven, Basilikum, Oregano", 18.5, "/images/products/pizza-11.jpg", 1L),
                    new Product("Pizza Hewina ", "Tomatensauce, Mozzarella, frische Tomaten, Oliven, Basilikum, Oregano", 31.5, "/images/products/pizza-11.jpg", 2L),
                    new Product("Pizza Lardée ", "Tomatensauce, Mozzarella, Speck, Ei, Oregano", 19.5, "/images/products/pizza-12.jpg", 1L),
                    new Product("Pizza Lardée ", "Tomatensauce, Mozzarella, Speck, Ei, Oregano", 31.5, "/images/products/pizza-12.jpg", 2L),
                    new Product("Pizza Crottine ", "Tomatensauce, Mozzarella, Speck, Feta, Oregano", 19.5, "/images/products/pizza-13.jpg", 1L),
                    new Product("Pizza Crottine ", "Tomatensauce, Mozzarella, Speck, Feta, Oregano", 32.5, "/images/products/pizza-13.jpg", 2L),
                    new Product("Pizza Kebab ", "Tomatensauce, Mozzarella, Kebabfleisch, Oregano", 19.5, "/images/products/pizza-14.jpg", 1L),
                    new Product("Pizza Kebab ", "Tomatensauce, Mozzarella, Kebabfleisch, Oregano", 33.5, "/images/products/pizza-14.jpg", 2L),
                    new Product("Pizza Diavola (scharf) ", "Tomatensauce, Mozzarella, scharfe Salami, Oregano", 18.5, "/images/products/pizza-15.jpg", 1L),
                    new Product("Pizza Diavola (scharf) ", "Tomatensauce, Mozzarella, scharfe Salami, Oregano", 30.5, "/images/products/pizza-15.jpg", 2L),
                    new Product("Pizza Quattro Stagioni ", "Tomatensauce, Mozzarella, Schinken, Champignons, Peperoni, Artischocken, Oregano", 21.5, "/images/products/pizza-16.jpg", 1L),
                    new Product("Pizza Quattro Stagioni ", "Tomatensauce, Mozzarella, Schinken, Champignons, Peperoni, Artischocken, Oregano", 34.5, "/images/products/pizza-16.jpg", 2L),
                    new Product("Pizza al Tonno ", "Tomatensauce, Mozzarella, Thunfisch, Zwiebeln, Oregano", 19.5, "/images/products/pizza-17.jpg", 1L),
                    new Product("Pizza al Tonno ", "Tomatensauce, Mozzarella, Thunfisch, Zwiebeln, Oregano", 34.5, "/images/products/pizza-17.jpg", 2L),
                    new Product("Pizza Siciliana ", "Tomatensauce, Mozzarella, Schinken, Oliven, Ei, Peperoni, Oregano", 21.5, "/images/products/pizza-18.jpg", 1L),
                    new Product("Pizza Siciliana ", "Tomatensauce, Mozzarella, Schinken, Oliven, Ei, Peperoni, Oregano", 36.5, "/images/products/pizza-18.jpg", 2L),
                    new Product("Pizza Salame ", "Tomatensauce, Mozzarella, Salami, Oregano", 18.5, "/images/products/pizza-19.jpg", 1L),
                    new Product("Pizza Salame ", "Tomatensauce, Mozzarella, Salami, Oregano", 30.5, "/images/products/pizza-19.jpg", 2L),
                    new Product("Pizza Capricciosa ", "Tomatensauce, Mozzarella, Schinken, Champignons, Artischocken, Ei, Oregano", 21.5, "/images/products/pizza-20.jpg", 1L),
                    new Product("Pizza Capricciosa ", "Tomatensauce, Mozzarella, Schinken, Champignons, Artischocken, Ei, Oregano", 34.5, "/images/products/pizza-20.jpg", 2L),
                    new Product("Pizza Crevette ", "Tomatensauce, Mozzarella, Crevetten, Oregano", 20.5, "/images/products/pizza-21.jpg", 1L),
                    new Product("Pizza Crevette ", "Tomatensauce, Mozzarella, Crevetten, Oregano", 33.5, "/images/products/pizza-21.jpg", 2L),
                    new Product("Pizza Fulmine ", "Tomatensauce, Mozzarella, Spinat, Speck, Ei, Oregano", 20.5, "/images/products/pizza-22.jpg", 1L),
                    new Product("Pizza Fulmine ", "Tomatensauce, Mozzarella, Spinat, Speck, Ei, Oregano", 33.5, "/images/products/pizza-22.jpg", 2L),
                    new Product("Pizza Prosciutto Gorgonzola ", "Tomatensauce, Mozzarella, Schinken, Gorgonzola, Oregano", 19.5, "/images/products/pizza-23.jpg", 1L),
                    new Product("Pizza Prosciutto Gorgonzola ", "Tomatensauce, Mozzarella, Schinken, Gorgonzola, Oregano", 33.5, "/images/products/pizza-23.jpg", 2L),
                    new Product("Calzone (zugedeckt) ", "Tomatensauce, Mozzarella, Schinken, Ei, Champignons, Oregano", 20.5, "/images/products/pizza-24.jpg", 1L),
                    new Product("Calzone Kebab (zugedeckt) ", "Tomatensauce, Mozzarella, Kebabfleisch, Zwiebeln, Oregano", 20.5, "/images/products/pizza-25.jpg", 1L),
                    new Product("Pizza Hot'n Spicy (scharf) ", "Tomatensauce, Mozzarella, Zwiebeln, Peperoni, Rindfleisch, frische Tomaten, scharfe Gewürze, Oregano", 21.5, "/images/products/pizza-26.jpg", 1L),
                    new Product("Pizza Hot'n Spicy (scharf) ", "Tomatensauce, Mozzarella, Zwiebeln, Peperoni, Rindfleisch, frische Tomaten, scharfe Gewürze, Oregano", 36.5, "/images/products/pizza-26.jpg", 2L),
                    new Product("Pizza Chicken Fajita ", "Tomatensauce, Mozzarella, Peperoni, Pouletgeschnetzeltes, Oregano", 20.5, "/images/products/pizza-27.jpg", 1L),
                    new Product("Pizza Chicken Fajita ", "Tomatensauce, Mozzarella, Peperoni, Pouletgeschnetzeltes, Oregano", 34.5, "/images/products/pizza-27.jpg", 2L),
                    new Product("Pizza Argovia ", "Tomatensauce, Mozzarella, Kalbfleisch, Knoblauch, Kräuterbutter, Oregano", 20.5, "/images/products/pizza-28.jpg", 1L),
                    new Product("Pizza Argovia ", "Tomatensauce, Mozzarella, Kalbfleisch, Knoblauch, Kräuterbutter, Oregano", 34.5, "/images/products/pizza-28.jpg", 2L),
                    new Product("Pizza Rohrbach ", "Tomatensauce, Mozzarella, Kräuterbutter, Kalbfleisch, Peperoni, Knoblauch, Champignons, Oregano", 22.5, "/images/products/pizza-29.jpg", 1L),
                    new Product("Pizza Rohrbach ", "Tomatensauce, Mozzarella, Kräuterbutter, Kalbfleisch, Peperoni, Knoblauch, Champignons, Oregano", 35.5, "/images/products/pizza-29.jpg", 2L),
                    new Product("Pizza Suhrental ", "Tomatensauce, Mozzarella, Salami, Zwiebeln, Champignons, Oregano", 20.5, "/images/products/pizza-30.jpg", 1L),
                    new Product("Pizza Suhrental ", "Tomatensauce, Mozzarella, Salami, Zwiebeln, Champignons, Oregano", 32.5, "/images/products/pizza-30.jpg", 2L),
                    new Product("Pizza Stromboli (scharf) ", "Tomatensauce, Mozzarella, scharfe Salami, Zwiebeln, Sardellen, Artischocken, Peperoni, Champignons, Oregano", 23.5, "/images/products/pizza-31.jpg", 1L),
                    new Product("Pizza Stromboli (scharf) ", "Tomatensauce, Mozzarella, scharfe Salami, Zwiebeln, Sardellen, Artischocken, Peperoni, Champignons, Oregano", 38.5, "/images/products/pizza-31.jpg", 2L),
                    new Product("Pizza Svizzera ", "Tomatensauce, Mozzarella, Schinken, Salami, Speck, Oregano", 21.5, "/images/products/pizza-32.jpg", 1L),
                    new Product("Pizza Svizzera ", "Tomatensauce, Mozzarella, Schinken, Salami, Speck, Oregano", 36.5, "/images/products/pizza-32.jpg", 2L),
                    new Product("Pizza Prosciutto Salami ", "Tomatensauce, Mozzarella, Schinken, Salami, Oregano", 19.5, "/images/products/pizza-33.jpg", 1L),
                    new Product("Pizza Prosciutto Salami ", "Tomatensauce, Mozzarella, Schinken, Salami, Oregano", 32.5, "/images/products/pizza-33.jpg", 2L),
                    new Product("Pizza Cino (scharf) ", "Tomatensauce, Mozzarella, frische Tomaten, Peperoni, Champignons, Knoblauch, Kalbfleisch, scharfe Gewürze, Oregano", 22.5, "/images/products/pizza-34.jpg", 1L),
                    new Product("Pizza Cino (scharf) ", "Tomatensauce, Mozzarella, frische Tomaten, Peperoni, Champignons, Knoblauch, Kalbfleisch, scharfe Gewürze, Oregano", 38.5, "/images/products/pizza-34.jpg", 2L),
                    new Product("Pizza Hawaii ", "Tomatensauce, Mozzarella, Schinken, Ananas, Oregano", 19.5, "/images/products/pizza-35.jpg", 1L),
                    new Product("Pizza Hawaii ", "Tomatensauce, Mozzarella, Schinken, Ananas, Oregano", 32.5, "/images/products/pizza-35.jpg", 2L),
                    new Product("Pizza Taj Mahal ", "Tomatensauce, Mozzarella, Curry, Pouletgeschnetzeltes, Ananas, Oregano", 20.5, "/images/products/pizza-36.jpg", 1L),
                    new Product("Pizza Taj Mahal ", "Tomatensauce, Mozzarella, Curry, Pouletgeschnetzeltes, Ananas, Oregano", 34.5, "/images/products/pizza-36.jpg", 2L),
                    new Product("Pizza Quattro Formaggi ", "Tomatensauce, Mozzarella, 4 Käsesorten, Oregano", 20.5, "/images/products/pizza-37.jpg", 1L),
                    new Product("Pizza Quattro Formaggi ", "Tomatensauce, Mozzarella, 4 Käsesorten, Oregano", 34.5, "/images/products/pizza-37.jpg", 2L),
                    new Product("Pizza Vegetaria ", "Tomatensauce, Mozzarella, Oregano und drei Zutaten nach Wahl", 18.5, "/images/products/pizza-38.jpg", 1L),
                    new Product("Pizza Vegetaria ", "Tomatensauce, Mozzarella, Oregano und drei Zutaten nach Wahl", 31.5, "/images/products/pizza-38.jpg", 2L),
                    new Product("Wunschpizza ", "Tomatensauce, Mozzarella, Oregano und vier Zutaten nach Wahl", 23.5, "/images/products/pizza-39.jpg", 1L),
                    new Product("Wunschpizza ", "Tomatensauce, Mozzarella, Oregano und vier Zutaten nach Wahl", 38.5, "/images/products/pizza-39.jpg", 2L),
                    new Product("Pide Gemüse", "Mozzarella, Peperoni, Pilze und Oliven", 19.50,  "/images/products/pide-1.jpg", 3L),
                    new Product("Pide Kalbfleisch", "Mozzarella, Kalbfleisch, Zwiebeln, Peperoni und Kräuterbutter", 21.50,  "/images/products/pide-2.jpg", 3L),
                    new Product("Pide Spinat", "Mozzarella, Spinat und Ei", 19.50,  "/images/products/pide-3.jpg", 3L),
                    new Product("Pide Kebab", "Mozzarella und Kebabfleisch", 19.50,  "/images/products/pide-4.jpg", 3L),
                    new Product("Chicken Nuggets Box (8 Stück)", "Mit Pommes Frites und Sauce nach Wahl", 17.50,  "/images/products/snack-1.jpg", 4L),
                    new Product("Chicken Nuggets Teller (8 Stück)", "Serviert mit Pommes Frites, Salat und Sauce nach Wahl", 21.50,  "/images/products/snack-2.jpg", 4L),
                    new Product("Pouletflügeli Teller (6 Stück)", "Serviert mit Pommes Frites, Salat und Sauce nach Wahl", 22.50,  "/images/products/snack-3.jpg", 4L),
                    new Product("Falafel Teller", "Serviert mit Pommes Frites, Salat und Sauce nach Wahl", 19.50,  "/images/products/snack-4.jpg", 4L),
                    new Product("Kebab Teller", "Serviert mit Pommes Frites, Salat und Sauce nach Wahl", 22.50,  "/images/products/snack-5.jpg", 4L),
                    new Product("Eglifilet Teller", "Serviert mit Pommes Frites, Salat und Sauce nach Wahl", 22.50,  "/images/products/snack-6.jpg", 4L),
                    new Product("Eglifilet Box", "Mit Pommes Frites und Sauce nach Wahl", 18.50,  "/images/products/snack-7.jpg", 4L),
                    new Product("Döner Box", "Mit Sauce nach Wahl", 14.00,  "/images/products/snack-8.jpg", 4L),
                    new Product("Döner Box XXL", "Mit Sauce nach Wahl", 18.00,  "/images/products/snack-9.jpg", 4L),
                    new Product("Pommes Frites", "Mit Sauce nach Wahl", 8.00,  "/images/products/snack-10.jpg", 4L),
                    new Product("Pommes Frites XXL", "Mit Sauce nach Wahl", 12.00,  "/images/products/snack-11.jpg", 4L),
                    new Product("Kebab im Taschenbrot", "Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl", 13.00,  "/images/products/snack-12.jpg", 4L),
                    new Product("Kebab im Fladenbrot", "Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl", 14.00,  "/images/products/snack-13.jpg", 4L),
                    new Product("Kebab Cheese im Taschenbrot", "Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl", 15.00,  "/images/products/snack-14.jpg", 4L),
                    new Product("Kebab Cheese im Fladenbrot", "Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl", 16.00,  "/images/products/snack-15.jpg", 4L),
                    new Product("Gyros im Taschenbrot", "Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl", 15.00,  "/images/products/snack-16.jpg", 4L),
                    new Product("Gyros im Fladenbrot", "Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl", 16.00,  "/images/products/snack-17.jpg", 4L),
                    new Product("Mega Kebab im Fladenbrot", "Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl", 21.00,  "/images/products/snack-18.jpg", 4L),
                    new Product("Falafel im Taschenbrot", "Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl", 13.00,  "/images/products/snack-19.jpg", 4L),
                    new Product("Falafel im Fladenbrot", "Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl", 14.00,  "/images/products/snack-20.jpg", 4L),
                    new Product("Kapsalon", "Pommes Frites, Kebabfleisch, überbackener Käse und Sauce nach Wahl", 20.00,  "/images/products/snack-21.jpg", 4L),
                    new Product("Hamburger", "Mit Tomaten, Salat, Zwiebeln, Essiggurken und Sauce nach Wahl", 12.00,  "/images/products/snack-22.jpg", 4L),
                    new Product("Doppel Hamburger", "Mit Tomaten, Salat, Zwiebeln, Essiggurken und Sauce nach Wahl", 16.00,  "/images/products/snack-23.jpg", 4L),
                    new Product("Cheeseburger", "Mit Tomaten, Salat, Zwiebeln, Essiggurken und Sauce nach Wahl", 13.00,  "/images/products/snack-24.jpg", 4L),
                    new Product("Doppel Cheeseburger", "Mit Tomaten, Salat, Zwiebeln, Essiggurken und Sauce nach Wahl", 17.00,  "/images/products/snack-25.jpg", 4L),
                    new Product("Triple Burger", "Mit Tomaten, Salat, Zwiebeln, Essiggurken und Sauce nach Wahl", 19.00,  "/images/products/snack-26.jpg", 4L),
                    new Product("Triple Cheeseburger", "Mit Tomaten, Salat, Zwiebeln, Essiggurken und Sauce nach Wahl", 20.00,  "/images/products/snack-27.jpg", 4L),
                    new Product("Schnitzelbrot", "Mit Tomaten, Salat, Zwiebeln und Sauce nach Wahl", 13.00,  "/images/products/snack-28.jpg", 4L),
                    new Product("Grüner Salat", null, 9.00,  "/images/products/salat-1.jpg", 5L),
                    new Product("Gemischter Salat", null, 13.00,  "/images/products/salat-2.jpg", 5L),
                    new Product("Thonsalat", null, 14.00,  "/images/products/salat-3.jpg", 5L),
                    new Product("Pouletsalat", null, 15.00,  "/images/products/salat-4.jpg", 5L),
                    new Product("Kebabsalat", null, 15.00,  "/images/products/salat-5.jpg", 5L),
                    new Product("Falafelsalat", null, 14.00,  "/images/products/salat-6.jpg", 5L),
                    new Product("Tiramisu", null, 8.00,  "/images/products/dessert-1.jpg", 6L),
                    new Product("Schoggimousse", null, 8.00,  "/images/products/dessert-2.jpg", 6L),
                    new Product("Kokosnuss", null, 9.00,  "/images/products/dessert-3.jpg", 6L),
                    new Product("Limone Glace", null, 9.00,  "/images/products/dessert-4.jpg", 6L),
                    new Product("Coppa Spagnola (Kirsch, 100ml)", null, 10.00,  "/images/products/dessert-5.jpg", 6L),
                    new Product("Coppa Café (90ml)", null, 10.00,  "/images/products/dessert-6.jpg", 6L),
                    new Product("Coppa Stracciatella (100ml)", null, 10.00,  "/images/products/dessert-7.jpg", 6L),
                    new Product("Coppa Pistacchio (100ml)", null, 10.00,  "/images/products/dessert-8.jpg", 6L),
                    new Product("Kinderglace Panda (Vanille)", null, 7.00,  "/images/products/dessert-9.jpg", 6L),
                    new Product("Kinderglace Pingu (Schokolade)", null, 7.00,  "/images/products/dessert-10.jpg", 6L),
                    new Product("Coca-Cola 0,6L", "Enthält Koffein (10,0 mg/100 ml)", 4.00,  "/images/products/drink-1.jpg", 7L),
                    new Product("Coca-Cola 1,6L", "Enthält Koffein (10,0 mg/100 ml)", 7.00,  "/images/products/drink-2.jpg", 7L),
                    new Product("Coca-Cola Zero 0,6L", "Enthält Koffein (10,0 mg/100 ml)", 4.00,  "/images/products/drink-3.jpg", 7L),
                    new Product("Coca-Cola Zero 1,6L", "Enthält Koffein (10,0 mg/100 ml)", 7.00,  "/images/products/drink-4.jpg", 7L),
                    new Product("Rivella Rot 0,6L", null, 4.00,  "/images/products/drink-5.jpg", 7L),
                    new Product("Rivella Rot 1,6L", null, 7.00,  "/images/products/drink-6.jpg", 7L),
                    new Product("Fanta 0,6L", null, 4.00, "/images/products/drink-7.jpg", 7L),
                    new Product("Fanta 1,6L", null, 7.00, "/images/products/drink-8.jpg", 7L),
                    new Product("Fanta Mango 0,6L", null, 4.00,  "/images/products/drink-9.jpg", 7L),
                    new Product("Fanta Mango 1,6L", null, 7.00,  "/images/products/drink-10.jpg", 7L),
                    new Product("Ice Tea Peach 0,6L", null, 4.00,  "/images/products/drink-11.jpg", 7L),
                    new Product("Ice Tea Peach 1,6L", null, 7.00,  "/images/products/drink-12.jpg", 7L),
                    new Product("Ice Tea Lemon 0,6L", "Enthält Koffein (25,0 mg/100 ml)", 4.00,  "/images/products/drink-13.jpg", 7L),
                    new Product("Ice Tea Lemon 1,6L", "Enthält Koffein (25,0 mg/100 ml)", 7.00,  "/images/products/drink-14.jpg", 7L),
                    new Product("Uludag Limonada 0,6L", null, 4.00,  "/images/products/drink-15.jpg", 7L),
                    new Product("Uludag Orange 0,6L", null, 4.00,  "/images/products/drink-16.jpg", 7L),
                    new Product("Apfelschorle 0,6L", null, 4.00,  "/images/products/drink-17.jpg", 7L),
                    new Product("Valser Classic 0,6L", null, 4.00,  "/images/products/drink-18.jpg", 7L),
                    new Product("Valser Classic 1,6L", null, 7.00,  "/images/products/drink-19.jpg", 7L),
                    new Product("Valser Silence 0,6L", null, 4.00,  "/images/products/drink-20.jpg", 7L),
                    new Product("Red Bull 0,26L", "Hoher Koffeingehalt (32,0 mg/100 ml)", 5.00,  "/images/products/drink-21.jpg", 7L),
                    new Product("Monster Energy 0,356L", "Hoher Koffeingehalt (36,0 mg/100 ml)", 5.00,  "/images/products/drink-22.jpg", 7L),
                    new Product("Monster Zero 0,356L", "Hoher Koffeingehalt (36,0 mg/100 ml)", 5.00,  "/images/products/drink-23.jpg", 7L),
                    new Product("Heineken 0,6L", "5% vol", 5.00,  "/images/products/alcohol-1.jpg", 8L),
                    new Product("Feldschlösschen 0,6L", "5% vol", 5.00,  "/images/products/alcohol-2.jpg", 8L),
                    new Product("Smirnoff ICE 0,276L", "4% vol", 6.00,  "/images/products/alcohol-3.jpg", 8L),
                    new Product("Dole du Valais 0,6L", "Rotwein, 13% vol", 18.00,  "/images/products/alcohol-4.jpg", 8L),
                    new Product("Nero d'Avola 0,76L", "Rotwein, 13% vol", 24.00,  "/images/products/alcohol-5.jpg", 8L),
                    new Product("Fendant du Valais 0,6L", "Weisswein, 13% vol", 18.00,  "/images/products/alcohol-6.jpg", 8L),
                    new Product("Rosé du Gamay 0,6L", "Roséwein, 13% vol", 18.00,  "/images/products/alcohol-7.jpg", 8L),
                    new Product("Vodka 0,8L", "38% vol", 36.00,  "/images/products/alcohol-8.jpg", 8L)
            );
            productRepository.saveAll(products);
        }
    }
}
