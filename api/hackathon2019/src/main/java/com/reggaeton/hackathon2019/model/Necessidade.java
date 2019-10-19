package com.reggaeton.hackathon2019.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Necessidade {

    @Id
    @Column(name = "id_necessidade")
    private long id;

    @Column(name = "valor_unitario")
    private double valorUnitario;

    private String descricao;
    private int quantidade;

    @Enumerated(EnumType.STRING)
    private StatusNecessidade statusNecessidade;

    @ManyToOne
    @JoinColumn(name = "id_instituicao")
    private Instituicao instituicao;
}
