import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { v4 as uuidv4 } from 'uuid';

const Formulario = (props) => {    

    const [nick, setNick] = useState('')
    const [elo, setElo] = useState('')
    const [funcao, setFuncao] = useState('')
    const [main, setMain] = useState('')
    const [novoPersonagem, setNovoPersonagem] = useState('')

    const aoSubmit = (evento) => {
        evento.preventDefault()
        props.aoCadastrarPlayer({
            id: uuidv4(),
            nick,
            elo,
            funcao,
            main
        })

        setNick("")
        setElo("")
        setFuncao("")
        setMain("")
        setNovoPersonagem("")        
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
            <form onSubmit={(evento => {
                evento.preventDefault()
                props.cadastrarNovoPersonagem({ nome: novoPersonagem})
                setNovoPersonagem("")
                setNick("")
                setElo("")
                setFuncao("")
                setMain("")
            })}>
                <h2>Preencha os dados do formulário para criar um novo personagem</h2>
                <CampoTexto 
                    label="Nome do personagem" 
                    placeholder="ex: Reaper, Genji, Xayah"
                    valor = {novoPersonagem}
                    aoAlterar={valor => setNovoPersonagem(valor)}>                   
                </CampoTexto>          

                <Botao>Criar Personagem</Botao>
            </form>
        </section>
    )
}

export default Formulario