import { useEffect, useState } from "react"
import CreateVoteForm from "../Components/CreateVoteForm"
import VoteModal from "../Components/CreateVoteForm/vote_modal"
import { getAllPadrones } from "../services/padron"
import { getAllpartidos } from "../services/partido"
import PartidoList from "../Components/CreateVoteForm/partidoList"
export default function CreateVote() {
    
    const[body, setBody] = useState({})

    const[openModal, setOpenModal] = useState(false)

    const[padrones, setPadrones] = useState([])

    const[partidos, setPartidos] = useState([])

    useEffect(() => {
        getAllPadrones().then(setPadrones)
        getAllpartidos().then(setPartidos)
    },[])

    const[partidosSelect, setPartidosSelect] = useState({})
    const[lleno, setLleno] = useState(false)

    const partidoChange = (evt) => {
        if(document.getElementById(evt.target.id).checked){
            setLleno(true)
            setPartidosSelect({
                ...partidosSelect,
                [evt.target.name]: evt.target.value
            })
        }
        if(!document.getElementById(evt.target.id).checked){
            var algo = evt.target.name
            setLleno(false)
            delete partidosSelect[algo]
        }
    }

    const[padronSelect, setPadronSelect] = useState({})

    const handleChange = (evt) =>{
        setBody({
            ...body,
            [evt.target.name]: evt.target.value,
        })
    }

    const partidosBody = ["partido1","partido2","partido3","partido4"]


    const handleSubmit = (evt) => {
        if(Object.keys(partidosSelect).length === 4){
            const partidosData = {}
            let i = 1
            for (let clave in partidosSelect){

                if (partidosSelect.hasOwnProperty(clave)){
                    let partidovar = "partido" 
                    partidosData[partidovar + i]= partidosSelect[clave]
                    i+=1
                }
            }
            setBody({
                ...body,
                padron_electoral: padronSelect,
                ...partidosData
            })
        }else{
            console.log("hola")
        }
    }

    console.log(body)

    return(
        <>
        {openModal && <VoteModal setOpenModal={setOpenModal} padrones={padrones} setPadronSelect={setPadronSelect}/>}
        <main>
        <div className='create_vote_container'>
            <form className="create_user_form">
                <h1>Crear Votacion</h1>
                <div className='container_votecreateform'>
                    <div className='part_one'>
                        <div className="form_imputs">
                            <label> Nombre de votacion:</label>
                            <input className="form_mod_input"
                            type="text"
                            onChange={handleChange}
                            name="nombre"
                            autocomplete="off"/>
                        </div>
                        <div className="form_imputs">
                            <label> Fecha de inicio: </label>
                            <input className="form_mod_input" 
                            type="date"
                            onChange={handleChange} 
                            name="inicio_votacion"
                            autocomplete="off"/>
                        </div>
                        <div className="form_imputs">
                            <label> Fecha de finalización:</label> 
                            <input className="form_mod_input" 
                            type="date"
                            onChange={handleChange}  
                            name="fin_votacion"
                            autocomplete="off"/>
                        </div>
                        <div className="form_imputs">
                        <select className="vote_type"  onChange={handleChange}  name="tipo_votacion" id="type">
                            <option value="M" selected disabled>Seleccionar tipo</option>
                            <option value="M">Mayoria Absoluta</option>
                            <option value="N">Mayoria Simple</option>
                            <option value="P">Proporcional</option>
                        </select>
                        </div>
                        <div className="form_imputs">
                            <label> Seleccionar padron:</label>
                            <button type='button' onClick={() => setOpenModal(true)}>Seleccionar padron</button>
                        </div>
                    </div>
                    <div className='part_two'>
                        
                    {partidos?.map((partido, idx) => (

                       <PartidoList idx={idx} partido={partido} partidoChange={partidoChange}/>

                    ))}

                    </div>
                </div>
                    <div className="login_btn">
                        <button type="button" onClick={handleSubmit} className="button_one">Crear Votación</button>
                    </div>
                </form>
        </div>
        </main>
        </>    
    )
}