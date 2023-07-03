import { useEffect, useState } from "react"
import EndVote from "../Components/VotacionPendiente/end_vote"
import { votacionesActivas } from "../services/vote"
import AlertEndModal from "../Components/VotacionPendiente/alert_endvote"
import VoteLoader from "../Components/VoteLoader"
import EndVote2 from "../Components/VotacionPendiente/end_vote2"
import { getReferendumsActivos } from "../services/referendum"
import AlertEndModalRef from "../Components/VotacionPendiente/alert_endref"
export default function AdminHome() {

    const[votaciones, setVotaciones] = useState([])
    const[referendums, setReferendums] = useState([])
    const[openModal, setOpenModal] = useState(false)
    const[openModalRef, setOpenModalRef] = useState(false)
    const[id, setId] = useState()
    const[id2, setId2] = useState()
    const[loaded, setLoaded] = useState(false)

    useEffect(() => {
        votacionesActivas().then(setVotaciones)
        getReferendumsActivos().then(setReferendums)
    },[])

    if(loaded){
        return <main><VoteLoader/></main>
    }
    return(
        <>
        {openModal && <AlertEndModal closeModal={setOpenModal} id={id}/>}
        {openModalRef && <AlertEndModalRef closeModalRef={setOpenModalRef} id2={id2}/>}
        <main>
           <div>
            <div className="info_cont">
                <h1>Inicio administrador</h1>
                <div className="info">
                ¡Bienvenido al panel de administración de votaciones! Aquí podrás tener el control total sobre tus procesos electorales. Gestiona de manera eficiente todas las etapas, desde la configuración de las elecciones hasta la recopilación y análisis de los resultados. Simplifica el proceso de toma de decisiones y fomenta la participación democrática. Con nuestra plataforma, la votación nunca ha sido tan fácil y segura. ¡Comienza a construir un futuro democrático hoy mismo!
                </div>
            </div>
            <div className="votacion_pendiente_lista">
                <h1>Votaciones en curso</h1>

            {votaciones?.map((votacion, idx) => (

                <EndVote key={idx} votacion={votacion} openModal={setOpenModal} setId={setId} setLoaded={setLoaded}/>

            ))}

            </div>
            <div className="votacion_pendiente_lista">
                <h1>Referéndums en curso</h1>
                {referendums?.map((referendum, idx) => (
                    <EndVote2 key={idx} referendum={referendum} openModalRef={setOpenModalRef} setId2={setId2} setLoaded={setLoaded}/>
                ))}
            </div>
           </div>
        </main>
        </>
    )
}