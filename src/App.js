import React from "react";
import {evaluate} from "mathjs";
import "./App.css";
import {BotonCalculadoraNumero} from "./BotonCalculadoraNumero";
import {BotonCalculadoraOperacion} from "./BotonCalculadoraOperacion";
import {BotonCalculadoraIgual} from "./BotonCalculadoraIgual";
import {BotonCalculadoraDel} from "./BotonCalculadoraDel";
import {BotonCalculadoraAC} from "./BotonCalculadoraAC";
import {PantallaSuperiorCalculadora} from "./PantallaSuperiorCalculadora";
import {PantallaInferiorCalculadora} from "./PantallaInferiorCalculadora";

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {valorPantallaSuperior: "vacio", valorPantallaInferior: "0", flag: true};
    this.manejarClickGeneral = this.manejarClickGeneral.bind(this);
    this.manejarClickIgual = this.manejarClickIgual.bind(this);
    this.manejarClickDel = this.manejarClickDel.bind(this);
    this.manejarClickAC = this.manejarClickAC.bind(this);
  }

  manejarClickGeneral (miContent) {

    this.setState(function (previousState) {
      const newState = {};
      newState.flag = false;

      if (previousState.valorPantallaSuperior.length > 15) {
        newState.flag = previousState.flag;
        newState.valorPantallaSuperior = previousState.valorPantallaSuperior;
        newState.valorPantallaInferior = previousState.valorPantallaInferior;
      }

      else {

        if (previousState.valorPantallaSuperior === "vacio") {
          newState.valorPantallaSuperior = miContent;
        }
  
        else {
          newState.valorPantallaSuperior = previousState.valorPantallaSuperior + miContent;
        }

      }

      return newState;
  
    });

  }

  manejarClickIgual () {

    this.setState (function (previousState) {
      const newState = {};
      let miString = previousState.valorPantallaSuperior;

      const piRegex = /π/ig;
      const ansRegex = /Ans/ig;

      miString = miString.replace(piRegex, "3.14159").replace(ansRegex, previousState.valorPantallaInferior).replace("vacio","0");
      
      try {
        let miStringCalculado = evaluate(miString).toString();
        newState.valorPantallaInferior = miStringCalculado;
        newState.valorPantallaSuperior = "vacio";
        newState.flag = true;
      } catch (error) {
        newState.valorPantallaInferior = previousState.valorPantallaInferior
        newState.valorPantallaSuperior = previousState.valorPantallaSuperior
        newState.flag = previousState.flag;
      }

      return newState;
    });

  }

  manejarClickDel () {

    this.setState (function (previousState) {
      const newState = {};
      
      if (previousState.valorPantallaSuperior === "vacio") {
        newState.valorPantallaSuperior = previousState.valorPantallaSuperior;
      }

      else {

        if (previousState.valorPantallaSuperior.length === 1) {
          newState.valorPantallaSuperior = "vacio";
          newState.flag = true;
        }
        else {
          newState.valorPantallaSuperior = previousState.valorPantallaSuperior.slice(0, -1);
        }

      }

      return newState;
    });

  }

  manejarClickAC () {

    this.setState(function (previousState) {
      const newState = {};
      newState.valorPantallaSuperior = "vacio";
      newState.valorPantallaInferior = "0";
      newState.flag = true;
      return newState;
    });

  }

  render () {
    return (
      <div className = "flex h-screen text-2xl bg-indigo-400 text-white">

        <div className = "m-auto">

          <h1 className = "text-center text-3xl mb-5"> Calculadora Online </h1>

          <div className = "border-2 bg-slate-600 py-1">

            <PantallaSuperiorCalculadora valorPantalla = {this.state.valorPantallaSuperior} flagOcultar = {this.state.flag}/>
            <PantallaInferiorCalculadora valorPantalla = {this.state.valorPantallaInferior}/>

          </div>

          <div className = "columns-4 text-center border gap-0">

            <BotonCalculadoraAC content = "AC" miClick = {this.manejarClickAC}/>
            <BotonCalculadoraNumero content = "7" clickNumero = {this.manejarClickGeneral}/>
            <BotonCalculadoraNumero content = "4" clickNumero = {this.manejarClickGeneral}/>
            <BotonCalculadoraNumero content = "1" clickNumero = {this.manejarClickGeneral}/>
            <BotonCalculadoraNumero content = "0" clickNumero = {this.manejarClickGeneral}/>

            <BotonCalculadoraDel content = "DEL" miClick = {this.manejarClickDel}/>
            <BotonCalculadoraNumero content = "8" clickNumero = {this.manejarClickGeneral}/>
            <BotonCalculadoraNumero content = "5" clickNumero = {this.manejarClickGeneral}/>
            <BotonCalculadoraNumero content = "2" clickNumero = {this.manejarClickGeneral}/>
            <BotonCalculadoraNumero content = "π" clickNumero = {this.manejarClickGeneral}/>

            <BotonCalculadoraOperacion content = "/" clickOperacion = {this.manejarClickGeneral}/>
            <BotonCalculadoraNumero content = "9" clickNumero = {this.manejarClickGeneral}/>
            <BotonCalculadoraNumero content = "6" clickNumero = {this.manejarClickGeneral}/>
            <BotonCalculadoraNumero content = "3" clickNumero = {this.manejarClickGeneral}/>
            <BotonCalculadoraNumero content = "." clickNumero = {this.manejarClickGeneral}/>

            <BotonCalculadoraOperacion content = "*" clickOperacion = {this.manejarClickGeneral}/>
            <BotonCalculadoraOperacion content = "-" clickOperacion = {this.manejarClickGeneral}/>
            <BotonCalculadoraOperacion content = "+" clickOperacion = {this.manejarClickGeneral}/>
            <BotonCalculadoraOperacion  content = "Ans" clickOperacion = {this.manejarClickGeneral}/>
            <BotonCalculadoraIgual content = "=" miClick = {this.manejarClickIgual}/>

          </div>

          <p className = "mt-3 text-xl"> Diseñado y programado por Diego </p>

        </div>
        
      </div>
    );
  }

}

export default App;
