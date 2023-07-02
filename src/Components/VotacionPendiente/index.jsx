import { useNavigate } from 'react-router-dom';
import './votacion_pendiente.css'
function VotacionPendiente({votacion}) {
    
    const navigate = useNavigate();


    const{ id,nombre,tipo_votacion} = votacion
    
    const redirectTo = () => {
        navigate(`/User/Votacion/${id}`)
    }

    let typeV = "Mayoría absoluta"
    if(tipo_votacion === "N"){
        typeV = "Normal"
    }
    if(tipo_votacion === "P"){
        typeV = "Proporcional"
    }

    return(
        <div className="votacion_pendiente_container">
            <div className="votacion_info_home">
                <p>{typeV}</p>
                <p>{nombre}</p>
                <button className="button_one" onClick={redirectTo}>Votar ahora</button>
             </div>
        </div>
    )
}
export default VotacionPendiente