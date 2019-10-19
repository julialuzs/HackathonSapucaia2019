package com.reggaeton.hackathon2019.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
public class Curso {

    @Id
    @Column(name = "id_curso")
    private long id;

    @Column(name = "data")
    private LocalDate dataDePostagem;

    @Column(name = "titulo_curso")
    private String titulo;

    @Column(name = "descricao_curso")
    private String descricao;

    @Column(name = "carga_horaria")
    private int cargaHoraria;

    @Enumerated(EnumType.STRING)
    private Categoria categoria;
}
