package com.reggaeton.hackathon2019.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
public class Curso {

    @Id
    private long id;
    private LocalDate dataDePostagem;
    private String titulo;
    private String descricao;
    private int cargaHoraria;
    private Categoria categoria;
}
