import { useNavigate } from 'react-router-dom';
import './votacion_pendiente.css'
function ReferenfumPendiente({referendum}) {
    
    const navigate = useNavigate();


    const{ id,nombre} = referendum 
    
    const redirectTo = () => {
        navigate(`/User/Referendum/${id}`)
    }

    return(
        <div className="votacion_pendiente_container_user">
            <div className="votacion_info_home_user">
                <p>Referendum</p>
                <p>{nombre}</p>
                <button className="button_one" onClick={redirectTo}>Votar ahora</button>
             </div>
        </div>
    )
}
export default ReferenfumPendiente