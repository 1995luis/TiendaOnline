package com.example.CrudTienda.controlador;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;

public class ProbandoConexion {
    private final JdbcTemplate jdbcTemplate;

    public ProbandoConexion(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @GetMapping("/pruebaConexio")
    public String pruebaConexio() {
        try {
            jdbcTemplate.execute("select * from ");
            return "Prueba Conexion correcta";
        }
        catch (Exception e) {
            return "error sapo hp"+e.getMessage();
        }
    }
}
