import { useNavigate } from 'react-router-dom';
import './votacion_pendiente.css'
function VotacionPendiente({votacion}) {
    
    const navigate = useNavigate();


    const{ id, tipoDeVotacion} = votacion
    
    const redirectTo = () => {
        navigate(`/User/Votacion/${id}`)
    }

    return(
        <div className="votacion_pendiente_container">
            <div className="votacion_info_home">
                <p>{tipoDeVotacion}</p>
                <p>Votacion {id}</p>
                <button className="button_one" onClick={redirectTo}>Votar ahora</button>
             </div>
        </div>
    )
}
export default VotacionPendiente