import React, { Component } from "react";
import "./Formulario.css"
import LogoSquadG from "../../assents/img/LogoSquadGrande.svg"
class Formulario extends Component{
    render(){
        return(
            <section className="BackgroundFormularioFooter">
                <div class="Nome-Home4">
                    <section id="Contatos">Contatos</section>
                </div>
                <div className="Container">
                <div className="form">
                    <form className="">   
                    
                    <div>        
                        <label for="nomecompleto">Nome Completo</label>
                        <input type="text" id="nomecompleto" className="bordas" required />
    
                        <label for="email">Email</label>
                        <input type="email" id="email" className="bordas" required placeholder="seuemail@dominio.com"/>
    
                        <label for="telefone">Telefone</label>
                        <input type="tel" id="telefone" className="bordas" required placeholder="(XX) XXXXX-XXXX"/>
    
                        <label for="mensagem">Mensagem</label>
                        <textarea cols="120" rows="8" id="mensagem" className="bordas" required placeholder="Escreva sua mensagem"/>
                    </div>
                        <input type="submit" value="Enviar" className="enviar"/>
                    </form>
                </div>
                </div>
                    <div>
                    <footer>
                    <img src={LogoSquadG} alt="icone squad"/>
                    <p>&copy;Copyright SQUAD 15 - 2021</p>
                </footer>
                    </div>
            </section>
        )
    }
}
export default Formulario