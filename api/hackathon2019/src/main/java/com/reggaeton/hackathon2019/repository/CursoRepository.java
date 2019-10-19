package com.reggaeton.hackathon2019.repository;

import com.reggaeton.hackathon2019.model.Curso;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CursoRepository extends CrudRepository<Curso, Long> {

    List<Curso> findAll();
}
