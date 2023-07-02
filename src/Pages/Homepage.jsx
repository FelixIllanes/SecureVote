import { useEffect, useState } from "react"
import HomePage from "../Components/HomePage"
import VotacionPendiente from "../Components/VotacionPendiente"
import { votacionesUsuario } from "../services/general"
import ReferenfumPendiente from "../Components/VotacionPendiente/referendumPendiente"
import { getAllReferendums, getReferendumsActivos } from "../services/referendum"
export default function Homepage() {

    const[votaciones, setVotaciones] = useState([])
    const[referendums, setReferendums] = useState([])

    useEffect(() => {
        const userId = window.localStorage.getItem('userId')
        votacionesUsuario(userId).then(setVotaciones)
        getAllReferendums(userId).then(setReferendums)
    }, [])


    return(
        <main>
            <HomePage/>
            <div className="user_vote_list_container">
                <div className="votacion_pendiente_lista">
                    <h1>Votaciones pendientes</h1>
                {votaciones?.map((votacion, idx) =>(

                    <VotacionPendiente key={idx} votacion={votacion}/>

                ))}
                </div>
                <div className="votacion_pendiente_lista">
                    <h1>Referendums pendientes</h1>

                    {referendums?.map((referendum, idx) => (
                        <ReferenfumPendiente key={idx} referendum={referendum}/>
                    ))}

                </div>
            </div>            
        </main>
    )
}