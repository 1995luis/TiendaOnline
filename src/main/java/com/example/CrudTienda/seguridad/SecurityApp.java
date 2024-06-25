package com.example.CrudTienda.seguridad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.HeadersConfigurer;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;



@Configuration
@EnableWebSecurity
public class SecurityApp {

//    @Autowired
//    private final CustomUserService customUserService;
//
//    public SecurityApp(CustomUserService customUserService) {
//        this.customUserService = customUserService;
//    }
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        http
//                .csrf(csrf -> csrf.disable())
//                .authorizeHttpRequests(authorize -> authorize
//                        .requestMatchers("/**").permitAll()
//                        .requestMatchers("/public/**").permitAll()
//                        .requestMatchers("/productosurl/**").hasAnyRole("USER", "ADMIN")
//                        .requestMatchers("/listaproductos/**", "/listausuarios/**").hasRole("ADMIN")
//                        .anyRequest().authenticated()
//                )
//                .formLogin(form -> form
//                        .loginPage("/login").permitAll()
//                )
//                .logout(logout -> logout
//                        .permitAll()
//                );
//
//        return http.build();
//    }
//
//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
//
//    @Bean
//    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
//        return authenticationConfiguration.getAuthenticationManager();
//    }
//
//    @Bean
//    public UserDetailsService userDetailsService() {
//        return customUserService;
//    }
      //seguir ensyando con este codigo

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeRequests(authorizeRequests -> authorizeRequests
                        .requestMatchers(new AntPathRequestMatcher("/registro/**")).permitAll()
                        .requestMatchers(new AntPathRequestMatcher("/login")).permitAll()
                        .requestMatchers(new AntPathRequestMatcher("/images/**")).permitAll()
                        .requestMatchers(new AntPathRequestMatcher("/css/**")).permitAll()
                        .requestMatchers(new AntPathRequestMatcher("/js/**")).permitAll()
                        .anyRequest().authenticated()
                )
                .formLogin(formLogin -> formLogin
                        .loginPage("/login")
                        .failureUrl("/login?error=true")
                        .permitAll()
                )
                .logout(logout -> logout
                        .logoutUrl("/logout")
                        .logoutSuccessUrl("/login?logout=true")
                        .permitAll()
                )
                .csrf(csrf -> csrf.disable())
                .headers(headers -> headers
                        .frameOptions(frameOptions -> frameOptions.disable())
                );

        return http.build();
    }

    @Bean
    UserDetailsService userDetailsService() {
        InMemoryUserDetailsManager userDetailsService = new InMemoryUserDetailsManager();
        UserDetails user = User.withUsername("luisAdmin").password(passwordEnconder().encode("78910")).authorities("read").build();
        UserDetails user2 = User.withUsername("kevin").password(passwordEnconder().encode("234")).authorities("read").build();
        userDetailsService.createUser(user);
        userDetailsService.createUser(user2);
        return userDetailsService;
    }

    @Bean
    BCryptPasswordEncoder passwordEnconder() {
        return new BCryptPasswordEncoder();
    }




}
