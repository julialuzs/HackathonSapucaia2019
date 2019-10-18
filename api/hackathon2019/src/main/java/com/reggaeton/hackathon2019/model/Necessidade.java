package com.reggaeton.hackathon2019.model;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

public class Necessidade {

    private String necessidade;
    private int quantidade;

    @Enumerated(EnumType.STRING)
    private StatusNecessidade statusNecessidade;
}
