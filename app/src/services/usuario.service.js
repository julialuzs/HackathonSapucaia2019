import { BaseService } from "./base.service"
import swal from 'sweetalert2';

const URL_BACKEND = 'http://localhost:8081'
export class UsuarioService extends BaseService {

    constructor() {
        super(`${URL_BACKEND}/usuario`)
    }

    cadastrar(usuario) {

        return super.post('', usuario)
            .then(
                swal.fire("Sucesso!", "Usuário cadastrado com sucesso", "success")
            ).catch(
                (error) => {
                    swal.fire("Erro!", `${error}`, "error")
                    return Promise.reject()
                })
    }

}
