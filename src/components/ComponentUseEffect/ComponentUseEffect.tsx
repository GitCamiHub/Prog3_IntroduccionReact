import { useEffect, useState } from "react"


export const ComponentUseEffect = () => {

    const [state, setState] = useState(false);

    /*useEffect se ejecuta una vez que el componente esta montado. Cuando se renderiza, se ejecuta. */
    useEffect(() => {
        console.log("Componente montado");

        /*Funcion para cuando se desmonta un componente */

        return () => {
            console.log("Componente desmontado");
        }
    }, []);

    useEffect(() => {
        console.log(state);
    }, [state]);


    return (
        <div>
            <p>{state ? "Es true" : "Es false"}</p>

            <button onClick={() => {
                setState(!state)
            }}>
                Cambiar estado
            </button>

        </div>
    )
}
