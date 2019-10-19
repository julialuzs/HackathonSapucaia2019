import axios from 'axios'
import { AutenticacaoService } from '../autenticacao/autenticacao.service'
import { SweetAlert } from '../../components/index'

const CLASS_LOADER = 'loader'

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
        this.renderizarLoader(this.client)

    }

    renderizarLoader(client) {
        client.interceptors.request.use(config => {
            clearTimeout(this.loaderTimeout)
            document.getElementsByClassName(CLASS_LOADER)[0].style.visibility = 'visible';
            return config;
        })

        client.interceptors.response.use(
            response => {
                this.loaderTimeout = setTimeout(() => {
                    document.getElementsByClassName(CLASS_LOADER)[0].style.visibility = 'hidden';
                }, 500)
                return response;
            },
            error => {
                this.loaderTimeout = setTimeout(() => {
                    document.getElementsByClassName(CLASS_LOADER)[0].style.visibility = 'hidden';
                }, 500)
                return Promise.reject(error);
            }
        )
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
