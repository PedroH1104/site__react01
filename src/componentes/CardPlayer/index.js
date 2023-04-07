import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './CardPlayer.css'

const CardPlayer = ({id, nick, elo, main, corDeFundo, aoDeletar, favorito, aoFavoritar}) => {

    function favoritar () {
        aoFavoritar(id);
    }

    const propsFavorito = {
        size: 25, 
        onClick: favoritar
    }

    return (        
        <div className='cardPlayer'>
            <AiFillCloseCircle 
                size={30} 
                className="deletar" 
                onClick={() => aoDeletar(id)}>
            </AiFillCloseCircle>            
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={(`./imagens/${main}.jpg`)} alt="Imagem do personagem"></img>                
            </div>
            <div className='rodape'>
                <h4>{nick}</h4>
                <h5>Rank: {elo}</h5>
                <div className='favoritar'>
                    { favorito 
                    ? <AiFillHeart {...propsFavorito} color={corDeFundo}/> 
                    : <AiOutlineHeart {...propsFavorito}/>}
                </div>
            </div>
        </div>
    )
}

export default CardPlayer

