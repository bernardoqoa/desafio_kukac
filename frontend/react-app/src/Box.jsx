import React, { useState } from 'react';
import "./Box.css"

function Box(props) {

    const [dadosInput, setDadosInput] = useState('')

    const handleMudancaInput = (e) => {
        setDadosInput(e.target.value)
    }

    const handleEnviarClick = () => {
        props.handleDadosInput(dadosInput)
    }

    return (
        <React.Fragment>
            <div className="box-container">
                <div className="box-name">
                    <span>{props.nome}</span>
                </div>
                <input value={dadosInput} onChange={handleMudancaInput} className="box-input" type={props.type}></input>
            </div>
        </React.Fragment>
    )
}

export default Box