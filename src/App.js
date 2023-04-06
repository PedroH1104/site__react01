import { useState } from "react";
import Formulario from "./componentes/Formulario";
import Header from "./componentes/Header";
import CampoFuncao from "./componentes/CampoFuncao";

function App() {

  const funcoes = [
    {
      nome:'Controlador',    
      corPrimaria:'#964B00',
      corSecundaria: '#D2B48C'
    },
    {
      nome:'Duelista',    
      corPrimaria:'#5e2129',
      corSecundaria: '#f08080'
    },
    {
      nome:'Iniciador',    
      corPrimaria:'#30503A',
      corSecundaria: '#b6d3b7'
    },
    {
      nome:'Sentinela',    
      corPrimaria:'#0000AA',
      corSecundaria: '#add8e6' 
    }
  ]

  const personagens = [
    {
        nome:'Astra'     
    },
    {
        nome:'Breach'     
    },
    {
        nome:'Brimstone'     
    },
    {
        nome:'Chamber'     
    },
    {
        nome:'Cypher'     
    },
    {
        nome:'Fade'     
    },
    {
        nome:'Gekko'     
    },
    {
        nome:'Jett'     
    },
    {
        nome:'Kay/o'     
    },
    {
        nome:'KillJoy'     
    },
    {
        nome:'Neon'     
    },
    {
        nome:'Omen'     
    },
    {
        nome:'Phoenix'     
    },
    {
        nome:'Raze'     
    },
    {
        nome:'Reyna'     
    },
    {
        nome:'Sage'     
    },
    {
        nome:'Skye'     
    },
    {
        nome:'Sova'     
    },
    {
        nome:'Viper'     
    },
    {
        nome:'Yoru'     
    }
  ] 

  const [players, setPlayers] = useState([])

  const aoNovoPlayerAdicionado = (player) => {    
    setPlayers([...players, player])    
  }

  return (
    <div className="App">
        <Header></Header>
        <Formulario listaFuncoes={funcoes} listaPersonagens={personagens} aoCadastrarPlayer={player => aoNovoPlayerAdicionado(player)}></Formulario>

        {funcoes.map(funcao => <CampoFuncao 
            key={funcao.nome} 
            nome={funcao.nome} 
            corPrimaria={funcao.corPrimaria} 
            corSecundaria={funcao.corSecundaria}
            players={players.filter(player => player.funcao === funcao.nome )}>        
        </CampoFuncao>)}
        
    </div>
  );
}

export default App;
