-- Geração de Modelo físico
-- Sql ANSI 2003 - brModelo.



CREATE TABLE Plano (
valor DOUBLE,
descricao_plano VARCHAR(255),
id_plano BIGINT PRIMARY KEY
)

CREATE TABLE Crianca (
senha_crianca VARCHAR(50),
id_crianca BIGINT PRIMARY KEY,
matricula VARCHAR(50),
id_instituicao BIGINT
)

CREATE TABLE Aula (
conteudo VARCHAR(255),
titulo_aula VARCHAR(255),
anexo VARCHAR(255),
descricao_aula VARCHAR(255),
id_aula BIGINT PRIMARY KEY,
id_curso BIGINT
)

CREATE TABLE Usuario (
telefone_usuario VARCHAR(20),
email_usuario VARCHAR(50),
id_usuario BIGINT PRIMARY KEY,
senha_usuario VARCHAR(255),
nome_usuario VARCHAR(255),
id_plano BIGINT,
FOREIGN KEY(id_plano) REFERENCES Plano (id_plano)
)

CREATE TABLE Instituicao (
nome_instituicao VARCHAR(50),
telefone_instituicao VARCHAR(20),
endereco VARCHAR(50),
email_instituicao VARCHAR(50),
id_instituicao BIGINT PRIMARY KEY,
site VARCHAR(255),
senha_instituicao VARCHAR(50),
cnpj VARCHAR(50)
)

CREATE TABLE Necessidade (
quantidade BIGINT,
valor_unitario DOUBLE,
id_necessidade BIGINT PRIMARY KEY,
status VARCHAR(20),
descricao VARCHAR(255),
id_instituicao BIGINT,
FOREIGN KEY(id_instituicao) REFERENCES Instituicao (id_instituicao)
)

CREATE TABLE Curso (
id_curso BIGINT PRIMARY KEY,
valor_curso DOUBLE,
carga_horaria INT,
data DATE,
categoria VARCHAR(50),
titulo_curso VARCHAR(50),
descricao_curso VARCHAR(255)
)

CREATE TABLE comenta (
id_comentario BIGINT PRIMARY KEY,
conteudo_comentario VARCHAR(255),
id_usuario BIGINT,
id_aula BIGINT,
FOREIGN KEY(id_usuario) REFERENCES Usuario (id_usuario),
FOREIGN KEY(id_aula) REFERENCES Aula (id_aula)
)

CREATE TABLE compra (
id_compra BIGINT PRIMARY KEY,
id_usuario BIGINT,
id_curso BIGINT,
id_instituicao BIGINT,
FOREIGN KEY(id_usuario) REFERENCES Usuario(id_usuario),
FOREIGN KEY(id_curso) REFERENCES Curso(id_curso),
FOREIGN KEY(id_instituicao) REFERENCES Instituicao(id_instituicao),

)

CREATE TABLE aulas_assistidas (
id_aula BIGINT,
id_usuario BIGINT,
id_aulas_assistidas BIGINT PRIMARY KEY,
FOREIGN KEY(id_aula) REFERENCES Aula (id_aula)
FOREIGN KEY(id_usuario) REFERENCES Usuario(id_usuario)

ALTER TABLE Crianca ADD FOREIGN KEY(id_instituicao) REFERENCES Instituicao (id_instituicao)
ALTER TABLE Aula ADD FOREIGN KEY(id_curso) REFERENCES Curso (id_curso)
