import React,{ Component} from "react";
import Matheus from "../../assents/img/Matheus.svg"
import Paola from "../../assents/img/Paola.svg"
import Julio from "../../assents/img/Julio.svg"
import Insta from "../../assents/img/Instagram.svg"
import Git from "../../assents/img/Git.svg"
import WPP from "../../assents/img/WPP.svg"
import LKD from "../../assents/img/Linkedin.svg"

import "./Membros.css"
class Membros extends Component{  
    render(){
        return(
            <section className="PapelParede">
                <section className="Nome-Home" id="Equipe">Equipe</section>
                    <div className="Portfolio">
                        <div className="CardLeft">
                            <div className="Fotos">
                            <img className="backgroundFotos" src={Matheus} alt="Avatarzinho do Matheus"/>
                            </div>
                            <p className="Nome">Matheus</p>
                            <p className="Profissao">Desenvolvedor Front-end</p>
                            <p className="Usuario"><img className="Icons" src={LKD} alt="Icon do Linkedin"/>Matheus de Almeida</p>
                            <p className="Usuario"><img className="Icons" src={Insta} alt="Icon do Instagram"/>Mateusun_</p>
                            <p className="Usuario"><img className="Icons" src={Git} alt="Icon do Git"/>Mateusun1</p>
                            <p className="Numero"><img className="Icons" src={WPP} alt="Icon do Whatsapp"/>(54) 9 8158-2900</p>
                        </div>  
                        <div class="CardMeio">
                            <div className="Fotos">
                            <img className="backgroundFotos" src={Paola} alt="Avatarzinho da Paola"/>                          
                            </div>
                                <p class="Nome">Paola</p>
                                <p className="Profissao">Desenvolvedora Front-end</p>
                                <p className="Usuario"><img className="Icons" src={LKD} alt="Icon do Linkedin"/>paolafacchin</p>
                                <p className="Usuario"><img className="Icons" src={Insta} alt="Icon do Instagram"/>paola_facchin</p>
                                <p className="Usuario"><img className="Icons" src={Git} alt="Icon do Git"/>paola-facchin</p>
                                <p className="Numero"><img className="Icons" src={WPP} alt="Icon do Whatsapp"/>(54)99645-4109</p>
                        </div> 
                        <div class="CardRight">
                            <div className="Fotos">
                            <img className="backgroundFotos" src={Julio} alt="Avatarzinho do Julio"/>
                            </div>
                                <p class="Nome">Julio</p>
                                <p className="Profissao">Desenvolvedor Front-end</p>
                                <p className="Usuario"><img className="Icons" src={LKD} alt="Icon do Linkedin"/>Julio Boeno Dal Zotto</p>
                                <p className="Usuario"><img className="Icons" src={Insta} alt="Icon do Instagram"/>Juliobdz</p>
                                <p className="Usuario"><img className="Icons" src={Git} alt="Icon do Git"/>Juliodalzotto</p>
                                <p className="Numero"><img className="Icons" src={WPP} alt="Icon do Whatsapp"/>(51) 9 9181-9026</p>
                        </div>                   
                    </div>
            </section>
        )
    }
}
export default Membros