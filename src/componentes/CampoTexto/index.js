import './CampoTexto.css'

const CampoTexto = (props) => {    

    const aoDigitar = (evento) => {
        props.aoAlterar(evento.target.value)        
    }    

    return (
        <div className='campoTexto'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} required placeholder={props.placeholder}/> 
        </div>
    )
}

export default CampoTexto