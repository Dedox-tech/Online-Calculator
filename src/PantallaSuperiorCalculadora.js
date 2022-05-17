import React from "react";

class PantallaSuperiorCalculadora extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {

        let originalClassName = "text-xl pl-2";
        let extendedClassName;

        if (this.props.flagOcultar === true) {
            extendedClassName = originalClassName + " " +"invisible"
        }

        else {
            extendedClassName = originalClassName;
        }

        return (
            <div className = {extendedClassName}> {this.props.valorPantalla} </div>
        );
    }

}

export {PantallaSuperiorCalculadora};