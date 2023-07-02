import { useEffect, useState } from "react"
import EndVote from "../Components/VotacionPendiente/end_vote"
import { votacionesActivas } from "../services/vote"
import AlertEndModal from "../Components/VotacionPendiente/alert_endvote"
import VoteLoader from "../Components/VoteLoader"
export default function AdminHome() {

    const[votaciones, setVotaciones] = useState([])
    
    const[openModal, setOpenModal] = useState(false)
    const[id, setId] = useState()
    const[loaded, setLoaded] = useState(false)

    useEffect(() => {
        votacionesActivas().then(setVotaciones)
    },[])

    if(loaded){
        return <main><VoteLoader/></main>
    }
    return(
        <>
        {openModal && <AlertEndModal closeModal={setOpenModal} id={id}/>}
        <main>
           <div>
            <div className="info_cont">
                <h1>Inicio administrador</h1>
                <div className="info">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad commodi quasi sapiente exercitationem blanditiis voluptatibus dicta, facere reprehenderit molestias rem id? Consectetur consequuntur adipisci porro, quae itaque impedit cumque voluptatum?
                </div>
            </div>
            <div className="votacion_pendiente_lista">
                <h1>Votaciones en curso</h1>

            {votaciones?.map((votacion, idx) => (

                <EndVote key={idx} votacion={votacion} openModal={setOpenModal} setId={setId} setLoaded={setLoaded}/>

            ))}

            </div>
           </div>
        </main>
        </>
    )
}