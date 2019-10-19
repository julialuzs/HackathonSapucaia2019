import { BaseService } from '../base.service/base.service'
const URL_BACKEND = 'localhost:8081'
export class UsuarioService extends BaseService {

    constructor() {
        super(`${URL_BACKEND}/usuario`)
    }

    async adicionarUsuario(usuario) {
        const result = await super.post('', usuario)
        return result.data
    }

}
