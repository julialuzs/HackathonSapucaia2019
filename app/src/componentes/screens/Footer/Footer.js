import React, { Component } from 'react'
import './Footer.css'

export class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div>
                    <p class="footer-items">Meios de pagamento</p>
                    <div id="pagamento">
                        <img class="pagamento" src="./img/pagamento/picpay.png" alt="PicPay"></img>
                        <img class="pagamento" src="./img/pagamento/paypal.png" alt="PayPal"></img>
                        <hr />
                        <h4 className="title">DoAmpharo™</h4>
                    </div>
                </div>

                <div id="footer-info">

                    <ul>
                        <li>
                            <a class="footer-items" href="#">Compartilhe seu conhecimento</a>
                        </li>
                        <li>
                            <a class="footer-items" href="#">Cursos mais visitados</a>
                        </li>
                        <li>
                            <a class="footer-items" href="#">Todas as Categorias</a>
                        </li>
                    </ul>

                    <ul class="footer-items">
                        <li>
                            <a class="footer-items" href="#">Sobre nós</a>
                        </li>
                        <li>
                            <a class="footer-items" href="#">Instituições</a>
                        </li>
                        <li>
                            <a class="footer-items" href="#">FAQ</a>
                        </li>

                    </ul>

                </div>
            </div>
        );
    }
}