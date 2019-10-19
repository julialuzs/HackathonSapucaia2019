-- Geração de Modelo físico
-- Sql ANSI 2003 - brModelo.

create database hackathon2019;
use hackathon2019;

drop database hackathon2019;

CREATE TABLE plano (
valor DOUBLE,
descricao_plano VARCHAR(255),
id_plano BIGINT AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE crianca (
senha_crianca VARCHAR(50),
id_crianca BIGINT AUTO_INCREMENT PRIMARY KEY,
matricula VARCHAR(50),
id_instituicao BIGINT
);

CREATE TABLE aula (
conteudo VARCHAR(255),
titulo_aula VARCHAR(255),
anexo VARCHAR(255),
descricao_aula VARCHAR(255),
id_aula BIGINT AUTO_INCREMENT PRIMARY KEY,
id_curso BIGINT
);

CREATE TABLE usuario (
telefone_usuario VARCHAR(20),
email_usuario VARCHAR(50),
id_usuario BIGINT AUTO_INCREMENT PRIMARY KEY,
senha_usuario VARCHAR(255),
nome_usuario VARCHAR(255),
id_plano BIGINT,
FOREIGN KEY(id_plano) REFERENCES plano (id_plano)
);

CREATE TABLE instituicao (
nome_instituicao VARCHAR(50),
telefone_instituicao VARCHAR(20),
endereco VARCHAR(50),
email_instituicao VARCHAR(50),
id_instituicao BIGINT AUTO_INCREMENT PRIMARY KEY,
site VARCHAR(255),
senha_instituicao VARCHAR(50),
cnpj VARCHAR(50)
);

CREATE TABLE necessidade (
quantidade int,
valor_unitario DOUBLE,
id_necessidade BIGINT AUTO_INCREMENT PRIMARY KEY,
status VARCHAR(20),
descricao VARCHAR(255),
id_instituicao BIGINT,
FOREIGN KEY(id_instituicao) REFERENCES instituicao (id_instituicao)
);

CREATE TABLE curso (
id_curso BIGINT AUTO_INCREMENT PRIMARY KEY,
valor_curso DOUBLE,
carga_horaria INT,
data DATE,
categoria VARCHAR(50),
titulo_curso VARCHAR(50),
descricao_curso VARCHAR(255)
);

CREATE TABLE comentario (
id_comentario BIGINT AUTO_INCREMENT PRIMARY KEY,
conteudo_comentario VARCHAR(255),
id_usuario BIGINT,
id_aula BIGINT,
FOREIGN KEY(id_usuario) REFERENCES usuario (id_usuario),
FOREIGN KEY(id_aula) REFERENCES aula (id_aula)
);

CREATE TABLE compra (
id_compra BIGINT AUTO_INCREMENT PRIMARY KEY,
id_usuario BIGINT,
id_curso BIGINT,
id_instituicao BIGINT,
FOREIGN KEY(id_usuario) REFERENCES usuario(id_usuario),
FOREIGN KEY(id_curso) REFERENCES curso(id_curso),
FOREIGN KEY(id_instituicao) REFERENCES instituicao(id_instituicao)
);

CREATE TABLE aulas_assistidas (
id_aula BIGINT,
id_usuario BIGINT,
id_aulas_assistidas BIGINT AUTO_INCREMENT PRIMARY KEY,
FOREIGN KEY(id_aula) REFERENCES aula (id_aula),
FOREIGN KEY(id_usuario) REFERENCES usuario(id_usuario)
);

ALTER TABLE crianca ADD FOREIGN KEY(id_instituicao) REFERENCES instituicao (id_instituicao);
ALTER TABLE aula ADD FOREIGN KEY(id_curso) REFERENCES curso (id_curso)
