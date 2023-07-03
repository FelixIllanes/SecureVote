import { useParams } from "react-router-dom";
import Referendum_pregunta from "../Components/VoteCard/pregunta_ref";
import { useEffect, useState } from "react";
import { getReferendumxId, votarReferendum } from "../services/referendum";
import { getIndexVoteRef, hashReturnRef, indexVoteRef, votar_referendum } from "../services/ContratoRef";
import AlertReferendum from "../Components/VoteCard/alertReferendum";

export default function Referendum() {

    const{id} = useParams()
    const[referendum, setReferendum] = useState([])
    const[lleno, setLleno] = useState(false)
    const[seleccion, setSeleccion] = useState({})
    const[openModal, setOpenModal] = useState(false)

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
    const make_contract = async () =>{

        let tipo_voto = ''

        if(Object.keys(seleccion).length > 1){
            tipo_voto = "N"
        }
        if(Object.keys(seleccion).length === 0){
            tipo_voto = "B"
        }
        if(Object.keys(seleccion).length === 1){
            for (let clave in seleccion){
                if (seleccion.hasOwnProperty(clave)){ 
                    tipo_voto = seleccion[clave]
                }
            }
        }

        await votar_referendum(tipo_voto, id)
        await getIndexVoteRef()

        let hashValue = hashReturnRef()
        let indexValue = indexVoteRef()

        votarReferendum(Number(localStorage.getItem('userId')),
                         Number(id),
                         hashValue,
                         Number(indexValue),
                         tipo_voto)
        setOpenModal(true)
    }

    useEffect(() => {
        getReferendumxId(id).then(setReferendum)
    },[])


    return(
        <>
        {openModal && <AlertReferendum closeAlert={setOpenModal}/>}
        <main>
            <div className="container_vote_complete_ref">
                <form action="">
                    <h1>Emision de voto</h1>
                    <div className="vote_container">
                        <Referendum_pregunta referendum={referendum} votoChange={votoChange}/>
                    </div>
                    <button type="button" className="button_one" onClick={make_contract}>Votar</button>
                </form>
            </div>
        </main>
        </>
    )
}