import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='listaSuspensa'>
            <label>{props.label}</label>
            <select required onChange={evento => props.aoAlterar(evento.target.value)} value={props.valor}>
                <option value=""></option>
                {props.lista.map(personagem => {
                    return <option key={personagem.nome}>{personagem.nome}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa


// {props.personagens.map(personagem => {
//     return <option key={personagem.nome}>{personagem.nome}</option>
// })}