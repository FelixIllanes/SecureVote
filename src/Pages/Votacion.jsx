import { useNavigate, useParams } from "react-router-dom";
import VoteCard from "../Components/VoteCard";
import { useEffect, useState } from "react";
import { votacionById } from "../services/general";
import { getIndexVote, indexVote, hashReturn, votar_normal } from "../services/Contract";
import { votar } from "../services/vote";
import VoteAlert from "../Components/VoteCard/vote_alert";

export default function Votacion() {

    const {id} = useParams()

    const[votacion, setVotacion] = useState()

    const[loaded, setLoaded] = useState(true)

    const[seleccion, setSeleccion] = useState({})
    const[lleno, setLleno] = useState(false)

    const[openModal, setOpenModal] = useState(false)

    const navigate = useNavigate()

    const redirectTo = () => {
        navigate('/User')
    }

    const votoChange = (evt) => {
        if(document.getElementById(evt.target.id).checked){
            setLleno(true)
            setSeleccion({
                ...seleccion,
                [evt.target.name]: evt.target.value
            })
        }
        if(!document.getElementById(evt.target.id).checked){
            var algo = evt.target.name
            setLleno(false)
            delete seleccion[algo]
        }
    }

    console.log(seleccion)

    const make_contract = async () =>{

        let tipo_voto = ''
        let candidato = 0

        if(Object.keys(seleccion).length > 1){
            tipo_voto = "N"
            candidato = "N"
        }
        if(Object.keys(seleccion).length === 0){
            tipo_voto = "B"
            candidato = "B"
        }
        if(Object.keys(seleccion).length === 1){
            for (let clave in seleccion){
                if (seleccion.hasOwnProperty(clave)){ 
                    candidato = Number(seleccion[clave])
                    tipo_voto = "P"
                }
            }
        }

        await votar_normal(tipo_voto, id, candidato)
        await getIndexVote()

        let hashValue = hashReturn()
        let indexValue = indexVote() 

        votar(Number(localStorage.getItem('userId')),
              Number(candidato),
              Number(id),
              hashValue,
              Number(indexValue),
              tipo_voto)
        setOpenModal(true)

    }

    useEffect(() => {
        const espera = async () => {
            votacionById(id).then(setVotacion)
            await new Promise(resolve => setTimeout(resolve,500));
            setLoaded(false)
        }
        espera()
    }, [])

    console.log(Object.keys(seleccion).length)

    
    if(loaded){
        return <main><div className="loader"></div></main>
    }

    return(
        <>
        {openModal && <VoteAlert redirectTo={redirectTo}/>}
        <main>
            <div className="container_vote_complete">
                <form action="">
                    <h1>Emision de voto</h1>
                    <div className="vote_container">
                        <VoteCard partido={votacion.partido1} votoChange={votoChange} />
                        <VoteCard partido={votacion.partido2} votoChange={votoChange} />
                        <VoteCard partido={votacion.partido3} votoChange={votoChange} />
                        <VoteCard partido={votacion.partido4} votoChange={votoChange} />
                    </div>
                    <button type="button" onClick={make_contract} className="button_one">Votar</button>
                </form>
            </div>
        </main>
        </>
    )
}