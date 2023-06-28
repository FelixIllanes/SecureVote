import { useEffect, useState } from "react"
import PoliticalForm from "../Components/PoliticalForm"
import PoliticalList from "../Components/PoliticalList"
import { getAllpartidos } from "../services/partido"
import PartyDeleteModal from "../Components/CreateVoteForm/party_delete_modal"
import { useParty } from "../hooks/useParty"
import { Await } from "react-router-dom"
export default function PoliticalParty() {

    const{partys, updatePartys, removeParty, focusParty, party} = useParty()
    const[openModal, setOpenModal] = useState(false)
    const[loaded, setLoaded] = useState(true)

    const[partidos, setPartidos] = useState([])

    useEffect(() => {
        getAllpartidos().then(setPartidos)
    }, [])

    return(
        <>
        {openModal && <PartyDeleteModal closeModal={setOpenModal} removeParty ={removeParty} party={party}/>}
        <main>
            <div className="political_party_page">
                <h1>Partidos políticos</h1>
                <div className="political_page">
                    <PoliticalForm/>
                    <div>
                        <table>
                            <thead>
                                <th>Nombre</th>
                                <th>Slogan</th>
                                <th>Sigla</th> 
                                <th></th>
                            </thead>

                            {partidos?.map((partido, idx) => (

                                <PoliticalList key={idx} partido={partido} openModal ={setOpenModal} focusParty ={focusParty}/>

                            ))}

                        </table>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}