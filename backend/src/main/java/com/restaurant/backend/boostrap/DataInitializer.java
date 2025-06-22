package com.restaurant.backend.boostrap;

import com.restaurant.backend.entity.Categories;
import com.restaurant.backend.entity.Product;
import com.restaurant.backend.repository.CategoryRepository;
import com.restaurant.backend.repository.ProductRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DataInitializer {

    private final CategoryRepository categoryRepository;
    private final ProductRepository productRepository;

    public DataInitializer(CategoryRepository categoryRepository, ProductRepository productRepository) {
        this.categoryRepository = categoryRepository;
        this.productRepository = productRepository;
    }

    @PostConstruct
    public void initData() {
        initCategories();
        initProducts();
        
    }

    private void initCategories() {
if (categoryRepository.findAll().isEmpty()){
    List<Categories> categoriesList=new ArrayList<>();
    categoriesList.add(new Categories("Pizza"));
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
                    new Product("Pizza Margherita (Klein)", "Tomatensauce, Mozzarella, Oregano", 15.5, "/images/products/pizza-1.jpg", 1L),
                    new Product("Pizza Margherita (Gross)", "Tomatensauce, Mozzarella, Oregano", 25.5, "/images/products/pizza-1.jpg", 1L),
                    new Product("Pizza Funghi (Klein)", "Tomatensauce, Mozzarella, Champignons, Oregano", 16.5, "/images/products/pizza-2.jpg", 1L),
                    new Product("Pizza Funghi (Gross)", "Tomatensauce, Mozzarella, Champignons, Oregano", 29.5, "/images/products/pizza-2.jpg", 1L),
                    new Product("Pizza Cipolla (Klein)", "Tomatensauce, Mozzarella, Zwiebeln, Oregano", 16.5, "/images/products/pizza-3.jpg", 1L),
                    new Product("Pizza Cipolla (Gross)", "Tomatensauce, Mozzarella, Zwiebeln, Oregano", 29.5, "/images/products/pizza-3.jpg", 1L),
                    new Product("Pizza Feta (Klein)", "Tomatensauce, Mozzarella, Feta, Oregano", 17.5, "/images/products/pizza-4.jpg", 1L),
                    new Product("Pizza Feta (Gross)", "Tomatensauce, Mozzarella, Feta, Oregano", 30.5, "/images/products/pizza-4.jpg", 1L),
                    new Product("Pizza Gorgonzola (Klein)", "Tomatensauce, Mozzarella, Gorgonzola, Oregano", 17.5, "/images/products/pizza-5.jpg", 1L),
                    new Product("Pizza Gorgonzola (Gross)", "Tomatensauce, Mozzarella, Gorgonzola, Oregano", 30.5, "/images/products/pizza-5.jpg", 1L),
                    new Product("Pizza Prosciutto e Funghi (Klein)", "Tomatensauce, Mozzarella, Schinken, Champignons, Oregano", 19.5, "/images/products/pizza-6.jpg", 1L),
                    new Product("Pizza Prosciutto e Funghi (Gross)", "Tomatensauce, Mozzarella, Schinken, Champignons, Oregano", 32.5, "/images/products/pizza-6.jpg", 1L),
                    new Product("Pizza Prosciutto (Klein)", "Tomatensauce, Mozzarella, Schinken, Oregano", 18.5, "/images/products/pizza-7.jpg", 1L),
                    new Product("Pizza Prosciutto (Gross)", "Tomatensauce, Mozzarella, Schinken, Oregano", 30.5, "/images/products/pizza-7.jpg", 1L),
                    new Product("Pizza Pommes (Klein)", "Tomatensauce, Mozzarella, Pommes Frites, Oregano", 18.5, "/images/products/pizza-8.jpg", 1L),
                    new Product("Pizza Pommes (Gross)", "Tomatensauce, Mozzarella, Pommes Frites, Oregano", 30.5, "/images/products/pizza-8.jpg", 1L),
                    new Product("Pizza Napoli (Klein)", "Tomatensauce, Mozzarella, Sardellen, Kapern, Oregano", 19.5, "/images/products/pizza-9.jpg", 1L),
                    new Product("Pizza Napoli (Gross)", "Tomatensauce, Mozzarella, Sardellen, Kapern, Oregano", 32.5, "/images/products/pizza-9.jpg", 1L),
                    new Product("Pizza Frutti di Mare (Klein)", "Tomatensauce, Mozzarella, Meeresfrüchte, Oregano", 21.5, "/images/products/pizza-10.jpg", 1L),
                    new Product("Pizza Frutti di Mare (Gross)", "Tomatensauce, Mozzarella, Meeresfrüchte, Oregano", 32.5, "/images/products/pizza-10.jpg", 1L),
                    new Product("Pizza Hewina (Klein)", "Tomatensauce, Mozzarella, frische Tomaten, Oliven, Basilikum, Oregano", 18.5, "/images/products/pizza-11.jpg", 1L),
                    new Product("Pizza Hewina (Gross)", "Tomatensauce, Mozzarella, frische Tomaten, Oliven, Basilikum, Oregano", 31.5, "/images/products/pizza-11.jpg", 1L),
                    new Product("Pizza Lardée (Klein)", "Tomatensauce, Mozzarella, Speck, Ei, Oregano", 19.5, "/images/products/pizza-12.jpg", 1L),
                    new Product("Pizza Lardée (Gross)", "Tomatensauce, Mozzarella, Speck, Ei, Oregano", 31.5, "/images/products/pizza-12.jpg", 1L),
                    new Product("Pizza Crottine (Klein)", "Tomatensauce, Mozzarella, Speck, Feta, Oregano", 19.5, "/images/products/pizza-13.jpg", 1L),
                    new Product("Pizza Crottine (Gross)", "Tomatensauce, Mozzarella, Speck, Feta, Oregano", 32.5, "/images/products/pizza-13.jpg", 1L),
                    new Product("Pizza Kebab (Klein)", "Tomatensauce, Mozzarella, Kebabfleisch, Oregano", 19.5, "/images/products/pizza-14.jpg", 1L),
                    new Product("Pizza Kebab (Gross)", "Tomatensauce, Mozzarella, Kebabfleisch, Oregano", 33.5, "/images/products/pizza-14.jpg", 1L),
                    new Product("Pizza Diavola (scharf) (Klein)", "Tomatensauce, Mozzarella, scharfe Salami, Oregano", 18.5, "/images/products/pizza-15.jpg", 1L),
                    new Product("Pizza Diavola (scharf) (Gross)", "Tomatensauce, Mozzarella, scharfe Salami, Oregano", 30.5, "/images/products/pizza-15.jpg", 1L),
                    new Product("Pizza Quattro Stagioni (Klein)", "Tomatensauce, Mozzarella, Schinken, Champignons, Peperoni, Artischocken, Oregano", 21.5, "/images/products/pizza-16.jpg", 1L),
                    new Product("Pizza Quattro Stagioni (Gross)", "Tomatensauce, Mozzarella, Schinken, Champignons, Peperoni, Artischocken, Oregano", 34.5, "/images/products/pizza-16.jpg", 1L),
                    new Product("Pizza al Tonno (Klein)", "Tomatensauce, Mozzarella, Thunfisch, Zwiebeln, Oregano", 19.5, "/images/products/pizza-17.jpg", 1L),
                    new Product("Pizza al Tonno (Gross)", "Tomatensauce, Mozzarella, Thunfisch, Zwiebeln, Oregano", 34.5, "/images/products/pizza-17.jpg", 1L),
                    new Product("Pizza Siciliana (Klein)", "Tomatensauce, Mozzarella, Schinken, Oliven, Ei, Peperoni, Oregano", 21.5, "/images/products/pizza-18.jpg", 1L),
                    new Product("Pizza Siciliana (Gross)", "Tomatensauce, Mozzarella, Schinken, Oliven, Ei, Peperoni, Oregano", 36.5, "/images/products/pizza-18.jpg", 1L),
                    new Product("Pizza Salame (Klein)", "Tomatensauce, Mozzarella, Salami, Oregano", 18.5, "/images/products/pizza-19.jpg", 1L),
                    new Product("Pizza Salame (Gross)", "Tomatensauce, Mozzarella, Salami, Oregano", 30.5, "/images/products/pizza-19.jpg", 1L),
                    new Product("Pizza Capricciosa (Klein)", "Tomatensauce, Mozzarella, Schinken, Champignons, Artischocken, Ei, Oregano", 21.5, "/images/products/pizza-20.jpg", 1L),
                    new Product("Pizza Capricciosa (Gross)", "Tomatensauce, Mozzarella, Schinken, Champignons, Artischocken, Ei, Oregano", 34.5, "/images/products/pizza-20.jpg", 1L),
                    new Product("Pizza Crevette (Klein)", "Tomatensauce, Mozzarella, Crevetten, Oregano", 20.5, "/images/products/pizza-21.jpg", 1L),
                    new Product("Pizza Crevette (Gross)", "Tomatensauce, Mozzarella, Crevetten, Oregano", 33.5, "/images/products/pizza-21.jpg", 1L),
                    new Product("Pizza Fulmine (Klein)", "Tomatensauce, Mozzarella, Spinat, Speck, Ei, Oregano", 20.5, "/images/products/pizza-22.jpg", 1L),
                    new Product("Pizza Fulmine (Gross)", "Tomatensauce, Mozzarella, Spinat, Speck, Ei, Oregano", 33.5, "/images/products/pizza-22.jpg", 1L),
                    new Product("Pizza Prosciutto Gorgonzola (Klein)", "Tomatensauce, Mozzarella, Schinken, Gorgonzola, Oregano", 19.5, "/images/products/pizza-23.jpg", 1L),
                    new Product("Pizza Prosciutto Gorgonzola (Gross)", "Tomatensauce, Mozzarella, Schinken, Gorgonzola, Oregano", 33.5, "/images/products/pizza-23.jpg", 1L),
                    new Product("Calzone (zugedeckt) (Klein)", "Tomatensauce, Mozzarella, Schinken, Ei, Champignons, Oregano", 20.5, "/images/products/pizza-24.jpg", 1L),
                    new Product("Calzone Kebab (zugedeckt) (Klein)", "Tomatensauce, Mozzarella, Kebabfleisch, Zwiebeln, Oregano", 20.5, "/images/products/pizza-25.jpg", 1L),
                    new Product("Pizza Hot'n Spicy (scharf) (Klein)", "Tomatensauce, Mozzarella, Zwiebeln, Peperoni, Rindfleisch, frische Tomaten, scharfe Gewürze, Oregano", 21.5, "/images/products/pizza-26.jpg", 1L),
                    new Product("Pizza Hot'n Spicy (scharf) (Gross)", "Tomatensauce, Mozzarella, Zwiebeln, Peperoni, Rindfleisch, frische Tomaten, scharfe Gewürze, Oregano", 36.5, "/images/products/pizza-26.jpg", 1L),
                    new Product("Pizza Chicken Fajita (Klein)", "Tomatensauce, Mozzarella, Peperoni, Pouletgeschnetzeltes, Oregano", 20.5, "/images/products/pizza-27.jpg", 1L),
                    new Product("Pizza Chicken Fajita (Gross)", "Tomatensauce, Mozzarella, Peperoni, Pouletgeschnetzeltes, Oregano", 34.5, "/images/products/pizza-27.jpg", 1L),
                    new Product("Pizza Argovia (Klein)", "Tomatensauce, Mozzarella, Kalbfleisch, Knoblauch, Kräuterbutter, Oregano", 20.5, "/images/products/pizza-28.jpg", 1L),
                    new Product("Pizza Argovia (Gross)", "Tomatensauce, Mozzarella, Kalbfleisch, Knoblauch, Kräuterbutter, Oregano", 34.5, "/images/products/pizza-28.jpg", 1L),
                    new Product("Pizza Rohrbach (Klein)", "Tomatensauce, Mozzarella, Kräuterbutter, Kalbfleisch, Peperoni, Knoblauch, Champignons, Oregano", 22.5, "/images/products/pizza-29.jpg", 1L),
                    new Product("Pizza Rohrbach (Gross)", "Tomatensauce, Mozzarella, Kräuterbutter, Kalbfleisch, Peperoni, Knoblauch, Champignons, Oregano", 35.5, "/images/products/pizza-29.jpg", 1L),
                    new Product("Pizza Suhrental (Klein)", "Tomatensauce, Mozzarella, Salami, Zwiebeln, Champignons, Oregano", 20.5, "/images/products/pizza-30.jpg", 1L),
                    new Product("Pizza Suhrental (Gross)", "Tomatensauce, Mozzarella, Salami, Zwiebeln, Champignons, Oregano", 32.5, "/images/products/pizza-30.jpg", 1L),
                    new Product("Pizza Stromboli (scharf) (Klein)", "Tomatensauce, Mozzarella, scharfe Salami, Zwiebeln, Sardellen, Artischocken, Peperoni, Champignons, Oregano", 23.5, "/images/products/pizza-31.jpg", 1L),
                    new Product("Pizza Stromboli (scharf) (Gross)", "Tomatensauce, Mozzarella, scharfe Salami, Zwiebeln, Sardellen, Artischocken, Peperoni, Champignons, Oregano", 38.5, "/images/products/pizza-31.jpg", 1L),
                    new Product("Pizza Svizzera (Klein)", "Tomatensauce, Mozzarella, Schinken, Salami, Speck, Oregano", 21.5, "/images/products/pizza-32.jpg", 1L),
                    new Product("Pizza Svizzera (Gross)", "Tomatensauce, Mozzarella, Schinken, Salami, Speck, Oregano", 36.5, "/images/products/pizza-32.jpg", 1L),
                    new Product("Pizza Prosciutto Salami (Klein)", "Tomatensauce, Mozzarella, Schinken, Salami, Oregano", 19.5, "/images/products/pizza-33.jpg", 1L),
                    new Product("Pizza Prosciutto Salami (Gross)", "Tomatensauce, Mozzarella, Schinken, Salami, Oregano", 32.5, "/images/products/pizza-33.jpg", 1L),
                    new Product("Pizza Cino (scharf) (Klein)", "Tomatensauce, Mozzarella, frische Tomaten, Peperoni, Champignons, Knoblauch, Kalbfleisch, scharfe Gewürze, Oregano", 22.5, "/images/products/pizza-34.jpg", 1L),
                    new Product("Pizza Cino (scharf) (Gross)", "Tomatensauce, Mozzarella, frische Tomaten, Peperoni, Champignons, Knoblauch, Kalbfleisch, scharfe Gewürze, Oregano", 38.5, "/images/products/pizza-34.jpg", 1L),
                    new Product("Pizza Hawaii (Klein)", "Tomatensauce, Mozzarella, Schinken, Ananas, Oregano", 19.5, "/images/products/pizza-35.jpg", 1L),
                    new Product("Pizza Hawaii (Gross)", "Tomatensauce, Mozzarella, Schinken, Ananas, Oregano", 32.5, "/images/products/pizza-35.jpg", 1L),
                    new Product("Pizza Taj Mahal (Klein)", "Tomatensauce, Mozzarella, Curry, Pouletgeschnetzeltes, Ananas, Oregano", 20.5, "/images/products/pizza-36.jpg", 1L),
                    new Product("Pizza Taj Mahal (Gross)", "Tomatensauce, Mozzarella, Curry, Pouletgeschnetzeltes, Ananas, Oregano", 34.5, "/images/products/pizza-36.jpg", 1L),
                    new Product("Pizza Quattro Formaggi (Klein)", "Tomatensauce, Mozzarella, 4 Käsesorten, Oregano", 20.5, "/images/products/pizza-37.jpg", 1L),
                    new Product("Pizza Quattro Formaggi (Gross)", "Tomatensauce, Mozzarella, 4 Käsesorten, Oregano", 34.5, "/images/products/pizza-37.jpg", 1L),
                    new Product("Pizza Vegetaria (Klein)", "Tomatensauce, Mozzarella, Oregano und drei Zutaten nach Wahl", 18.5, "/images/products/pizza-38.jpg", 1L),
                    new Product("Pizza Vegetaria (Gross)", "Tomatensauce, Mozzarella, Oregano und drei Zutaten nach Wahl", 31.5, "/images/products/pizza-38.jpg", 1L),
                    new Product("Wunschpizza (Klein)", "Tomatensauce, Mozzarella, Oregano und vier Zutaten nach Wahl", 23.5, "/images/products/pizza-39.jpg", 1L),
                    new Product("Wunschpizza (Gross)", "Tomatensauce, Mozzarella, Oregano und vier Zutaten nach Wahl", 38.5, "/images/products/pizza-39.jpg", 1L),
                    new Product("Pide Gemüse", "Mozzarella, Peperoni, Pilze und Oliven", 19.50,  "/images/products/pide-1.jpg", 2L),
                    new Product("Pide Kalbfleisch", "Mozzarella, Kalbfleisch, Zwiebeln, Peperoni und Kräuterbutter", 21.50,  "/images/products/pide-2.jpg", 2L),
                    new Product("Pide Spinat", "Mozzarella, Spinat und Ei", 19.50,  "/images/products/pide-3.jpg", 2L),
                    new Product("Pide Kebab", "Mozzarella und Kebabfleisch", 19.50,  "/images/products/pide-4.jpg", 2L),
                    new Product("Chicken Nuggets Box (8 Stück)", "Mit Pommes Frites und Sauce nach Wahl", 17.50,  "/images/products/snack-1.jpg", 3L),
                    new Product("Chicken Nuggets Teller (8 Stück)", "Serviert mit Pommes Frites, Salat und Sauce nach Wahl", 21.50,  "/images/products/snack-2.jpg", 3L),
                    new Product("Pouletflügeli Teller (6 Stück)", "Serviert mit Pommes Frites, Salat und Sauce nach Wahl", 22.50,  "/images/products/snack-3.jpg", 3L),
                    new Product("Falafel Teller", "Serviert mit Pommes Frites, Salat und Sauce nach Wahl", 19.50,  "/images/products/snack-4.jpg", 3L),
                    new Product("Kebab Teller", "Serviert mit Pommes Frites, Salat und Sauce nach Wahl", 22.50,  "/images/products/snack-5.jpg", 3L),
                    new Product("Eglifilet Teller", "Serviert mit Pommes Frites, Salat und Sauce nach Wahl", 22.50,  "/images/products/snack-6.jpg", 3L),
                    new Product("Eglifilet Box", "Mit Pommes Frites und Sauce nach Wahl", 18.50,  "/images/products/snack-7.jpg", 3L),
                    new Product("Döner Box", "Mit Sauce nach Wahl", 14.00,  "/images/products/snack-8.jpg", 3L),
                    new Product("Döner Box XXL", "Mit Sauce nach Wahl", 18.00,  "/images/products/snack-9.jpg", 3L),
                    new Product("Pommes Frites", "Mit Sauce nach Wahl", 8.00,  "/images/products/snack-10.jpg", 3L),
                    new Product("Pommes Frites XXL", "Mit Sauce nach Wahl", 12.00,  "/images/products/snack-11.jpg", 3L),
                    new Product("Kebab im Taschenbrot", "Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl", 13.00,  "/images/products/snack-12.jpg", 3L),
                    new Product("Kebab im Fladenbrot", "Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl", 14.00,  "/images/products/snack-13.jpg", 3L),
                    new Product("Kebab Cheese im Taschenbrot", "Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl", 15.00,  "/images/products/snack-14.jpg", 3L),
                    new Product("Kebab Cheese im Fladenbrot", "Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl", 16.00,  "/images/products/snack-15.jpg", 3L),
                    new Product("Gyros im Taschenbrot", "Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl", 15.00,  "/images/products/snack-16.jpg", 3L),
                    new Product("Gyros im Fladenbrot", "Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl", 16.00,  "/images/products/snack-17.jpg", 3L),
                    new Product("Mega Kebab im Fladenbrot", "Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl", 21.00,  "/images/products/snack-18.jpg", 3L),
                    new Product("Falafel im Taschenbrot", "Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl", 13.00,  "/images/products/snack-19.jpg", 3L),
                    new Product("Falafel im Fladenbrot", "Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl", 14.00,  "/images/products/snack-20.jpg", 3L),
                    new Product("Kapsalon", "Pommes Frites, Kebabfleisch, überbackener Käse und Sauce nach Wahl", 20.00,  "/images/products/snack-21.jpg", 3L),
                    new Product("Hamburger", "Mit Tomaten, Salat, Zwiebeln, Essiggurken und Sauce nach Wahl", 12.00,  "/images/products/snack-22.jpg", 3L),
                    new Product("Doppel Hamburger", "Mit Tomaten, Salat, Zwiebeln, Essiggurken und Sauce nach Wahl", 16.00,  "/images/products/snack-23.jpg", 3L),
                    new Product("Cheeseburger", "Mit Tomaten, Salat, Zwiebeln, Essiggurken und Sauce nach Wahl", 13.00,  "/images/products/snack-24.jpg", 3L),
                    new Product("Doppel Cheeseburger", "Mit Tomaten, Salat, Zwiebeln, Essiggurken und Sauce nach Wahl", 17.00,  "/images/products/snack-25.jpg", 3L),
                    new Product("Triple Burger", "Mit Tomaten, Salat, Zwiebeln, Essiggurken und Sauce nach Wahl", 19.00,  "/images/products/snack-26.jpg", 3L),
                    new Product("Triple Cheeseburger", "Mit Tomaten, Salat, Zwiebeln, Essiggurken und Sauce nach Wahl", 20.00,  "/images/products/snack-27.jpg", 3L),
                    new Product("Schnitzelbrot", "Mit Tomaten, Salat, Zwiebeln und Sauce nach Wahl", 13.00,  "/images/products/snack-28.jpg", 3L),
                    new Product("Grüner Salat", null, 9.00,  "/images/products/salat-1.jpg", 4L),
                    new Product("Gemischter Salat", null, 13.00,  "/images/products/salat-2.jpg", 4L),
                    new Product("Thonsalat", null, 14.00,  "/images/products/salat-3.jpg", 4L),
                    new Product("Pouletsalat", null, 15.00,  "/images/products/salat-4.jpg", 4L),
                    new Product("Kebabsalat", null, 15.00,  "/images/products/salat-5.jpg", 4L),
                    new Product("Falafelsalat", null, 14.00,  "/images/products/salat-6.jpg", 4L),
                    new Product("Tiramisu", null, 8.00,  "/images/products/dessert-1.jpg", 5L),
                    new Product("Schoggimousse", null, 8.00,  "/images/products/dessert-2.jpg", 5L),
                    new Product("Kokosnuss", null, 9.00,  "/images/products/dessert-3.jpg", 5L),
                    new Product("Limone Glace", null, 9.00,  "/images/products/dessert-4.jpg", 5L),
                    new Product("Coppa Spagnola (Kirsch, 100ml)", null, 10.00,  "/images/products/dessert-5.jpg", 5L),
                    new Product("Coppa Café (90ml)", null, 10.00,  "/images/products/dessert-6.jpg", 5L),
                    new Product("Coppa Stracciatella (100ml)", null, 10.00,  "/images/products/dessert-7.jpg", 5L),
                    new Product("Coppa Pistacchio (100ml)", null, 10.00,  "/images/products/dessert-8.jpg", 5L),
                    new Product("Kinderglace Panda (Vanille)", null, 7.00,  "/images/products/dessert-9.jpg", 5L),
                    new Product("Kinderglace Pingu (Schokolade)", null, 7.00,  "/images/products/dessert-10.jpg", 5L),
                    new Product("Coca-Cola 0,5l", "Enthält Koffein (10,0 mg/100 ml)", 4.00,  "/images/products/drink-1.jpg", 6L),
                    new Product("Coca-Cola 1,5l", "Enthält Koffein (10,0 mg/100 ml)", 7.00,  "/images/products/drink-2.jpg", 6L),
                    new Product("Coca-Cola Zero 0,5l", "Enthält Koffein (10,0 mg/100 ml)", 4.00,  "/images/products/drink-3.jpg", 6L),
                    new Product("Coca-Cola Zero 1,5l", "Enthält Koffein (10,0 mg/100 ml)", 7.00,  "/images/products/drink-4.jpg", 6L),
                    new Product("Rivella Rot 0,5l", null, 4.00,  "/images/products/drink-5.jpg", 6L),
                    new Product("Rivella Rot 1,5l", null, 7.00,  "/images/products/drink-6.jpg", 6L),
                    new Product("Fanta 0,5l", null, 4.00, "/images/products/drink-7.jpg", 6L),
                    new Product("Fanta 1,5l", null, 7.00, "/images/products/drink-8.jpg", 6L),
                    new Product("Fanta Mango 0,5l", null, 4.00,  "/images/products/drink-9.jpg", 6L),
                    new Product("Fanta Mango 1,5l", null, 7.00,  "/images/products/drink-10.jpg", 6L),
                    new Product("Ice Tea Peach 0,5l", null, 4.00,  "/images/products/drink-11.jpg", 6L),
                    new Product("Ice Tea Peach 1,5l", null, 7.00,  "/images/products/drink-12.jpg", 6L),
                    new Product("Ice Tea Lemon 0,5l", "Enthält Koffein (25,0 mg/100 ml)", 4.00,  "/images/products/drink-13.jpg", 6L),
                    new Product("Ice Tea Lemon 1,5l", "Enthält Koffein (25,0 mg/100 ml)", 7.00,  "/images/products/drink-14.jpg", 6L),
                    new Product("Uludag Limonada 0,5l", null, 4.00,  "/images/products/drink-15.jpg", 6L),
                    new Product("Uludag Orange 0,5l", null, 4.00,  "/images/products/drink-16.jpg", 6L),
                    new Product("Apfelschorle 0,5l", null, 4.00,  "/images/products/drink-17.jpg", 6L),
                    new Product("Valser Classic 0,5l", null, 4.00,  "/images/products/drink-18.jpg", 6L),
                    new Product("Valser Classic 1,5l", null, 7.00,  "/images/products/drink-19.jpg", 6L),
                    new Product("Valser Silence 0,5l", null, 4.00,  "/images/products/drink-20.jpg", 6L),
                    new Product("Red Bull 0,25l", "Hoher Koffeingehalt (32,0 mg/100 ml)", 5.00,  "/images/products/drink-21.jpg", 6L),
                    new Product("Monster Energy 0,355l", "Hoher Koffeingehalt (36,0 mg/100 ml)", 5.00,  "/images/products/drink-22.jpg", 6L),
                    new Product("Monster Zero 0,355l", "Hoher Koffeingehalt (36,0 mg/100 ml)", 5.00,  "/images/products/drink-23.jpg", 6L),
                    new Product("Heineken 0,5l", "5% vol", 5.00,  "/images/products/alcohol-1.jpg", 7L),
                    new Product("Feldschlösschen 0,5l", "5% vol", 5.00,  "/images/products/alcohol-2.jpg", 7L),
                    new Product("Smirnoff ICE 0,275l", "4% vol", 6.00,  "/images/products/alcohol-3.jpg", 7L),
                    new Product("Dole du Valais 0,5l", "Rotwein, 13% vol", 18.00,  "/images/products/alcohol-4.jpg", 7L),
                    new Product("Nero d'Avola 0,75l", "Rotwein, 13% vol", 24.00,  "/images/products/alcohol-5.jpg", 7L),
                    new Product("Fendant du Valais 0,5l", "Weisswein, 13% vol", 18.00,  "/images/products/alcohol-6.jpg", 7L),
                    new Product("Rosé du Gamay 0,5l", "Roséwein, 13% vol", 18.00,  "/images/products/alcohol-7.jpg", 7L),
                    new Product("Vodka 0,7l", "38% vol", 36.00,  "/images/products/alcohol-8.jpg", 7L)
            );
            productRepository.saveAll(products);
        }
    }
}
