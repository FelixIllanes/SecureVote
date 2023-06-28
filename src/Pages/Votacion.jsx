import { useParams } from "react-router-dom";
import VoteCard from "../Components/VoteCard";
import { useEffect, useState } from "react";
import { votacionById } from "../services/general";

export default function Votacion() {

    const {id} = useParams()

    const[votacion, setVotacion] = useState()

    const[loaded, setLoaded] = useState(true)

    const[seleccion, setSeleccion] = useState({})
    const[lleno, setLleno] = useState(false)

    const[body, setBody] = useState({})

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
                    <button className="button_one">Votar</button>
                </form>
            </div>
        </main>
    )
}