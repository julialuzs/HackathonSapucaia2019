package com.reggaeton.hackathon2019.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Instituicao {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id_instituicao")
    private Long id;

    @Column(name = "telefone_instituicao")
    private String telefone;

    @Column(name = "nome_instituicao")
    private String nome;

    @Column(name = "senha_instituicao")
    private String senha;

    @Column(name = "email_instituicao")
    private String email;

    private String cnpj;
    private String endereco;
    private String site;

}
