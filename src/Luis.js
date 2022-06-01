import { Fragment } from "react"

 export function Luis(){ 

    let universidad="CESDE"
    let suma = 5+1
    return(
        <>
             <h1 className="text-center">Hola me llamo Luis Fernando</h1>
             <h2 className="text-center"> y soy tu amigo</h2>
             <h2 className="text-center"> y estudio en {universidad}</h2>
            <h3 className="text-center"> y la suma de 5 +1 es {suma}</h3>
        </> 
    )
}