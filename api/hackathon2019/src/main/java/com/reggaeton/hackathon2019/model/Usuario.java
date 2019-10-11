package com.reggaeton.hackathon2019.model;

import javax.persistence.Entity;
import java.time.LocalDate;

@Entity
public class Usuario {

    private long id;
    private String nome;
    private String matricula;
    private String email;
    private LocalDate dataDeNascimento;

}
