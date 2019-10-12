create database hackathon2019;
use hackathon2019;

create table usuario (
idusuario bigint auto_increment not null primary key,
nome varchar(200) not null,
datadenascimento date not null,
matricula varchar(10) not null,
email varchar(100) not null
);