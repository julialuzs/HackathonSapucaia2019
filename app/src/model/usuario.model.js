export class Usuario {
    constructor(nome, email, senha, telefone) {
        this.nome = nome
        this.email = email
        this.senha = senha
        this.telefone = telefone
    }

    getLogin(){
        return this.login = {
            email: this.email,
            senha: this.senha
        }
    }
}
