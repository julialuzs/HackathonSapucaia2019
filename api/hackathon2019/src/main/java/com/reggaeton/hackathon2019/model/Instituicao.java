package com.reggaeton.hackathon2019.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class Instituicao {

    @Id
    @Column(name = "id_instituicao")
    private long id;

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
}
