package com.reggaeton.hackathon2019.repository;

import com.reggaeton.hackathon2019.model.Instituicao;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface InstituicaoRepository extends CrudRepository<Instituicao, Long> {

    List<Instituicao> findAll();
}
