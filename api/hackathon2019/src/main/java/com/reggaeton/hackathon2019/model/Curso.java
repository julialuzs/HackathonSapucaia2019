package com.reggaeton.hackathon2019.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
public class Curso {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "id_curso")
    private Long id;

    @Column(name = "data")
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataDePostagem;

    @Column(name = "titulo_curso")
    private String titulo;

    @Column(name = "descricao_curso")
    private String descricao;

    @Column(name = "carga_horaria")
    private int cargaHoraria;

    @Column(name = "valor_curso")
    private double valor;

    @Enumerated(EnumType.STRING)
    private Categoria categoria;
}
