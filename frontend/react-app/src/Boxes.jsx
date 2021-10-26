import React, {useState} from "react";
import axios from  'axios'
import {useHistory} from 'react-router-dom'
import Box from './Box';
import Button from './Button'
import Titulo from './Titulo'
import './Boxes.css'

function Boxes({handleDadosInput}) {

    const history = useHistory()

    const [nome, setNome] = useState("")

    const [cep, setCep] = useState("")

    const [numDependentes, setNumDependentes] = useState("")

    const [renda, setRenda] = useState("")

    const handleEnviarClick = () => {
    
        axios.post('http://localhost:3010/enviar', {
            "cep": cep,
            "renda": renda,
            "numDependentes": numDependentes
        })
        .then(response => {history.push({
            pathname: "/resposta",
            state: {... response.data, nome: nome}
        })})  
    }

    return (
        <React.Fragment>
        <div className="Container">
          <Titulo></Titulo>
          <React.Fragment>
                <div className="box-container">
                    <div className="box-name">
                        <span>Nome:</span>
                    </div>
                    <input value={nome} onChange={(e)=>(setNome(e.target.value))} className="box-input" type="text"></input>
                </div>
            </React.Fragment>
            <React.Fragment>
                <div className="box-container">
                    <div className="box-name">
                        <span>CEP:</span>
                    </div>
                    <input value={cep} onChange={(e)=>(setCep(e.target.value))} className="box-input" type="text"></input>
                </div>
            </React.Fragment>
            <React.Fragment>
                <div className="box-container">
                    <div className="box-name">
                        <span>Núm. dependentes:</span>
                    </div>
                    <input value={numDependentes} onChange={(e)=>(setNumDependentes(e.target.value))} className="box-input" type="text"></input>
                </div>
            </React.Fragment>
            <React.Fragment>
                <div className="box-container">
                    <div className="box-name">
                        <span>Renda Mensal:</span>
                    </div>
                    <input value={renda} onChange={(e)=>(setRenda(e.target.value))} className="box-input" type="text"></input>
                </div>
            </React.Fragment>
          <Button handleEnviarClick={handleEnviarClick}></Button>
        </div>
        </React.Fragment>
    )
}

export default Boxes