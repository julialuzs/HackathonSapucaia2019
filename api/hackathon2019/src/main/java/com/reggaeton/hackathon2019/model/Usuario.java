package com.reggaeton.hackathon2019.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
@Data
public class Usuario {

    @Id
    @Column(name = "idusuario")
    private long id;

    @Column(name = "datadenascimento")
    private LocalDate dataDeNascimento;

    private String nome;
    private String matricula;
    private String email;

}
