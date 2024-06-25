package com.example.CrudTienda.controlador;

import com.example.CrudTienda.Entidad.EntidadUsuarios;
import com.example.CrudTienda.Servicios.UsuarioServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class UsuarioControlador {


    private final UsuarioServicio ServicioUsuario;
    @Autowired
    public UsuarioControlador(UsuarioServicio usuarioServicio) {
        this.ServicioUsuario = usuarioServicio;
    }
    //"/listausuarios" hay que aplicarla en TH:href enla plantilla de index
    @GetMapping("/listausuarios")
    public String mostrarUsuario(Model model) {
        try {
            List<EntidadUsuarios> usuarios = ServicioUsuario.obtenerTodosLosUsuaris();
            model.addAttribute("usuariosParaFront", usuarios);
 //esto me devolvera al la plantillas html
            return "crudusuario";
        }
        catch (Exception e) {
                return "error "+e.getMessage();
        }
    }
@PostMapping("/guardarusuarios")
public String guardarUsuario(@ModelAttribute EntidadUsuarios usuario) {
    ServicioUsuario.guardarUsuario(usuario);
    return "Productos";
}

    @PostMapping("/actualizarusuarios")
    public String ActualizarUsuario(@ModelAttribute EntidadUsuarios usuario) {
        ServicioUsuario.actualizarUsuario(usuario.getId(), usuario);
        return "redirect:/listausuarios";
    }
    @PostMapping("/eliminarusuarios")
    public String eliminarUsuario(@RequestParam long id) {
        ServicioUsuario.eliminarUsuario(id);
        return "redirect:/listausuarios";
    }


}
