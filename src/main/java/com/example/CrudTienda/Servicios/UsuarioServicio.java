package com.example.CrudTienda.Servicios;

import com.example.CrudTienda.Entidad.EntidadUsuarios;
import com.example.CrudTienda.Repositorio.UsuarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class UsuarioServicio {
    private final UsuarioRepositorio usuarioRepository;

    @Autowired
    public UsuarioServicio(UsuarioRepositorio usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    public List<EntidadUsuarios> obtenerTodosLosUsuaris(){
        return usuarioRepository.findAll();
    }



    public EntidadUsuarios guardarUsuario( EntidadUsuarios usuarios){
        return usuarioRepository.save(usuarios);
    }

    public EntidadUsuarios actualizarUsuario(long id, EntidadUsuarios usuarios){
        EntidadUsuarios usuarioExistente = usuarioRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("usuario no encontrado"));

        usuarioExistente.setNombre(usuarios.getNombre());
        usuarioExistente.setEmail(usuarios.getEmail());
        usuarioExistente.setTelefono(usuarios.getTelefono());
        usuarioExistente.setDireccion(usuarios.getDireccion());
        usuarioExistente.setCiudad(usuarios.getCiudad());
        usuarioExistente.setMetodo_pago(usuarios.getMetodo_pago());



        return usuarioRepository.save(usuarioExistente);
    }

    public void eliminarUsuario(long id){
        EntidadUsuarios usuarioExistente = usuarioRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("usuario no encontrado"));


        usuarioRepository.delete(usuarioExistente);
    }


}
