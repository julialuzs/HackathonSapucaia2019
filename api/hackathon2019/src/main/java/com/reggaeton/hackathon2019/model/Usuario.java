package com.reggaeton.hackathon2019.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Usuario {

    @Id
    @Column(name = "id_usuario")
    private long id;

    @Column(name="nome_usuario")
    private String nome;

    @Column(name="email_usuario")
    private String email;

    @Column(name="senha_usuario")
    private String senha;

    @Column(name="telefone_usuario")
    private String telefone;

    @ManyToOne
    @JoinColumn(name = "plano_id")
    private Plano plano;
}
