import { BaseService } from '../base.service/base.service'
const URL_BACKEND = 'localhost:8081'

export class InstituicaoService extends BaseService {

    constructor() {
        super(`${URL_BACKEND}/instituicao`)
    }

    async adicionarInstituicao(instituicao) {
        const result = await super.post('', instituicao)
        return result.data
    }

}