import React from "react";

class BotonCalculadoraAC extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className = "border p-4 bg-red-500" onClick = {this.props.miClick}> {this.props.content} </div>
        );
    }



}

export {BotonCalculadoraAC};