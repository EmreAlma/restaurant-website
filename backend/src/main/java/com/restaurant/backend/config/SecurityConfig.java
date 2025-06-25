package com.restaurant.backend.config;

import com.restaurant.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private JwtRequestFilter jwtRequestFilter;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            // CSRF hâlâ kapalı kalabilir
            .csrf(csrf -> csrf.disable())

            // 1️⃣  H2 Console’a tam izin ver
            .authorizeHttpRequests(auth -> auth
                    .requestMatchers(
                        "/h2-console/**",          // EKLENDİ
                        "/api/auth/**",
                        "/api/products/**",
                        "/api/orders/**",
                        "/api/categories/**",
                        "/api/address/**"
                    ).permitAll()
                    .anyRequest().authenticated())

            // 2️⃣  Frame-Options’u sameOrigin yap
            .headers(headers -> headers
                    .frameOptions(frame -> frame.sameOrigin()))

            // 3️⃣  Stateless oturum ayarı ve JWT filtresi
            .sessionManagement(sess -> sess
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration cfg) throws Exception {
        return cfg.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
