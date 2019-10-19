package com.reggaeton.hackathon2019.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "aulas_assistidas")
public class AulasAssistidas {

    @Id
    @Column(name = "id_aulas_assistidas")
    private long id;

    @ManyToOne
    @JoinColumn(name = "id_aula")
    private Aula aula;

    @ManyToOne
    @JoinColumn(name = "id_usuario")
    private Usuario usuario;

    //uma aula é assistida por N usuarios, cada usuario assiste n aulas
    //
}
