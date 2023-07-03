import { useEffect, useState } from "react"
import CreateVoteForm from "../Components/CreateVoteForm"
import VoteModal from "../Components/CreateVoteForm/vote_modal"
import { getAllPadrones } from "../services/padron"
import { getAllpartidos } from "../services/partido"
import PartidoList from "../Components/CreateVoteForm/partidoList"
import { crearVotacion } from "../services/vote"
import CreateVoteAlert from "../Components/CreateVoteForm/createVoteAlert"
export default function CreateVote() {
    
    const[body, setBody] = useState({})

    const[openModal, setOpenModal] = useState(false)
    const[openAlert, setOpenAlert] = useState(false)

    const[padrones, setPadrones] = useState([])

    const[partidos, setPartidos] = useState([])

    useEffect(() => {
        getAllPadrones().then(setPadrones)
        getAllpartidos().then(setPartidos)
    },[])

    const[openEscanio, setOpenEscanio] = useState('')

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
        if(evt.target.name === "tipo_votacion" && evt.target.value === "P"){
            setOpenEscanio('P')
        }
        if(evt.target.name === "tipo_votacion" && evt.target.value !== "P"){
            setOpenEscanio('')
        }
        setBody({
            ...body,
            [evt.target.name]: evt.target.value,
        })
    }

    const handleSubmit = (evt) => {
        if(Object.keys(partidosSelect).length === 4){
            const partidosData = {}
            let i = 1
            for (let clave in partidosSelect){

                if (partidosSelect.hasOwnProperty(clave)){
                    let partidovar = "partido" 
                    partidosData[partidovar + i]= Number(partidosSelect[clave])
                    i+=1
                }
            }
            const bodyEnviar = ({
                ...body,
                padron_electoral: padronSelect,
                ...partidosData
            })
            crearVotacion(bodyEnviar)
            setOpenAlert(true)
        }else{
            console.log("Debe seleccionar 4 partidos")
        }
    }


    return(
        <>
        {openModal && <VoteModal setOpenModal={setOpenModal} padrones={padrones} setPadronSelect={setPadronSelect}/>}
        {openAlert && <CreateVoteAlert closeAlert={setOpenAlert} mensaje={"la votación"}/>}
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
                            autoComplete="off"/>
                        </div>
                        <div className="form_imputs">
                            <label> Fecha de inicio: </label>
                            <input className="form_mod_input" 
                            type="date"
                            onChange={handleChange} 
                            name="inicio_votacion"
                            autoComplete="off"/>
                        </div>
                        <div className="form_imputs">
                            <label> Fecha de finalización:</label> 
                            <input className="form_mod_input" 
                            type="date"
                            onChange={handleChange}  
                            name="fin_votacion"
                            autoComplete="off"/>
                        </div>
                        <div className="form_imputs">
                        <select className="vote_type"  onChange={handleChange}  name="tipo_votacion" id="type">
                            <option value="M" selected disabled>Seleccionar tipo</option>
                            <option value="M">Mayoria Absoluta</option>
                            <option value="N">Mayoria Simple</option>
                            <option value="P">Proporcional</option>
                        </select>
                        </div>
                        <div className="form_imputs" style={{display: openEscanio ? "block" : "none"}}>
                            <label> Cantidad de escaños:</label> 
                            <input className="form_mod_input" 
                            type="number"
                            onChange={handleChange}  
                            name="escanio"
                            autoComplete="off"/>
                        </div>
                        <div className="form_imputs">
                            <label> Seleccionar padron:</label>
                            <button type='button' className="button_two" onClick={() => setOpenModal(true)}>Seleccionar padron</button>
                        </div>
                    </div>
                    <div className='part_two'>
                        
                    {partidos?.map((partido, idx) => (

                       <PartidoList key={idx} partido={partido} partidoChange={partidoChange}/>

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