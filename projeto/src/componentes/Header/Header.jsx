import React, {Component} from "react";
import LogoSquad15 from "../../assents/img/LogoSquad15.svg"
import "./Header.css"
class Header extends Component{
    render(){
        return(
            <section className="Header">
                <header>
                <div className="logo">
                    <img className="LogoSquad" src={LogoSquad15} alt="imagem do Squad15"/>
                    <nav>
                        <ul>
                            <li><a href="#Equipe">Equipe</a></li>
                            <li><a href="#Projetos">Projetos</a></li>
                            <li><a href="#Contatos">Contatos</a></li>
                        </ul>
                    </nav>
                </div>
                </header>
            </section>
        )
    }
}
export default Header;