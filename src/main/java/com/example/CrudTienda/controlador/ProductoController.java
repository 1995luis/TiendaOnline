package com.example.CrudTienda.controlador;

import com.example.CrudTienda.Entidad.EntidadProductos;
import com.example.CrudTienda.Servicios.ProductoServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
public class ProductoController {
    private final ProductoServicio productoServicio;

    @Autowired
    public ProductoController(ProductoServicio productoServicio) {
        this.productoServicio = productoServicio;
    }
    @GetMapping("/listaproductos")
    public String listarProductos(Model model) {
        try {
            List<EntidadProductos> productos = productoServicio.ObtenerProductos();
            model.addAttribute("productosFront", productos);
            return "productostock";
        }
        catch (Exception e) {
            return "error "+e.getMessage();
        }
    }
    @PostMapping("/guadarproductos")
    public String guardarProducto(@ModelAttribute EntidadProductos producto) {
        productoServicio.guadarProductos(producto);
        return "redirect:/listaproductos";
    }

    @GetMapping("/compraProduct")
    public String comprarProducto(Model model) {
        return "compra";
    }
}
