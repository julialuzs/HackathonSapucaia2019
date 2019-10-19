package com.reggaeton.hackathon2019.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Necessidade {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "id_necessidade")
    private Long id;

    @Column(name = "valor_unitario")
    private double valorUnitario;

    private String descricao;
    private int quantidade;

    @Enumerated(EnumType.STRING)
    @Column(name = "status_necessidade")
    private StatusNecessidade status;

    @ManyToOne
    @JoinColumn(name = "id_instituicao")
    private Instituicao instituicao;
}
