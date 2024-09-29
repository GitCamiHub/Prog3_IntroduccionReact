
// import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter"
// import { MiPrimerComponent } from "./components/MiPrimerComponent/MiPrimerComponent"
// import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect"
// import { FormComponent } from "./components/FormComponent/FormComponent"
import { AppProduct } from "./components/AppProduct/AppProduct"


export const App = () => {




    return (
        /* Instanciamos nuestro componente para poder utilizarlo
       dentro de nuestra aplicación las veces que necesitemos. */

        /*Siempre hay que retornar un solo elemento, puede ser el Fragment(<></>)que es el padre, con varios hijos */
        <div style={{display:'flex', flexDirection:'column',gap:'2vh'}}>
            {/* <MiPrimerComponent
                text={"Texto desde propiedades"}
                color='red'
                fontSize={5} />


            <ComponentCounter />
            <ComponentUseEffect /> 
            <FormComponent/>*/}

            <AppProduct/>
        </div>

    )
}




