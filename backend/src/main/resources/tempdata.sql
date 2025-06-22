--INSERT INTO menu_item (name, description, price, image) VALUES
--('Beef Kebab Platter', 'A platter of perfection, traditional Turkish kebabs.', 15.99, '/images/menu-1.png'),
--('Fish & Chips', 'A British favoured cuisine, deep fried cod fish with crispy chips.', 14.99, '/images/menu-2.png'),
--('Beef Shawarma', 'A famous Middle Eastern street food, with perfectly sliced beef.', 6.99, '/images/menu-3.png'),
--('Oreo Cheesecake', 'A sweet cheesy dessert with black forest oreo creating a perfect symphony.', 7.99, '/images/menu-4.png'),
--('The Tandoori Platter', 'A chicken tandoori platter with traditional flavours.', 13.99, '/images/menu-5.png'),
--('Assorted Fruit Salad', 'An array of fruits combining the fresh and juicy flavors of an assorted mix.', 5.99, '/images/menu-6.png');
--
--
---- Kategorien
INSERT INTO category (id, name) VALUES
  (1, 'Pizza'),
  (2, 'Pide'),
  (3, 'Warme Snacks'),
  (4, 'Salate'),
  (5, 'Dessert'),
  (6, 'Getränke'),
  (7, 'Biere & Weine');
--
---- Zutaten (einmalig, ID beginnt bei 1)
--INSERT INTO ingredient (id, name) VALUES
--  (1, 'Tomatensauce'),
--  (2, 'Mozzarella'),
--  (3, 'Oregano'),
--  (4, 'Champignons'),
--  (5, 'Zwiebeln'),
--  (6, 'Feta'),
--  (7, 'Gorgonzola'),
--  (8, 'Schinken'),
--  (9, 'Pommes Frites'),
--  (10, 'Sardellen'),
--  (11, 'Kapern'),
--  (12, 'Meeresfrüchte'),
--  (13, 'frische Tomaten'),
--  (14, 'Oliven'),
--  (15, 'Basilikum'),
--  (16, 'Speck'),
--  (17, 'Ei'),
--  (18, 'Kebabfleisch'),
--  (19, 'scharfe Salami'),
--  (20, 'Peperoni'),
--  (21, 'Artischocken'),
--  (22, 'Thunfisch'),
--  (23, 'Crevetten'),
--  (24, 'Spinat'),
--  (25, 'Rindfleisch'),
--  (26, 'Knoblauch'),
--  (27, 'Kräuterbutter'),
--  (28, 'Salami'),
--  (29, 'Curry'),
--  (30, 'Pouletgeschnetzeltes'),
--  (31, 'Ananas'),
--  (32, '4 Käsesorten');
--
-- Kategorie: Pizza
INSERT INTO product (id, name, description, price, price_large, category_id) VALUES
  (1, 'Pizza Margherita', 'Tomatensauce, Mozzarella, Oregano', 15.50, 25.50, 1),
  (2, 'Pizza Funghi', 'Tomatensauce, Mozzarella, Champignons, Oregano', 16.50, 29.50, 1),
  (3, 'Pizza Cipolla', 'Tomatensauce, Mozzarella, Zwiebeln, Oregano', 16.50, 29.50, 1),
  (4, 'Pizza Feta', 'Tomatensauce, Mozzarella, Feta, Oregano', 17.50, 30.50, 1),
  (5, 'Pizza Gorgonzola', 'Tomatensauce, Mozzarella, Gorgonzola, Oregano', 17.50, 30.50, 1),
  (6, 'Pizza Prosciutto e Funghi', 'Tomatensauce, Mozzarella, Schinken, Champignons, Oregano', 19.50, 32.50, 1),
  (7, 'Pizza Prosciutto', 'Tomatensauce, Mozzarella, Schinken, Oregano', 18.50, 30.50, 1),
  (8, 'Pizza Pommes', 'Tomatensauce, Mozzarella, Pommes Frites, Oregano', 18.50, 30.50, 1),
  (9, 'Pizza Napoli', 'Tomatensauce, Mozzarella, Sardellen, Kapern, Oregano', 19.50, 32.50, 1),
  (10, 'Pizza Frutti di Mare', 'Tomatensauce, Mozzarella, Meeresfrüchte, Oregano', 21.50, 32.50, 1),
  (11, 'Pizza Hewina', 'Tomatensauce, Mozzarella, frische Tomaten, Oliven, Basilikum, Oregano', 18.50, 31.50, 1),
  (12, 'Pizza Lardée', 'Tomatensauce, Mozzarella, Speck, Ei, Oregano', 19.50, 31.50, 1),
  (13, 'Pizza Crottine', 'Tomatensauce, Mozzarella, Speck, Feta, Oregano', 19.50, 32.50, 1),
  (14, 'Pizza Kebab', 'Tomatensauce, Mozzarella, Kebabfleisch, Oregano', 19.50, 33.50, 1),
  (15, 'Pizza Diavola (scharf)', 'Tomatensauce, Mozzarella, scharfe Salami, Oregano', 18.50, 30.50, 1),
  (16, 'Pizza Quattro Stagioni', 'Tomatensauce, Mozzarella, Schinken, Champignons, Peperoni, Artischocken, Oregano', 21.50, 34.50, 1),
  (17, 'Pizza al Tonno', 'Tomatensauce, Mozzarella, Thunfisch, Zwiebeln, Oregano', 19.50, 34.50, 1),
  (18, 'Pizza Siciliana', 'Tomatensauce, Mozzarella, Schinken, Oliven, Ei, Peperoni, Oregano', 21.50, 36.50, 1),
  (19, 'Pizza Salame', 'Tomatensauce, Mozzarella, Salami, Oregano', 18.50, 30.50, 1),
  (20, 'Pizza Capricciosa', 'Tomatensauce, Mozzarella, Schinken, Champignons, Artischocken, Ei, Oregano', 21.50, 34.50, 1),
  (21, 'Pizza Crevette', 'Tomatensauce, Mozzarella, Crevetten, Oregano', 20.50, 33.50, 1),
  (22, 'Pizza Fulmine', 'Tomatensauce, Mozzarella, Spinat, Speck, Ei, Oregano', 20.50, 33.50, 1),
  (23, 'Pizza Prosciutto Gorgonzola', 'Tomatensauce, Mozzarella, Schinken, Gorgonzola, Oregano', 19.50, 33.50, 1),
  (24, 'Calzone (zugedeckt)', 'Tomatensauce, Mozzarella, Schinken, Ei, Champignons, Oregano', 20.50, NULL, 1),
  (25, 'Calzone Kebab (zugedeckt)', 'Tomatensauce, Mozzarella, Kebabfleisch, Zwiebeln, Oregano', 20.50, NULL, 1),
  (26, 'Pizza Hot''n Spicy (scharf)', 'Tomatensauce, Mozzarella, Zwiebeln, Peperoni, Rindfleisch, frische Tomaten, scharfe Gewürze, Oregano', 21.50, 36.50, 1),
  (27, 'Pizza Chicken Fajita', 'Tomatensauce, Mozzarella, Peperoni, Pouletgeschnetzeltes, Oregano', 20.50, 34.50, 1),
  (28, 'Pizza Argovia', 'Tomatensauce, Mozzarella, Kalbfleisch, Knoblauch, Kräuterbutter, Oregano', 20.50, 34.50, 1),
  (29, 'Pizza Rohrbach', 'Tomatensauce, Mozzarella, Kräuterbutter, Kalbfleisch, Peperoni, Knoblauch, Champignons, Oregano', 22.50, 35.50, 1),
  (30, 'Pizza Suhrental', 'Tomatensauce, Mozzarella, Salami, Zwiebeln, Champignons, Oregano', 20.50, 32.50, 1),
  (31, 'Pizza Stromboli (scharf)', 'Tomatensauce, Mozzarella, scharfe Salami, Zwiebeln, Sardellen, Artischocken, Peperoni, Champignons, Oregano', 23.50, 38.50, 1),
  (32, 'Pizza Svizzera', 'Tomatensauce, Mozzarella, Schinken, Salami, Speck, Oregano', 21.50, 36.50, 1),
  (33, 'Pizza Prosciutto Salami', 'Tomatensauce, Mozzarella, Schinken, Salami, Oregano', 19.50, 32.50, 1),
  (34, 'Pizza Cino (scharf)', 'Tomatensauce, Mozzarella, frische Tomaten, Peperoni, Champignons, Knoblauch, Kalbfleisch, scharfe Gewürze, Oregano', 22.50, 38.50, 1),
  (35, 'Pizza Hawaii', 'Tomatensauce, Mozzarella, Schinken, Ananas, Oregano', 19.50, 32.50, 1),
  (36, 'Pizza Taj Mahal', 'Tomatensauce, Mozzarella, Curry, Pouletgeschnetzeltes, Ananas, Oregano', 20.50, 34.50, 1),
  (37, 'Pizza Quattro Formaggi', 'Tomatensauce, Mozzarella, 4 Käsesorten, Oregano', 20.50, 34.50, 1),
  (38, 'Pizza Vegetaria', 'Tomatensauce, Mozzarella, Oregano und drei Zutaten nach Wahl', 18.50, 31.50  , 1),
  (39, 'Wunschpizza', 'Tomatensauce, Mozzarella, Oregano und vier Zutaten nach Wahl', 23.50, 38.50, 1);

-- Kategorie: Pide
INSERT INTO product (id, name, description, price, category_id) VALUES
  (100, 'Pide Gemüse', 'Mozzarella, Peperoni, Pilze und Oliven', 19.50, 2),
  (101, 'Pide Kalbfleisch', 'Mozzarella, Kalbfleisch, Zwiebeln, Peperoni und Kräuterbutter', 21.50, 2),
  (102, 'Pide Spinat', 'Mozzarella, Spinat und Ei', 19.50, 2),
  (103, 'Pide Kebab', 'Mozzarella und Kebabfleisch', 19.50, 2);

-- Kategorie: Warme Snacks
INSERT INTO product (id, name, description, price, category_id) VALUES
  (110, 'Chicken Nuggets Box (8 Stück)', 'Mit Pommes Frites und Sauce nach Wahl', 17.50, 3),
  (111, 'Chicken Nuggets Teller (8 Stück)', 'Serviert mit Pommes Frites, Salat und Sauce nach Wahl', 21.50, 3),
  (112, 'Pouletflügeli Teller (6 Stück)', 'Serviert mit Pommes Frites, Salat und Sauce nach Wahl', 22.50, 3),
  (113, 'Falafel Teller', 'Serviert mit Pommes Frites, Salat und Sauce nach Wahl', 19.50, 3),
  (114, 'Kebab Teller', 'Serviert mit Pommes Frites, Salat und Sauce nach Wahl', 22.50, 3),
  (115, 'Eglifilet Teller', 'Serviert mit Pommes Frites, Salat und Sauce nach Wahl', 22.50, 3),
  (116, 'Eglifilet Box', 'Mit Pommes Frites und Sauce nach Wahl', 18.50, 3),
  (117, 'Döner Box', 'Mit Sauce nach Wahl', 14.00, 3),
  (118, 'Döner Box XXL', 'Mit Sauce nach Wahl', 18.00, 3),
  (119, 'Pommes Frites', 'Mit Sauce nach Wahl', 8.00, 3),
  (120, 'Pommes Frites XXL', 'Mit Sauce nach Wahl', 12.00, 3),
  (130, 'Kebab im Taschenbrot', 'Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl', 13.00, 3),
  (131, 'Kebab im Fladenbrot', 'Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl', 14.00, 3),
  (132, 'Kebab Cheese im Taschenbrot', 'Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl', 15.00, 3),
  (133, 'Kebab Cheese im Fladenbrot', 'Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl', 16.00, 3),
  (134, 'Gyros im Taschenbrot', 'Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl', 15.00, 3),
  (135, 'Gyros im Fladenbrot', 'Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl', 16.00, 3),
  (136, 'Mega Kebab im Fladenbrot', 'Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl', 21.00, 3),
  (137, 'Falafel im Taschenbrot', 'Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl', 13.00, 3),
  (138, 'Falafel im Fladenbrot', 'Mit Tomaten, Salat, Zwiebeln, Rotkohl, Karotten und Sauce nach Wahl', 14.00, 3),
  (139, 'Kapsalon', 'Pommes Frites, Kebabfleisch, überbackener Käse und Sauce nach Wahl', 20.00, 3),
  (140, 'Hamburger', 'Mit Tomaten, Salat, Zwiebeln, Essiggurken und Sauce nach Wahl', 12.00, 3),
  (141, 'Doppel Hamburger', 'Mit Tomaten, Salat, Zwiebeln, Essiggurken und Sauce nach Wahl', 16.00, 3),
  (142, 'Cheeseburger', 'Mit Tomaten, Salat, Zwiebeln, Essiggurken und Sauce nach Wahl', 13.00, 3),
  (143, 'Doppel Cheeseburger', 'Mit Tomaten, Salat, Zwiebeln, Essiggurken und Sauce nach Wahl', 17.00, 3),
  (144, 'Triple Burger', 'Mit Tomaten, Salat, Zwiebeln, Essiggurken und Sauce nach Wahl', 19.00, 3),
  (145, 'Triple Cheeseburger', 'Mit Tomaten, Salat, Zwiebeln, Essiggurken und Sauce nach Wahl', 20.00, 3),
  (146, 'Schnitzelbrot', 'Mit Tomaten, Salat, Zwiebeln und Sauce nach Wahl', 13.00, 3);

-- Kategorie: Salate
INSERT INTO product (id, name, description, price, category_id) VALUES
  (150, 'Grüner Salat', NULL, 9.00, 4),
  (151, 'Gemischter Salat', NULL, 13.00, 4),
  (152, 'Thonsalat', NULL, 14.00, 4),
  (153, 'Pouletsalat', NULL, 15.00, 4),
  (154, 'Kebabsalat', NULL, 15.00, 4),
  (155, 'Falafelsalat', NULL, 14.00, 4);
-- Kategorie: Dessert
INSERT INTO product (id, name, description, price, category_id) VALUES
  (160, 'Tiramisu', NULL, 8.00, 5),
  (161, 'Schoggimousse', NULL, 8.00, 5),
  (162, 'Kokosnuss', NULL, 9.00, 5),
  (163, 'Limone Glace', NULL, 9.00, 5),
  (164, 'Coppa Spagnola (Kirsch, 100ml)', NULL, 10.00, 5),
  (165, 'Coppa Café (90ml)', NULL, 10.00, 5),
  (166, 'Coppa Stracciatella (100ml)', NULL, 10.00, 5),
  (167, 'Coppa Pistacchio (100ml)', NULL, 10.00, 5),
  (168, 'Kinderglace Panda (Vanille)', NULL, 7.00, 5),
  (169, 'Kinderglace Pingu (Schokolade)', NULL, 7.00, 5);

-- Kategorie: Getränke
INSERT INTO product (id, name, description, price, category_id) VALUES
  (170, 'Coca-Cola 0,5l', 'Enthält Koffein (10,0 mg/100 ml)', 4.00, 6),
  (171, 'Coca-Cola 1,5l', 'Enthält Koffein (10,0 mg/100 ml)', 7.00, 6),
  (172, 'Coca-Cola Zero 0,5l', 'Enthält Koffein (10,0 mg/100 ml)', 4.00, 6),
  (173, 'Coca-Cola Zero 1,5l', 'Enthält Koffein (10,0 mg/100 ml)', 7.00, 6),
  (174, 'Rivella Rot 0,5l', NULL, 4.00, 6),
  (175, 'Rivella Rot 1,5l', NULL, 7.00, 6),
  (176, 'Fanta 0,5l', NULL, 4.00, 6),
  (177, 'Fanta 1,5l', NULL, 7.00, 6),
  (178, 'Fanta Mango 0,5l', NULL, 4.00, 6),
  (179, 'Fanta Mango 1,5l', NULL, 7.00, 6),
  (180, 'Ice Tea Peach 0,5l', NULL, 4.00, 6),
  (181, 'Ice Tea Peach 1,5l', NULL, 7.00, 6),
  (182, 'Ice Tea Lemon 0,5l', 'Enthält Koffein (25,0 mg/100 ml)', 4.00, 6),
  (183, 'Ice Tea Lemon 1,5l', 'Enthält Koffein (25,0 mg/100 ml)', 7.00, 6),
  (184, 'Uludag Limonada 0,5l', NULL, 4.00, 6),
  (185, 'Uludag Orange 0,5l', NULL, 4.00, 6),
  (186, 'Apfelschorle 0,5l', NULL, 4.00, 6),
  (187, 'Valser Classic 0,5l', NULL, 4.00, 6),
  (188, 'Valser Classic 1,5l', NULL, 7.00, 6),
  (189, 'Valser Silence 0,5l', NULL, 4.00, 6),
  (190, 'Red Bull 0,25l', 'Hoher Koffeingehalt (32,0 mg/100 ml)', 5.00, 6),
  (191, 'Monster Energy 0,355l', 'Hoher Koffeingehalt (36,0 mg/100 ml)', 5.00, 6),
  (192, 'Monster Zero 0,355l', 'Hoher Koffeingehalt (36,0 mg/100 ml)', 5.00, 6);

  -- Kategorie: Biere & Weine
INSERT INTO product (id, name, description, price, category_id) VALUES
  (193, 'Heineken 0,5l', '5% vol', 5.00, 7),
  (194, 'Feldschlösschen 0,5l', '5% vol', 5.00, 7),
  (195, 'Smirnoff ICE 0,275l', '4% vol', 6.00, 7),
  (196, 'Dole du Valais 0,5l', 'Rotwein, 13% vol', 18.00, 7),
  (197, 'Nero d''Avola 0,75l', 'Rotwein, 13% vol', 24.00, 7),
  (198, 'Fendant du Valais 0,5l', 'Weisswein, 13% vol', 18.00, 7),
  (199, 'Rosé du Gamay 0,5l', 'Roséwein, 13% vol', 18.00, 7),
  (200, 'Vodka 0,7l', '38% vol', 36.00, 7);