import React from "react";
import './Resposta.css'
import {useHistory, useLocation} from "react-router-dom"

function Resposta(props) {

    const history = useHistory()
    const location = useLocation()

    const handleVoltarClick = () => {
        history.goBack()
    }

    return (
        
        <React.Fragment>
            <div className="resposta-container">
                <div className="button-box">
                    <button onClick={handleVoltarClick}>Voltar</button>
                </div>
                <div className="text-container">
                    <p>{`Nome: ${location.state.nome}`}</p>
                </div>
                <div className="text-container-end">
                    <div className="title"><p>Endereço Completo:</p></div>
                    <div className="info">
                        <p>{`CEP: ${location.state.cep}`}</p>
                        <p>{`Logradouro: ${location.state.logradouro}`}</p>
                        <p>{`Bairro: ${location.state.bairro}`}</p>
                        <p>{`Localidade: ${location.state.localidade}`}</p>
                        <p>{`UF: ${location.state.uf}`}</p>
                        <p>{`DDD: ${location.state.ddd}`}</p>
                    </div>
                </div>
                <div className="text-container">
                    <p>{`Renda per capita: ${location.state.rendaPerCapita}`}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Resposta