import CardPlayer from '../CardPlayer'
import './CampoFuncao.css'

const CampoFuncao = (props) => {
    return (
        <section className='campoFuncao' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='players'>
                {props.players.map( player => <CardPlayer corDeFundo={props.corPrimaria} key={player.nick} nick={player.nick} elo={player.elo} funcao={player.funcao} main={player.main}></CardPlayer>)}
            </div>
            
        </section>        
    )
}

export default CampoFuncao