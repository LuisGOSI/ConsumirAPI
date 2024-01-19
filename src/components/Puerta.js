import { useState } from "react";

export function Puerta() {
    var [estado, setPuerta] = useState("abierta");

    function abrir() {
        if (estado=== "cerrada") {
            setPuerta("abierta");
        }
    }
    function cerrar() {
        if (estado=== "abierta") {
            setPuerta("cerrada");
        }
    }

    return (
        <>
            <div>La puerta está {estado}</div>
            <div><img alt="Puerta" src={process.env.PUBLIC_URL + "/images/" + [estado] + ".png"}></img></div>
            <button onClick={abrir}>Abrir</button>
            <button onClick={cerrar}>Cerrar</button>
        </>
    );
}
