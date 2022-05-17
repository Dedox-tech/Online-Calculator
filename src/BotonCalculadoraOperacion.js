import React from "react";

class BotonCalculadoraOperacion extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className = "border p-4 bg-emerald-600" onClick = {this.props.clickOperacion.bind(this, this.props.content)}> {this.props.content} </div>
        );
    }

}

export {BotonCalculadoraOperacion};

