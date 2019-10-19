package com.reggaeton.hackathon2019.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class AulasAssistidas {

    @Id
    @Column(name = "id_aulas_assistidas")
    private long id;

    @Column(name = "id_aula")
    private Aula aula;

    @Column(name = "id_usuario")
    private Usuario usuario;
}
