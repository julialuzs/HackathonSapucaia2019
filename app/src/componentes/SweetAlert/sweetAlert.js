import Swal from 'sweetalert2'

const COR_BOTAO = '#c62447'

export class SweetAlert {

    static sucesso() {
        Swal.fire({
            position: 'top-end',
            type: 'success',
            toast: true,
            showConfirmButton: false,
            text: 'Sucesso!',
            timer: 1500
        })
    }

    static falhaDeConexaoComServidor() {
        Swal.fire({
            type: 'error',
            confirmButtonColor: COR_BOTAO,
            title: 'Erro',
            text: 'Desculpe-nos, estamos com problemas de comunicação com nossos servidores. Por favor, tente mais tarde.'
        })
    }

    static erro(mensagem) {
        Swal.fire({
            type: 'error',
            confirmButtonColor: COR_BOTAO,
            title: 'Erro',
            text: mensagem
        })
    }

    static sucessoCadastro() {
        Swal.fire({
            type: 'success',
            confirmButtonColor: COR_BOTAO,
            title: 'Evento cadastrado com sucesso!',
        })
    }
}
