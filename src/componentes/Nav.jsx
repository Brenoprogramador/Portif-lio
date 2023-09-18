import './nav.css'
import imgProgrador from '../img/programa.png'

export default function Nav(){
    return(
        <>
        
        <nav className="nav-principal">
            <div className="nav-secundario">

                <div className='info-nome'>
                    <img className='img-programador' src={imgProgrador} alt="" />
                    <p>Breno</p>
                </div>

                <div className="infos">
                    <a href="#" className='infos-geral'>Home</a>
                    <a href="#" className='infos-geral'>Sobre</a>
                    <a href="#" className='infos-geral'>Habilidades</a>
                    <a href="#" className='infos-geral'>Educação</a>
                    <a href="#" className='infos-geral'>Projetos</a>
                    <a href="#" className='infos-geral'>Contato</a>
                </div>
            </div>
        </nav>
        
        
        </>
    )
}