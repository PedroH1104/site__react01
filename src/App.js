import { useState } from "react";
import Formulario from "./componentes/Formulario";
import Header from "./componentes/Header";
import CampoFuncao from "./componentes/CampoFuncao";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [funcoes, setFuncoes] = useState([
    {
        id: uuidv4(),
        nome:'Controlador',    
        corPrimaria:'#964B00',
        corSecundaria: '#D2B48C'
    },
    {
        id: uuidv4(),
        nome:'Duelista',    
        corPrimaria:'#5e2129',
        corSecundaria: '#f08080'
    },
    {
        id: uuidv4(),
        nome:'Iniciador',    
        corPrimaria:'#30503A',
        corSecundaria: '#b6d3b7'
    },
    {
        id: uuidv4(),
        nome:'Sentinela',    
        corPrimaria:'#0000AA',
        corSecundaria: '#add8e6' 
    }
  ])

  const [personagens, setPersonagens] = useState([
    {
        id: uuidv4(),
        nome:'Astra'             
    },
    {
        id: uuidv4(),
        nome:'Breach'     
    },
    {
        id: uuidv4(),
        nome:'Brimstone'     
    },
    {
        id: uuidv4(),
        nome:'Chamber'     
    },
    {
        id: uuidv4(),
        nome:'Cypher'     
    },
    {
        id: uuidv4(),
        nome:'Fade'     
    },
    {
        id: uuidv4(),
        nome:'Gekko'     
    },
    {
        id: uuidv4(),
        nome:'Jett'     
    },
    {
        id: uuidv4(),
        nome:'Kayo'     
    },
    {
        id: uuidv4(),
        nome:'KillJoy'     
    },
    {
        id: uuidv4(),
        nome:'Neon'     
    },
    {
        id: uuidv4(),
        nome:'Omen'     
    },
    {
        id: uuidv4(),
        nome:'Phoenix'     
    },
    {
        id: uuidv4(),
        nome:'Raze'     
    },
    {
        id: uuidv4(),
        nome:'Reyna'     
    },
    {
        id: uuidv4(),
        nome:'Sage'     
    },
    {
        id: uuidv4(),
        nome:'Skye'     
    },
    {
        id: uuidv4(),
        nome:'Sova'     
    },
    {
        id: uuidv4(),
        nome:'Viper'     
    },
    {
        id: uuidv4(),
        nome:'Yoru'     
    }
  ]) 

  const [players, setPlayers] = useState([
    {
        id: uuidv4(),
        favorito: true,
        nick:'Lurks1#pepeu',
        elo: 'Imortal 1',
        funcao: 'Iniciador',
        main: 'Sova'
    }, 
    {
        id: uuidv4(),
        favorito: false,
        nick:'Dessa#pepeu',
        elo: 'Platina 2',
        funcao: 'Iniciador',
        main: 'Fade'
    },
    {
        id: uuidv4(),
        favorito: true,
        nick:'Osiris#thelma',
        elo: 'Ascedente 2',
        funcao: 'Duelista',
        main: 'Reyna'
    },
    {
        id: uuidv4(),
        favorito: true,
        nick:'Snow#joab',
        elo: 'Imortal 2',
        funcao: 'Controlador',
        main: 'Astra'
    },
    {
        id: uuidv4(),
        favorito: true,
        nick:'Less#LLLL',
        elo: 'Radiant',
        funcao: 'Sentinela',
        main: 'KillJoy'
    },
    {
        id: uuidv4(),
        favorito: false,
        nick:'Aspas#LLLL',
        elo: 'Radiant',
        funcao: 'Duelista',
        main: 'Jett'
    },
    {
        id: uuidv4(),
        favorito: false,
        nick:'Pancada#Sentinels',
        elo: 'Radiant',
        funcao: 'Controlador',
        main: 'Omen'
    },
    {
        id: uuidv4(),
        favorito: false,
        nick: 'Viniliu#poze',
        elo: 'Ascedente 2',
        funcao: 'Sentinela',
        main: 'Chamber'
    }
  ])

  const aoNovoPlayerAdicionado = (player) => {    
    setPlayers([...players, player])    
  }

  function deletarPlayer(id){
    setPlayers(players.filter(player => player.id != id))
  }

  function mudarCorDaFuncao(cor, id) {
    setFuncoes(funcoes.map(funcao =>{
        if(funcao.id === id){
            funcao.corPrimaria = cor;
        }
        return funcao
    }));
  }

  function cadastrarNovoPersonagem(novoPersonagem){
    setPersonagens([...personagens, { ...novoPersonagem, id: uuidv4()}])
  }

  function resolverFavorito(id){    
    setPlayers(players.map(player => {
        if(player.id === id) player.favorito = !player.favorito;
        return player
    }))
  }

  return (
    <div className="App">
        <Header></Header>
        <Formulario
            cadastrarNovoPersonagem={cadastrarNovoPersonagem} 
            listaFuncoes={funcoes} 
            listaPersonagens={personagens} 
            aoCadastrarPlayer={player => aoNovoPlayerAdicionado(player)}>                
        </Formulario>

        {funcoes.map(funcao => 
            <CampoFuncao 
                id={funcao.id}
                key={funcao.nome} 
                nome={funcao.nome} 
                corPrimaria={funcao.corPrimaria} 
                corSecundaria={funcao.corSecundaria}
                players={players.filter(player => player.funcao === funcao.nome )}
                aoDeletar={deletarPlayer}
                mudarCor={mudarCorDaFuncao}
                aoFavoritar={resolverFavorito}>                           
            </CampoFuncao>)}
        
    </div>
  );
}

export default App;
