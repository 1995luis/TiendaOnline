package com.example.CrudTienda.Entidad;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "role")
public class Roles {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "id_role")
    private long idRole;
    @Column(nullable = false, unique = true)
    private String name;


}
