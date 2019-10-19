package com.reggaeton.hackathon2019.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;

@Entity
@Data
public class Necessidade {

    private String necessidade;
    private int quantidade;

    @Enumerated(EnumType.STRING)
    private StatusNecessidade statusNecessidade;
    
    @JoinColumn(name = "id_instituicao")
    private Instituicao instituicao;
}
