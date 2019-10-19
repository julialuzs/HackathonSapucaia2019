import { BaseService } from "./base.service"

const URL_BACKEND = 'localhost:8081'

export class AutenticacaoService extends BaseService {

    constructor() {
        super(`${URL_BACKEND}/autenticacao`)
    }

    async logar(loginRequest) {
        const result = await super.post('/login', loginRequest)
        return result.data
    }

}
