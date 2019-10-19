/* import axios from 'axios'
import { SweetAlert } from '../componentes/index'

const MSG_ERRO_PADRAO = "Não foi possivel completar a ação desejada."

const httpClient = baseURL => axios.create({
    timeout: 30000,
    headers:
    {
        'Content-Type': 'application/json'
    },
    baseURL
});

export class BaseService {

    constructor(baseURL) {
        this.client = httpClient(baseURL)

    }

    get(url, msgErro) {
        return this.client
            .get(url)
            .then(result => result)
            .catch(err => this.erro(err, msgErro))
    }

    post(url, data, msgErro) {
        return this.client.post(url, data)
            .then(result => this.sucesso(result))
            .catch(err => this.erro(err, msgErro || MSG_ERRO_PADRAO))
    }

    put(url, data, msgErro) {
        return this.client
            .put(url, data)
            .then(result => this.sucesso(result))
            .catch(err => this.erro(err, msgErro || MSG_ERRO_PADRAO))
    }

    delete(url, msgErro) {
        return this.client
            .delete(url)
            .then(result => this.sucesso(result))
            .catch(err => this.erro(err, msgErro || MSG_ERRO_PADRAO))
    }

    erro = (err, msgErro) => {
        if (!err.response) {
            SweetAlert.falhaDeConexaoComServidor()
        } else {
            SweetAlert.erro(msgErro)
        }

        return err
    }

    sucesso = result => {
        SweetAlert.sucesso()
        return result
    }
}
 */