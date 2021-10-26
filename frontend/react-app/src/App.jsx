import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Boxes from './Boxes';
import Resposta from './Resposta'

function App() {

  const [userInfo, setUserInfo] = useState([
    {
        nome: "nome completo",
        cep: "00000000",
        logradouro: "logradouro",
        bairro: "bairro",
        localidade: "localidade",
        uf: "uf",
        ddd: "ddd",
        numDependentes: "num Dependentes",
        renda: "renda mesal"
    }
])

  const handleDadosInput = (nome, cep, logradouro, bairro, localidade, uf, ddd, numDependentes, renda) => {
    const newDadosInput = [{
      nome: nome,
      cep: cep,
      logradouro: logradouro,
      bairro: bairro,
      localidade: localidade,
      uf: uf,
      ddd: ddd,
      numDependentes: numDependentes,
      renda: renda
    }]
    setUserInfo(newDadosInput)
  }

  return (
    <Router>
      <Route path="/" exact render={()=>(
        <Boxes handleDadosInput={handleDadosInput}></Boxes>
      )}/>

      <Route path="/resposta" exact render={() => (
        <Resposta userInfo={userInfo}></Resposta>
      )}/>
    </Router>
  );
}
 
export default App;
