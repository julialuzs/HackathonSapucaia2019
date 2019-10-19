import { BaseService } from "./base.service"
import swal from 'sweetalert2';

const URL_BACKEND = 'https://localhost:8081'

export class AutenticacaoService extends BaseService {

    constructor() {
        super(`${URL_BACKEND}/autenticacao`)
    }

    logar(loginRequest) {
        return super.get(`/login?email=${loginRequest.email}&senha=${loginRequest.senha}`)
            .then()
            .catch(
                (error) => {
                    swal.fire("Erro!", `${error}`, "error")
                    return Promise.reject()
                })
    }

}
