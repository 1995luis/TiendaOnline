package com.example.CrudTienda.Servicios;


import com.example.CrudTienda.Entidad.EntidadProductos;
import com.example.CrudTienda.Repositorio.ProductoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class ProductoServicio {
    private ProductoRepositorio productoRepositorio;
    @Autowired
    public ProductoServicio(ProductoRepositorio productoRepositorio) {
        this.productoRepositorio = productoRepositorio;
    }
    public List<EntidadProductos> ObtenerProductos(){
        return productoRepositorio.findAll();
    }



    public EntidadProductos guadarProductos(EntidadProductos productos){
        return productoRepositorio.save(productos);
    }


    public EntidadProductos actuñizarProductos(long id, EntidadProductos productos){
        EntidadProductos productosActual = productoRepositorio.findById(id)
                .orElseThrow(()-> new NoSuchElementException("No se encontro el producto"));
        productosActual.setNombre(productos.getNombre());
        productosActual.setDescripcion(productos.getDescripcion());
        productosActual.setPrecio(productos.getPrecio());
        productosActual.setStock(productos.getStock());

        return productoRepositorio.save(productosActual);
    }

}
