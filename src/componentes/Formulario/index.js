import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {    

    const [nick, setNick] = useState('')
    const [elo, setElo] = useState('')
    const [funcao, setFuncao] = useState('')
    const [main, setMain] = useState('')

    const aoSubmit = (evento) => {
        evento.preventDefault()
        props.aoCadastrarPlayer({
            nick,
            elo,
            funcao,
            main
        })

        setNick("")
        setElo("")
        setFuncao("")
        setMain("")
    }


    return (
        <section className='formulario'>
            
            <form onSubmit={aoSubmit}>
                <h2>Preencha os dados do formulário</h2>
                <CampoTexto 
                    label="Seu Nick" 
                    placeholder="ex: Lurks1#dessa"
                    valor={nick}
                    aoAlterar={valor => setNick(valor)}>
                </CampoTexto>

                <CampoTexto 
                    label="Seu elo" 
                    placeholder="ex: Imortal 1"
                    valor={elo}
                    aoAlterar={valor => setElo(valor)}>
                </CampoTexto>               

                <ListaSuspensa
                    label="Sua função" 
                    lista={props.listaFuncoes}
                    valor={funcao}
                    aoAlterar={valor => setFuncao(valor)}>
                </ListaSuspensa>

                <ListaSuspensa 
                    label="Seu Main" 
                    lista={props.listaPersonagens}
                    valor={main}
                    aoAlterar={valor => setMain(valor)}>                    
                </ListaSuspensa>

                <Botao>Enviar dados</Botao>
            </form>
        </section>
    )
}

export default Formulario