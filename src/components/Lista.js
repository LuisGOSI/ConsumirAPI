import { useState } from "react";

export function Lista() {
    const [porcentaje, setPor] = useState(0);
    const porcentajes = ['Apagado','Encendido al 25%','Encendido al 50%','Encendido al 75%','Encendido al 100%' ];

    function avanzar() {
        if (porcentaje === porcentajes.length - 1) {
            setPor(0);
        } else {
            setPor(porcentaje + 1);
        }
    }

    function retroceder() {
        if (porcentaje=== 0) {
            setPor(0);
        } else {
            setPor(porcentaje - 1);
        }
    }

    function restablecer() {
        setPor(0);
    }

    return (
        <div>
            <p>El porcentaje actual es: {porcentajes[porcentaje]}</p>
            <button onClick={avanzar}>Siguiente</button>
            <button onClick={retroceder}>Anterior</button>
            <button onClick={restablecer}>Restablecer</button>
        </div>
    );
}
