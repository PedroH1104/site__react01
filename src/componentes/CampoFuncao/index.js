import CardPlayer from '../CardPlayer'
import './CampoFuncao.css'

const CampoFuncao = (props) => {
    return (
        <section className='campoFuncao' style={{backgroundColor: props.corSecundaria}}>
            <input value={props.corPrimaria} onChange={evento => props.mudarCor(evento.target.value, props.id)} type='color' className='input-cor'></input>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='players'>
                {props.players.map( player => {                    
                    return (
                        <CardPlayer 
                            corDeFundo={props.corPrimaria}                              
                            id={player.id} key={player.nick} 
                            nick={player.nick} elo={player.elo} 
                            funcao={player.funcao} 
                            main={player.main} 
                            aoDeletar={props.aoDeletar}
                            favorito = {player.favorito}
                            aoFavoritar={props.aoFavoritar}>                        
                        </CardPlayer>
                    )
                })}
            </div>            
        </section>        
    )
}

export default CampoFuncao