package com.reggaeton.hackathon2019.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Plano {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id_plano")
    private long id;

    private double valor;

    @Column(name = "descricao_plano")
    private String descricao;

}
