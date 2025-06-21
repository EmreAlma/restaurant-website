package com.restaurant.backend.boostrap;

import com.restaurant.backend.entity.Product;
import com.restaurant.backend.enums.ProductCategory;
import com.restaurant.backend.repository.ProductRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DataInitializer {

    private final ProductRepository productRepository;

    public DataInitializer(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @PostConstruct
    public void initData() {
        initProducts();
    }

    private void initProducts() {
        if (productRepository.findAll().isEmpty()) {
            List<Product> products = List.of(
                    new Product("Pizza Margherita", "Tomatensauce, Mozzarella, Oregano", 15.50, 25.50, "/images/products/pizza-1.jpg", ProductCategory.PIZZA),
                    new Product("Pizza Funghi", "Tomatensauce, Mozzarella, Champignons, Oregano", 16.50, 29.50, "/images/products/pizza-2.jpg", ProductCategory.PIZZA),
                    new Product("Pizza Cipolla", "Tomatensauce, Mozzarella, Zwiebeln, Oregano", 16.50, 29.50, "/images/products/pizza-3.jpg", ProductCategory.PIZZA),
                    new Product("Pizza Feta", "Tomatensauce, Mozzarella, Feta, Oregano", 17.50, 30.50, "/images/products/pizza-4.jpg", ProductCategory.PIZZA),
                    new Product("Pizza Gorgonzola", "Tomatensauce, Mozzarella, Gorgonzola, Oregano", 17.50, 30.50, "/images/products/pizza-5.jpg", ProductCategory.PIZZA),
                    new Product("Pizza Prosciutto e Funghi", "Tomatensauce, Mozzarella, Schinken, Champignons, Oregano", 19.50, 32.50, "/images/products/pizza-6.jpg", ProductCategory.PIZZA),
                    new Product("Pizza Prosciutto", "Tomatensauce, Mozzarella, Schinken, Oregano", 18.50, 30.50, "/images/products/pizza-7.jpg", ProductCategory.PIZZA),
                    new Product("Pizza Pommes", "Tomatensauce, Mozzarella, Pommes Frites, Oregano", 18.50, 30.50, "/images/products/pizza-8.jpg", ProductCategory.PIZZA),
                    new Product("Pizza Napoli", "Tomatensauce, Mozzarella, Sardellen, Kapern, Oregano", 19.50, 32.50, "/images/products/pizza-9.jpg", ProductCategory.PIZZA),
                    new Product("Pizza Frutti di Mare", "Tomatensauce, Mozzarella, Meeresfrüchte, Oregano", 21.50, 32.50, "/images/products/pizza-10.jpg", ProductCategory.PIZZA),
                    new Product("Pizza Hewina", "Tomatensauce, Mozzarella, frische Tomaten, Oliven, Basilikum, Oregano", 18.50, 31.50, "/images/products/pizza-11.jpg", ProductCategory.PIZZA),
                    new Product("Pizza Lardée", "Tomatensauce, Mozzarella, Speck, Ei, Oregano", 19.50, 31.50, "/images/products/pizza-12.jpg", ProductCategory.PIZZA),
                    new Product("Pizza Crottine", "Tomatensauce, Mozzarella, Speck, Feta, Oregano", 19.50, 32.50, "/images/products/pizza-13.jpg", ProductCategory.PIZZA),
                    new Product("Pizza Kebab", "Tomatensauce, Mozzarella, Kebabfleisch, Oregano", 19.50, 33.50, "/images/products/pizza-14.jpg", ProductCategory.PIZZA),
                    new Product("Pizza Diavola (scharf)", "Tomatensauce, Mozzarella, scharfe Salami, Oregano", 18.50, 30.50, "/images/products/pizza-15.jpg", ProductCategory.PIZZA),
                    new Product("Pizza Quattro Stagioni", "Tomatensauce, Mozzarella, Schinken, Champignons, Peperoni, Artischocken, Oregano", 21.50, 34.50, "/images/products/pizza-16.jpg", ProductCategory.PIZZA),
                    new Product("Pizza al Tonno", "Tomatensauce, Mozzarella, Thunfisch, Zwiebeln, Oregano", 19.50, 34.50, "/images/products/pizza-17.jpg", ProductCategory.PIZZA),
                    new Product("Pizza Siciliana", "Tomatensauce, Mozzarella, Schinken, Oliven, Ei, Peperoni, Oregano", 21.50, 36.50, "/images/products/pizza-18.jpg", ProductCategory.PIZZA),
                    new Product("Pizza Salame", "Tomatensauce, Mozzarella, Salami, Oregano", 18.50, 30.50, "/images/products/pizza-19.jpg", ProductCategory.PIZZA),
                    new Product("Pizza Capricciosa", "Tomatensauce, Mozzarella, Schinken, Champignons, Artischocken, Ei, Oregano", 21.50, 34.50, "/images/products/pizza-20.jpg", ProductCategory.PIZZA),
                    new Product("Pizza Crevette", "Tomatensauce, Mozzarella, Crevetten, Oregano", 20.50, 33.50, "/images/products/pizza-21.jpg", ProductCategory.PIZZA),
                    new Product("Pizza Fulmine", "Tomatensauce, Mozzarella, Spinat, Speck, Ei, Oregano", 20.50, 33.50, "/images/products/pizza-22.jpg", ProductCategory.PIZZA),
                    new Product("Pizza Prosciutto Gorgonzola", "Tomatensauce, Mozzarella, Schinken, Gorgonzola, Oregano", 19.50, 33.50, "/images/products/pizza-23.jpg", ProductCategory.PIZZA),
                    new Product("Calzone (zugedeckt)", "Tomatensauce, Mozzarella, Schinken, Ei, Champignons, Oregano", 20.50, null, "/images/products/pizza-24.jpg", ProductCategory.PIZZA),
                    new Product("Calzone Kebab (zugedeckt)", "Tomatensauce, Mozzarella, Kebabfleisch, Zwiebeln, Oregano", 20.50, null, "/images/products/pizza-25.jpg", ProductCategory.PIZZA),
                    new Product("Pizza Hot'n Spicy (scharf)", "Tomatensauce, Mozzarella, Zwiebeln, Peperoni, Rindfleisch, frische Tomaten, scharfe Gewürze, Oregano", 21.50, 36.50, "/images/products/pizza-26.jpg", ProductCategory.PIZZA),
                    new Product("Pizza Chicken Fajita", "Tomatensauce, Mozzarella, Peperoni, Pouletgeschnetzeltes, Oregano", 20.50, 34.50, "/images/products/pizza-27.jpg", ProductCategory.PIZZA),
                    new Product("Pizza Argovia", "Tomatensauce, Mozzarella, Kalbfleisch, Knoblauch, Kräuterbutter, Oregano", 20.50, 34.50, "/images/products/pizza-28.jpg", ProductCategory.PIZZA),
                    new Product("Pizza Rohrbach", "Tomatensauce, Mozzarella, Kräuterbutter, Kalbfleisch, Peperoni, Knoblauch, Champignons, Oregano", 22.50, 35.50, "/images/products/pizza-29.jpg", ProductCategory.PIZZA),
                    new Product("Pizza Suhrental", "Tomatensauce, Mozzarella, Salami, Zwiebeln, Champignons, Oregano", 20.50, 32.50, "/images/products/pizza-30.jpg", ProductCategory.PIZZA),
                    new Product("Pizza Stromboli (scharf)", "Tomatensauce, Mozzarella, scharfe Salami, Zwiebeln, Sardellen, Artischocken, Peperoni, Champignons, Oregano", 23.50, 38.50, "/images/products/pizza-31.jpg", ProductCategory.PIZZA),
                    new Product("Pizza Svizzera", "Tomatensauce, Mozzarella, Schinken, Salami, Speck, Oregano", 21.50, 36.50, "/images/products/pizza-32.jpg", ProductCategory.PIZZA),
                    new Product("Pizza Prosciutto Salami", "Tomatensauce, Mozzarella, Schinken, Salami, Oregano", 19.50, 32.50, "/images/products/pizza-33.jpg", ProductCategory.PIZZA),
                    new Product("Pizza Cino (scharf)", "Tomatensauce, Mozzarella, frische Tomaten, Peperoni, Champignons, Knoblauch, Kalbfleisch, scharfe Gewürze, Oregano", 22.50, 38.50, "/images/products/pizza-34.jpg", ProductCategory.PIZZA),
                    new Product("Pizza Hawaii", "Tomatensauce, Mozzarella, Schinken, Ananas, Oregano", 19.50, 32.50, "/images/products/pizza-35.jpg", ProductCategory.PIZZA),
                    new Product("Pizza Taj Mahal", "Tomatensauce, Mozzarella, Curry, Pouletgeschnetzeltes, Ananas, Oregano", 20.50, 34.50, "/images/products/pizza-36.jpg", ProductCategory.PIZZA),
                    new Product("Pizza Quattro Formaggi", "Tomatensauce, Mozzarella, 4 Käsesorten, Oregano", 20.50, 34.50, "/images/products/pizza-37.jpg", ProductCategory.PIZZA),
                    new Product("Pizza Vegetaria", "Tomatensauce, Mozzarella, Oregano und drei Zutaten nach Wahl", 18.50, 31.50, "/images/products/pizza-38.jpg", ProductCategory.PIZZA),
                    new Product("Wunschpizza", "Tomatensauce, Mozzarella, Oregano und vier Zutaten nach Wahl", 23.50, 38.50, "/images/products/pizza-39.jpg", ProductCategory.PIZZA),
                    new Product("Pide Gemüse", "Mozzarella, Peperoni, Pilze und Oliven", 19.50, null, "/images/products/pide-1.jpg", ProductCategory.PIDE),
                    new Product("Pide Kalbfleisch", "Mozzarella, Kalbfleisch, Zwiebeln, Peperoni und Kräuterbutter", 21.50, null, "/images/products/pide-2.jpg", ProductCategory.PIDE),
                    new Product("Pide Spinat", "Mozzarella, Spinat und Ei", 19.50, null, "/images/products/pide-3.jpg", ProductCategory.PIDE),
                    new Product("Pide Kebab", "Mozzarella und Kebabfleisch", 19.50, null, "/images/products/pide-4.jpg", ProductCategory.PIDE),
                    new Product("Chicken Nuggets Box (8 Stück)", "Mit Pommes Frites und Sauce nach Wahl", 17.50, null, "/images/products/snack-1.jpg", ProductCategory.SNACKS),
                    new Product("Chicken Nuggets Teller (8 Stück)", "Serviert mit Pommes Frites, Salat und Sauce nach Wahl", 21.50, null, "/images/products/snack-2.jpg", ProductCategory.SNACKS),
                    new Product("Pouletflügeli Teller (6 Stück)", "Serviert mit Pommes Frites, Salat und Sauce nach Wahl", 22.50, null, "/images/products/snack-3.jpg", ProductCategory.SNACKS),
                    new Product("Falafel Teller", "Serviert mit Pommes Frites, Salat und Sauce nach Wahl", 19.50, null, "/images/products/snack-4.jpg", ProductCategory.SNACKS),
                    new Product("Kebab Teller", "Serviert mit Pommes Frites, Salat und Sauce nach Wahl", 22.50, null, "/images/products/snack-5.jpg", ProductCategory.SNACKS),
                    new Product("Eglifilet Teller", "Serviert mit Pommes Frites, Salat und Sauce nach Wahl", 22.50, null, "/images/products/snack-6.jpg", ProductCategory.SNACKS),
                    new Product("Eglifilet Box", "Mit Pommes Frites und Sauce nach Wahl", 18.50, null, "/images/products/snack-7.jpg", ProductCategory.SNACKS),
                    new Product("Döner Box", "Mit Sauce nach Wahl", 14.00, null, "/images/products/snack-8.jpg", ProductCategory.SNACKS),
                    new Product("Döner Box XXL", "Mit Sauce nach Wahl", 18.00, null, "/images/products/snack-9.jpg", ProductCategory.SNACKS),
                    new Product("Pommes Frites", "Mit Sauce nach Wahl", 8.00, null, "/images/products/snack-10.jpg", ProductCategory.SNACKS),
                    new Product("Pommes Frites XXL", "Mit Sauce nach Wahl", 12.00, null, "/images/products/snack-11.jpg", ProductCategory.SNACKS),
                    new Product("Kebab im Taschenbrot", "Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl", 13.00, null, "/images/products/snack-12.jpg", ProductCategory.SNACKS),
                    new Product("Kebab im Fladenbrot", "Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl", 14.00, null, "/images/products/snack-13.jpg", ProductCategory.SNACKS),
                    new Product("Kebab Cheese im Taschenbrot", "Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl", 15.00, null, "/images/products/snack-14.jpg", ProductCategory.SNACKS),
                    new Product("Kebab Cheese im Fladenbrot", "Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl", 16.00, null, "/images/products/snack-15.jpg", ProductCategory.SNACKS),
                    new Product("Gyros im Taschenbrot", "Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl", 15.00, null, "/images/products/snack-16.jpg", ProductCategory.SNACKS),
                    new Product("Gyros im Fladenbrot", "Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl", 16.00, null, "/images/products/snack-17.jpg", ProductCategory.SNACKS),
                    new Product("Mega Kebab im Fladenbrot", "Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl", 21.00, null, "/images/products/snack-18.jpg", ProductCategory.SNACKS),
                    new Product("Falafel im Taschenbrot", "Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl", 13.00, null, "/images/products/snack-19.jpg", ProductCategory.SNACKS),
                    new Product("Falafel im Fladenbrot", "Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl", 14.00, null, "/images/products/snack-20.jpg", ProductCategory.SNACKS),
                    new Product("Kapsalon", "Pommes Frites, Kebabfleisch, überbackener Käse und Sauce nach Wahl", 20.00, null, "/images/products/snack-21.jpg", ProductCategory.SNACKS),
                    new Product("Hamburger", "Mit Tomaten, Salat, Zwiebeln, Essiggurken und Sauce nach Wahl", 12.00, null, "/images/products/snack-22.jpg", ProductCategory.SNACKS),
                    new Product("Doppel Hamburger", "Mit Tomaten, Salat, Zwiebeln, Essiggurken und Sauce nach Wahl", 16.00, null, "/images/products/snack-23.jpg", ProductCategory.SNACKS),
                    new Product("Cheeseburger", "Mit Tomaten, Salat, Zwiebeln, Essiggurken und Sauce nach Wahl", 13.00, null, "/images/products/snack-24.jpg", ProductCategory.SNACKS),
                    new Product("Doppel Cheeseburger", "Mit Tomaten, Salat, Zwiebeln, Essiggurken und Sauce nach Wahl", 17.00, null, "/images/products/snack-25.jpg", ProductCategory.SNACKS),
                    new Product("Triple Burger", "Mit Tomaten, Salat, Zwiebeln, Essiggurken und Sauce nach Wahl", 19.00, null, "/images/products/snack-26.jpg", ProductCategory.SNACKS),
                    new Product("Triple Cheeseburger", "Mit Tomaten, Salat, Zwiebeln, Essiggurken und Sauce nach Wahl", 20.00, null, "/images/products/snack-27.jpg", ProductCategory.SNACKS),
                    new Product("Schnitzelbrot", "Mit Tomaten, Salat, Zwiebeln und Sauce nach Wahl", 13.00, null, "/images/products/snack-28.jpg", ProductCategory.SNACKS),
                    new Product("Grüner Salat", null, 9.00, null, "/images/products/salat-1.jpg", ProductCategory.SALETA),
                    new Product("Gemischter Salat", null, 13.00, null, "/images/products/salat-2.jpg", ProductCategory.SALETA),
                    new Product("Thonsalat", null, 14.00, null, "/images/products/salat-3.jpg", ProductCategory.SALETA),
                    new Product("Pouletsalat", null, 15.00, null, "/images/products/salat-4.jpg", ProductCategory.SALETA),
                    new Product("Kebabsalat", null, 15.00, null, "/images/products/salat-5.jpg", ProductCategory.SALETA),
                    new Product("Falafelsalat", null, 14.00, null, "/images/products/salat-6.jpg", ProductCategory.SALETA),
                    new Product("Tiramisu", null, 8.00, null, "/images/products/dessert-1.jpg", ProductCategory.DESSERT),
                    new Product("Schoggimousse", null, 8.00, null, "/images/products/dessert-2.jpg", ProductCategory.DESSERT),
                    new Product("Kokosnuss", null, 9.00, null, "/images/products/dessert-3.jpg", ProductCategory.DESSERT),
                    new Product("Limone Glace", null, 9.00, null, "/images/products/dessert-4.jpg", ProductCategory.DESSERT),
                    new Product("Coppa Spagnola (Kirsch, 100ml)", null, 10.00, null, "/images/products/dessert-5.jpg", ProductCategory.DESSERT),
                    new Product("Coppa Café (90ml)", null, 10.00, null, "/images/products/dessert-6.jpg", ProductCategory.DESSERT),
                    new Product("Coppa Stracciatella (100ml)", null, 10.00, null, "/images/products/dessert-7.jpg", ProductCategory.DESSERT),
                    new Product("Coppa Pistacchio (100ml)", null, 10.00, null, "/images/products/dessert-8.jpg", ProductCategory.DESSERT),
                    new Product("Kinderglace Panda (Vanille)", null, 7.00, null, "/images/products/dessert-9.jpg", ProductCategory.DESSERT),
                    new Product("Kinderglace Pingu (Schokolade)", null, 7.00, null, "/images/products/dessert-10.jpg", ProductCategory.DESSERT),
                    new Product("Coca-Cola 0,5l", "Enthält Koffein (10,0 mg/100 ml)", 4.00, null, "/images/products/drink-1.jpg", ProductCategory.DRINK),
                    new Product("Coca-Cola 1,5l", "Enthält Koffein (10,0 mg/100 ml)", 7.00, null, "/images/products/drink-2.jpg", ProductCategory.DRINK),
                    new Product("Coca-Cola Zero 0,5l", "Enthält Koffein (10,0 mg/100 ml)", 4.00, null, "/images/products/drink-3.jpg", ProductCategory.DRINK),
                    new Product("Coca-Cola Zero 1,5l", "Enthält Koffein (10,0 mg/100 ml)", 7.00, null, "/images/products/drink-4.jpg", ProductCategory.DRINK),
                    new Product("Rivella Rot 0,5l", null, 4.00, null, "/images/products/drink-5.jpg", ProductCategory.DRINK),
                    new Product("Rivella Rot 1,5l", null, 7.00, null, "/images/products/drink-6.jpg", ProductCategory.DRINK),
                    new Product("Fanta 0,5l", null, 4.00, null, "/images/products/drink-7.jpg", ProductCategory.DRINK),
                    new Product("Fanta 1,5l", null, 7.00, null, "/images/products/drink-8.jpg", ProductCategory.DRINK),
                    new Product("Fanta Mango 0,5l", null, 4.00, null, "/images/products/drink-9.jpg", ProductCategory.DRINK),
                    new Product("Fanta Mango 1,5l", null, 7.00, null, "/images/products/drink-10.jpg", ProductCategory.DRINK),
                    new Product("Ice Tea Peach 0,5l", null, 4.00, null, "/images/products/drink-11.jpg", ProductCategory.DRINK),
                    new Product("Ice Tea Peach 1,5l", null, 7.00, null, "/images/products/drink-12.jpg", ProductCategory.DRINK),
                    new Product("Ice Tea Lemon 0,5l", "Enthält Koffein (25,0 mg/100 ml)", 4.00, null, "/images/products/drink-13.jpg", ProductCategory.DRINK),
                    new Product("Ice Tea Lemon 1,5l", "Enthält Koffein (25,0 mg/100 ml)", 7.00, null, "/images/products/drink-14.jpg", ProductCategory.DRINK),
                    new Product("Uludag Limonada 0,5l", null, 4.00, null, "/images/products/drink-15.jpg", ProductCategory.DRINK),
                    new Product("Uludag Orange 0,5l", null, 4.00, null, "/images/products/drink-16.jpg", ProductCategory.DRINK),
                    new Product("Apfelschorle 0,5l", null, 4.00, null, "/images/products/drink-17.jpg", ProductCategory.DRINK),
                    new Product("Valser Classic 0,5l", null, 4.00, null, "/images/products/drink-18.jpg", ProductCategory.DRINK),
                    new Product("Valser Classic 1,5l", null, 7.00, null, "/images/products/drink-19.jpg", ProductCategory.DRINK),
                    new Product("Valser Silence 0,5l", null, 4.00, null, "/images/products/drink-20.jpg", ProductCategory.DRINK),
                    new Product("Red Bull 0,25l", "Hoher Koffeingehalt (32,0 mg/100 ml)", 5.00, null, "/images/products/drink-21.jpg", ProductCategory.DRINK),
                    new Product("Monster Energy 0,355l", "Hoher Koffeingehalt (36,0 mg/100 ml)", 5.00, null, "/images/products/drink-22.jpg", ProductCategory.DRINK),
                    new Product("Monster Zero 0,355l", "Hoher Koffeingehalt (36,0 mg/100 ml)", 5.00, null, "/images/products/drink-23.jpg", ProductCategory.DRINK),
                    new Product("Heineken 0,5l", "5% vol", 5.00, null, "/images/products/alcohol-1.jpg", ProductCategory.BRIEANDVINE),
                    new Product("Feldschlösschen 0,5l", "5% vol", 5.00, null, "/images/products/alcohol-2.jpg", ProductCategory.BRIEANDVINE),
                    new Product("Smirnoff ICE 0,275l", "4% vol", 6.00, null, "/images/products/alcohol-3.jpg", ProductCategory.BRIEANDVINE),
                    new Product("Dole du Valais 0,5l", "Rotwein, 13% vol", 18.00, null, "/images/products/alcohol-4.jpg", ProductCategory.BRIEANDVINE),
                    new Product("Nero d'Avola 0,75l", "Rotwein, 13% vol", 24.00, null, "/images/products/alcohol-5.jpg", ProductCategory.BRIEANDVINE),
                    new Product("Fendant du Valais 0,5l", "Weisswein, 13% vol", 18.00, null, "/images/products/alcohol-6.jpg", ProductCategory.BRIEANDVINE),
                    new Product("Rosé du Gamay 0,5l", "Roséwein, 13% vol", 18.00, null, "/images/products/alcohol-7.jpg", ProductCategory.BRIEANDVINE),
                    new Product("Vodka 0,7l", "38% vol", 36.00, null, "/images/products/alcohol-8.jpg", ProductCategory.BRIEANDVINE)
            );
            productRepository.saveAll(products);
        }
    }
}
