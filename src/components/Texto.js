import { useState } from "react";

export function Texto(){
    var [texto, setTexto] = useState("Encendido");
    function switch2(){
        if(texto === "Apagado"){
            setTexto("Encendido");
        }
        else{
            setTexto("Apagado");
        }
    }
    return(
        <>
        <div>{texto}</div>
        <button onClick={switch2}>Apagar</button>
        </>
    )
}