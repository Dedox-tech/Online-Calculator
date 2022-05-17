import React from "react";

class BotonCalculadoraNumero extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className = "border p-4 bg-slate-600" onClick = {this.props.clickNumero.bind(this, this.props.content)}> {this.props.content} </div>
        );
    }



}

export {BotonCalculadoraNumero};