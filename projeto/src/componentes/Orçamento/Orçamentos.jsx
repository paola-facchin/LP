import React, { Component } from "react";
import "./Orçamentos.css"
import Luva from "../../assents/img/LuvaEMoeda.svg";

class Orçamento extends Component{
    render(){
        return(
            <section className = "orçamento">
                <div className = "backgroundOrçamento">
                    <div className = "sobreOrçamento">
                        <h1 className= "tituloOrçamento">Faça seu orçamento!</h1>
                        <p className = "fraseOrçamento">Caso tenha curtido a nossa Landing Page, nós do Squad15, ficaríamos agradecidos caso queira fazer um orçamento conosco, clique no botão abaixo para entrar em mais detalhes!</p>
                        <div className = "botao">
                            <button className = "botaoOrçamento"><a className="CA" href="#Contatos">clique aqui!</a></button>
                        </div>
                    </div>              
                </div>
            </section>
        )
    }
}
export default Orçamento