package com.example.CrudTienda.Repositorio;

import com.example.CrudTienda.Entidad.Roles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface IRolesRepositorio extends JpaRepository<Roles, Integer> {
    //metodo para buscar por su nombre por su base de datos
    Optional<Roles> findByName(String name);

}
