import React from "react";

function Button(props) {

    return (
        <button onClick={props.handleEnviarClick}>Enviar</button>
    )
}

export default Button