package com.example.CrudTienda.Entidad;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "usuario")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario")
    private long idUsuario;
    private String username;
    private String password;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "usuario_roles",joinColumns =@JoinColumn(name = "usuario_id",
            referencedColumnName = "id_usuario")
    ,inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName ="id_role " ))

    private List<Roles>roles = new ArrayList<>();

}
