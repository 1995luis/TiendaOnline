package com.example.CrudTienda.Repositorio;

import com.example.CrudTienda.Entidad.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface IUsuarioRepositorio extends JpaRepository<Usuario, Long> {

    //Metodo para buscar un usuario mediante su nombre
    Optional<Usuario> findByUsername(String username);
    //metodo para poder verificar si un usuario existe eu una base de datos

    Boolean existsByUsername(String username);

}
