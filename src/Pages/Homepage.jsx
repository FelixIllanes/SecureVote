import { useEffect, useState } from "react"
import HomePage from "../Components/HomePage"
import VotacionPendiente from "../Components/VotacionPendiente"
import { votacionesUsuario } from "../services/general"
export default function Homepage() {

    const[votaciones, setVotaciones] = useState([])

    useEffect(() => {
        const userId = window.localStorage.getItem('userId')
        votacionesUsuario(userId).then(setVotaciones)
    }, [])


    return(
        <main>
            <HomePage/>
            <div className="votacion_pendiente_lista">
                <h1>Votaciones pendientes</h1>

            {votaciones?.map((votacion, idx) =>(

                <VotacionPendiente key={idx} votacion={votacion}/>

            ))}

            </div>
        </main>
    )
}