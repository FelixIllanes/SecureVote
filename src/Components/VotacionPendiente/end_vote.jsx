import { useEffect } from "react"
import { terminarVotacion, votacionAutomatica } from "../../services/vote"
import { useState } from "react"

function EndVote({votacion, openModal, setId, setLoaded}) {
    
    const{id, nombre, tipo_votacion} = votacion

    let typeV = "Mayoría absoluta"
    if(tipo_votacion === "N"){
        typeV = "Normal"
    }
    if(tipo_votacion === "P"){
        typeV = "Proporcional"
    }

    const handleSubmit = (evt) =>{
        setId(id)
        openModal(true)
    }

    const simulate = (evt) => {
        setLoaded(true)
        const espera = async () =>{
            /* votacionAutomatica(id) */
            await new Promise(resolve => setTimeout(resolve,4000))
            setLoaded(false)
        }
        espera()
    }

   
    return(
        <div className="votacion_pendiente_container">
            <div className="votacion_info_home">
                <p>{typeV}</p>
                <p>{nombre}</p>
                <button className="button_one" onClick={handleSubmit}>Finalizar Votacion</button>
                <button className="button_one" onClick={simulate}>Simular Votacion</button>
             </div>
        </div>
    )
}
export default EndVote