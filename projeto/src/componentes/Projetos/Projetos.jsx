import React, {Component} from "react";
import Pong from "../../assents/img/Pong.svg"
import Freeway from "../../assents/img/Freeway.svg"
import Barbearia from "../../assents/img/BarbeariaAlura.svg"
import Front from "../../assents/img/Front.svg"
import Formulário from "../../assents/img/Formulário.svg"
import Tarefas from "../../assents/img/Tarefas.svg"
import "./Projetos.css"
class Projetos extends Component{
    render(){
        return(
            <section className="fundo" id="Projetos">
                <section class="Nome-Home2">Projetos</section>
                    <div>
                        <div class="trabalhos">
                            <h2 className="titulo-esq">Pong</h2>
                            <section className="esquerda">
                                <p className="texto-esq">Pong teve uma importância fundamental na história do videgame.
                                Foi criado por Nolan Bushnell e Ted Dabney em 29 de novembro de 1972.</p>
                                <img className="img-esq" src={Pong} alt="Imagem do PingPong"/>
                            </section>    
                        </div> 
                        <div class="trabalhos">  
                            <h2 className="titulo-dir">Freeway</h2> 
                            <section className="direita">
                                <img className="img-dir" src={Freeway} alt="Imagem do Freeway"/>
                                <p className="texto-dir">Em Freeway, o jogador controla uma galinga que deve atravessar uma rodovia cheia de automóveis.Foi criado por David Crane em 1981.</p>
                            </section>    
                        </div>
                        <div class="trabalhos">
                            <h2 className="titulo-esq">Barbearia Alura</h2>
                            <section className="esquerda">
                                <p className="texto-esq">Site Criado em aulas assíncronas, para uma Barbearia fictícia, contém um sobre, localização, benefícios, produtos e contatos.</p>
                                <img className="img-esq" src={Barbearia} alt="Imagem do Barbearia"/>
                            </section>
                        </div>
                        <div class="trabalhos">
                            <h2 className="titulo-dir">Front-End</h2>
                            <section className="direita">
                                <img className="img-dir" src={Front} alt="Imagem do Front-End"/>
                                <p className="texto-dir">Página feita em aula assíncronas, sobre uma palestra que havia de ocorrer, nela contém nome dos palestrantes e um formulário para se increver.</p>
                            </section>    
                        </div>
                        <div class="trabalhos"> 
                            <h2 className="titulo-esq">Formulário</h2>
                            <section className="esquerda">
                                <p className="texto-esq">Formulário básico criado com React em aulas assíncronas, com todas as validações necessárias.</p>
                                <img className="img-esq" src={Formulário} alt="Imagem do Formulário"/>
                            </section>
                        </div>
                        <div class="trabalhos">   
                        <h2 className="titulo-dir">Bloco de Tarefas</h2>
                            <section className="direita"> 
                                <img className="img-dir" src={Tarefas} alt="Imagem das Tarefas"/>
                                <p className="texto-dir">Bloco de Tarefas feito com React, dando a possibilidade ao usuario de adicionar e apagar notas com categorias que ele mesmo pode colocar.</p>
                            </section>    
                        </div>   
                    </div>
            </section>
        )
    }
}
export default Projetos