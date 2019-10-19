-- Geração de Modelo físic,
-- Sql ANSI 2003 - brModelo.


create database hackathon2019;
use hackathon2019;

CREATE TABLE plano (
valor DOUBLE NOT NULL,
descricao_plano VARCHAR(255) NOT NULL,
id_plano BIGINT AUTO_INCREMENT PRIMARY KEY NOT NULL
);

CREATE TABLE crianca (
senha_crianca VARCHAR(50) NOT NULL,
id_crianca BIGINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
matricula VARCHAR(50) NOT NULL,
id_instituicao BIGINT NOT NULL
);

CREATE TABLE aula (
conteudo VARCHAR(255) NOT NULL,
titulo_aula VARCHAR(255) NOT NULL,
anexo VARCHAR(255),
descricao_aula VARCHAR(255),
id_aula BIGINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
id_curso BIGINT NOT NULL
);

CREATE TABLE usuario (
telefone_usuario VARCHAR(20),
email_usuario VARCHAR(50) NOT NULL,
id_usuario BIGINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
senha_usuario VARCHAR(255) NOT NULL,
nome_usuario VARCHAR(255) NOT NULL,
id_plano BIGINT,
FOREIGN KEY(id_plano) REFERENCES plano (id_plano)
);

CREATE TABLE instituicao (
nome_instituicao VARCHAR(50) NOT NULL,
telefone_instituicao VARCHAR(20),
endereco VARCHAR(50) NOT NULL,
email_instituicao VARCHAR(50) NOT NULL,
id_instituicao BIGINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
site VARCHAR(255),
senha_instituicao VARCHAR(50) NOT NULL,
cnpj VARCHAR(50) NOT NULL
);

CREATE TABLE necessidade (
quantidade int NOT NULL,
valor_unitario DOUBLE NOT NULL,
id_necessidade BIGINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
status_necessidade VARCHAR(20),
descricao VARCHAR(255),
id_instituicao BIGINT NOT NULL,
FOREIGN KEY(id_instituicao) REFERENCES instituicao (id_instituicao)
);

CREATE TABLE curso (
id_curso BIGINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
valor_curso DOUBLE NOT NULL,
carga_horaria INT NOT NULL,
data DATE,
categoria VARCHAR(50) NOT NULL,
titulo_curso VARCHAR(50) NOT NULL,
descricao_curso VARCHAR(255) NOT NULL
);

CREATE TABLE comentario (
id_comentario BIGINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
conteudo_comentario VARCHAR(255) NOT NULL,
id_usuario BIGINT NOT NULL,
id_aula BIGINT,
FOREIGN KEY(id_usuario) REFERENCES usuario (id_usuario),
FOREIGN KEY(id_aula) REFERENCES aula (id_aula)
);

CREATE TABLE compra (
id_compra BIGINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
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
id_aulas_assistidas BIGINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
FOREIGN KEY(id_aula) REFERENCES aula (id_aula),
FOREIGN KEY(id_usuario) REFERENCES usuario(id_usuario)
);

ALTER TABLE crianca ADD FOREIGN KEY(id_instituicao) REFERENCES instituicao (id_instituicao);
ALTER TABLE aula ADD FOREIGN KEY(id_curso) REFERENCES curso (id_curso);
