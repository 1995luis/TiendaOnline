package com.example.CrudTienda.controlador;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@org.springframework.stereotype.Controller
public class Controller {
    @GetMapping("/")
    public String comienzo(Model model){
        return "index";
    }
    @GetMapping("/login")
    public String login(@RequestParam(value = "error", required = false) String error,
                        @RequestParam(value = "logout", required = false) String logout,
                        Model model) {
        if (error != null) {
            model.addAttribute("error", "Usuario o contraseña incorrectos.");
        }
        if (logout != null) {
            model.addAttribute("message", "Has cerrado sesión correctamente.");
        }
        return "login";
    }
    @RequestMapping("/registro")
    public String registro(Model model){
        return "register";
    }


    @RequestMapping("/equiposReturn")
    public String equipos(Model model) {
        return "equipos";
    }

    @RequestMapping("/productosurl")
    public String productos(Model model){
        return "productos";
    }
    
    @RequestMapping("/accesoriosReturn")
    public String accesorios(Model model){
        return "accesorios";
    }
    
    @RequestMapping("/altavozReturn")
    public String altavoz(Model model){
        return "altavoz";
    }
    
    @RequestMapping("/discosReturn")
    public String discos(Model model){
        return "discos";
    }
    
    @RequestMapping("/memoriaReturn")
    public String memoria(Model model){
        return "memoria";
    }
    
    
    
    
}
    
