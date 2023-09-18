import './Conteudo.css'
import imgCss from '../img/css.png'
import imgJs from '../img/js.png'
import imgReact from '../img/react.png'
import imgHtml from '../img/hmtl-5.png'
import imgNode from '../img/node.png'


export default function Conteudo (){
    return(
        <>
            <section className='principal'>
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
                    <img className='icones'src="" alt="" />
                    <img className='icones'src="" alt="" />
                    <img className='icones'src="" alt="" />
                    <img className='icones'src="" alt="" />   
                </div>

                <div className='fotoPessoal'>
                    <img src="" alt="" />
                </div>
            </section>
        </>
    )
}