import React, { Component } from 'react'
import './Footer.css'

export class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div id="pagamento">
                    <img class="pagamento" src="./img/pagamento/picpay.png"></img>
                    <img class="pagamento" src="./img/pagamento/paypal.png"></img>
                    <hr />
                    <h4 className="title">DoAmpharo</h4>
                </div>
            </div>
        );
    }
}