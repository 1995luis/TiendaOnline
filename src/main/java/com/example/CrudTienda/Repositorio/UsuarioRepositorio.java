package com.example.CrudTienda.Repositorio;

import com.example.CrudTienda.Entidad.EntidadUsuarios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepositorio extends JpaRepository<EntidadUsuarios, Long> {
}
