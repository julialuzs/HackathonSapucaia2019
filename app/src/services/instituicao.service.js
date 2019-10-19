import { BaseService } from "./base.service"
import swal from 'sweetalert2';

const URL_BACKEND = 'http://localhost:8081'
export class InstituicaoService extends BaseService {

    constructor() {
        super(`${URL_BACKEND}/instituicao`)
    }

    cadastrar(instituicao) {

        return super.post('', instituicao)
            .then(
                swal.fire("Sucesso!", "Instituição cadastrado com sucesso", "success")
            ).catch(
                (error) => {
                    swal.fire("Erro!", `${error}`, "error")
                    return Promise.reject()
                })
    }

    buscarTodos() {
        return super.get()
            .then(() => Promise.resolve())
            .catch((error) => {
                    swal.fire("Erro!", `${error}`, "error")
                    return Promise.reject()
                })
    }

}
