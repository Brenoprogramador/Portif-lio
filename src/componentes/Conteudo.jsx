import './Conteudo.css'
import imgCss from '../img/css.png'
import imgJs from '../img/js.png'
import imgReact from '../img/react.png'
import imgHtml from '../img/hmtl-5.png'
import imgNode from '../img/node.png'
import fotoPessoal from '../img/fotoPessoal.jpeg'

export default function Conteudo (){
    return(
        <>
            <section className='container-principal'>
                <div className="texto-principal">
                    <p className='titulo-principal'>Olá</p>
                    <p className='subtitulo'>Me chamo Breno</p>

                    <p className='subtitulo'>Eu sou desenvolvedor web</p>
                </div>

                
                <div className="icones-total">
                    <img className='icones' src={imgCss} alt="" />
                    <img className='icones' src={imgJs} alt="" />
                    <img className='icones' src={imgHtml} alt="" />
                    <img className='icones' src={imgReact} alt="" />
                    <img className='icones'src={imgNode} alt="" />  
                </div>
                <button className='botaoContato'>Contate-me!</button>
            </section>
            <section className='container-principal secundario'>
                    <img className='fotoPessoal' src={fotoPessoal} alt="" />
                <div className="apresentacao">
                    <h1 className='tituloSobre'>Sobre mim</h1>
                    <p className='textoPrincipal'>Meu nome é Breno Nunes Souza, e tenho a grande paixão pela tecnologia, particularmente pelo desenvolvimento web. Hoje, gostaria de compartilhar com vocês um pouco sobre minha jornada até agora, minhas habilidades e minha busca pelo meu primeiro emprego no campo do desenvolvimento web.
                    Minha jornada me levou a me especializar em diversas tecnologias-chave. Uma das minhas maiores habilidades é o React, Javascript, HTML, CSS, Git, docker. 
                    </p>
                </div>
            </section>
            <section className='terceario'>
                <h1 className='tituloProjetos'>Projetos</h1>
                <div className="cardProjetos">
                    <ul>
                        <li>
                            <img className='imgProjetos' src="" alt="" />
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur facilis nemo quasi voluptate officiis reiciendis modi ad ea eaque exercitationem.
                        </li>
                        <li>
                            <img className='imgProjetos'  src="" alt="" />
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur facilis nemo quasi voluptate officiis reiciendis modi ad ea eaque exercitationem.
                        </li>
                        <li>
                            <img className='imgProjetos' src="" alt="" />
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur facilis nemo quasi voluptate officiis reiciendis modi ad ea eaque exercitationem.
                        </li>
                        <li>
                            <img className='imgProjetos' src="" alt="" />
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur facilis nemo quasi voluptate officiis reiciendis modi ad ea eaque exercitationem.
                        </li>
                    </ul>
                </div>
            </section>
            
        </>
    )
}