package com.example.CrudTienda.Entidad;

import jakarta.persistence.*;

@Entity
@Table(name = "productos")
public class EntidadProductos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombre;
    private String descripcion;
    private String precio;
    private String stock;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getPrecio() {
        return precio;
    }

    public void setPrecio(String precio) {
        this.precio = precio;
    }

    public String getStock() {
        return stock;
    }

    public void setStock(String stock) {
        this.stock = stock;
    }
}
