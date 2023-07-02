import { terminarVotacion } from "../../services/vote"

function EndVote({votacion, openModal, setId}) {
    
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

    return(
        <div className="votacion_pendiente_container">
            <div className="votacion_info_home">
                <p>{typeV}</p>
                <p>{nombre}</p>
                <button className="button_one" onClick={handleSubmit}>Finalizar Votacion</button>
             </div>
        </div>
    )
}
export default EndVote