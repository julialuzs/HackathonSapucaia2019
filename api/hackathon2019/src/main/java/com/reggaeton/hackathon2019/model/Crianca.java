package com.reggaeton.hackathon2019.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

@Entity
@Data
public class Crianca {

    @Id
    @Column(name = "id_crianca")
    private long id;

    @Column(name = "senha_crianca")
    private String senha;

    private String matricula;

    @JoinColumn(name = "id_instituicao")
    private Instituicao instituicao;
}
