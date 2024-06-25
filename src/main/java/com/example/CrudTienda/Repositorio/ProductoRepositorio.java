package com.example.CrudTienda.Repositorio;

import com.example.CrudTienda.Entidad.EntidadProductos;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoRepositorio extends JpaRepository<EntidadProductos, Long> {
}
