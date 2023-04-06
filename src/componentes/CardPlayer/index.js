import './CardPlayer.css'

const CardPlayer = ({nick, elo, main, corDeFundo}) => {
    return (
        <div className='cardPlayer'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={(`./imagens/${main}.jpg`)} alt="Imagem do personagem"></img>                
            </div>
            <div className='rodape'>
                <h4>{nick}</h4>
                <h5>Rank: {elo}</h5>
            </div>
        </div>
    )
}

export default CardPlayer

