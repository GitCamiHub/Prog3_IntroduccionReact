import { FC } from "react"

// Declaramos la interfaz acá porque es algo propio que va a recibir el componente
interface IPropsMiPrimerComponent{
text: string
color:string
fontSize ?: number // ? significa que no es obligatorio
}

// Componente: bloque de código reutilizable
// Props: parametros que recibe la funcion y usamos dentro del componente
export const MiPrimerComponent : 
FC<IPropsMiPrimerComponent> = ({
  text,
  color,
  fontSize,
}) => {
  return (
    <div style={{color:`${color}`, fontSize: `${fontSize || 1}rem`}}><p>{text}</p></div>
  )
};

// {fontSize || 1} Si no hay valor de fontSize por defecto pone 1rem