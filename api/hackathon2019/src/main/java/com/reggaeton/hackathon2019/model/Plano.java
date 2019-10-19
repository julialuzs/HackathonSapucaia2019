package com.reggaeton.hackathon2019.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class Plano {

    @Id
    @Column(name = "id_plano")
    private long id;

    private double valor;

    @Column(name = "descricao_plano")
    private String descricao;

}
