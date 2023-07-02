import { useEffect, useState } from "react"
import { partidoById } from "../../services/partido"
import "./voteCard.css"
import { getCadidatoxPartido } from "../../services/user"
function VoteCard({partido, votoChange}) {

    const[unPartido, setUnPartido] = useState()
    const[candidato, setCandidato] = useState()

    const[loaded, setLoaded] = useState(true)

    useEffect(() => {
        const espera = async () =>{
            partidoById(partido).then(setUnPartido)
            getCadidatoxPartido(partido).then(setCandidato)
            await new Promise(resolve => setTimeout(resolve,500))
            setLoaded(false)
        }
        espera()
    },[])


    if(loaded){
        return <div className="loader"></div>
    }

    return(
        <div className="card_container">
            <div className="card_header">
                <div className="inf_card">
                    <h1>{candidato.candidato.nombre} {candidato.candidato.apellido}</h1>
                </div>
                <img src="../../../logo192.png" alt="" />
                <p>{unPartido.Slogan}</p>
            </div>
            <div className="card_checkbox">
                <label className="container_checkbox">
                    <input type="checkbox" onChange={votoChange} value={candidato.candidato.ci} name={unPartido.Sigla} id={unPartido.id}/>
                    <p>Votar</p>
                </label>
           </div>
        </div>
    )
}
export default VoteCard