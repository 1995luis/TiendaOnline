//package com.example.CrudTienda.Servicios;
//
//import com.example.CrudTienda.Entidad.Roles;
//import com.example.CrudTienda.Entidad.Usuario;
//import com.example.CrudTienda.Repositorio.IUsuarioRepositorio;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import java.util.Collection;
//import java.util.List;
//import java.util.stream.Collectors;
//
//@Service
//public class CustomUserService implements UserDetailsService {
//    private final IUsuarioRepositorio usuarioRepo;
//
//    @Autowired
//    public CustomUserService(IUsuarioRepositorio usuarioRepo) {
//        this.usuarioRepo = usuarioRepo;
//    }
//
//    public Collection<GrantedAuthority> mapToAuthorities(List<Roles> roles) {
//        return roles.stream().map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
//    }

//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        Usuario usuario = usuarioRepo.findByUsername(username).orElseThrow(() ->
//                new UsernameNotFoundException("Usuario no encontrado"));
//        return new User(usuario.getUsername(), usuario.getPassword(), mapToAuthorities(usuario.getRoles()));
//    }



//    private IUsuarioRepositorio usuarioRepo;
//    @Autowired
//    public CustomUserService(IUsuarioRepositorio usuarioRepo) {
//        this.usuarioRepo = usuarioRepo;
//    }
//    public Collection<GrantedAuthority> mapToAuthorities(List<Roles> roles) {
//        return roles.stream().map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
//    }//metodo para traernos una lista de autoridades por medio de una lista de roles
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        Usuario usuario = usuarioRepo.findByUsername(username).orElseThrow(()->
//                new UsernameNotFoundException("Usuario no encontrado"));
//        return new User(usuario.getUsername(), usuario.getPassword(), mapToAuthorities(usuario.getRoles()));
//    }
//}
