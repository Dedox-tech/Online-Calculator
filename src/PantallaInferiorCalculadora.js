import React from "react";

class PantallaInferiorCalculadora extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className = "text-3xl pr-2 text-right"> {this.props.valorPantalla} </div>
        );
    }

}

export {PantallaInferiorCalculadora};