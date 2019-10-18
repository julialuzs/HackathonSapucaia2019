package com.reggaeton.hackathon2019.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class Usuario {

    @Id
    @Column(name = "idusuario")
    private long id;
    private String nome;
    private String email;
    private String telefone;
    private String senha;

}
