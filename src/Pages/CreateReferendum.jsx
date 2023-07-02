import { useEffect, useState } from "react"
import { getAllPadrones } from "../services/padron"
import VoteModal from "../Components/CreateVoteForm/vote_modal"
import { crearReferendum } from "../services/referendum"
import CreateVoteAlert from "../Components/CreateVoteForm/createVoteAlert"

export default function CreateReferendum(){

    const[openModal, setOpenModal] = useState(false)
    const[padrones, setPadrones] = useState([])
    const[body, setBody] = useState({})

    const[openAlert, setOpenAlert] = useState(false)

    const[padronSelect, setPadronSelect] = useState({})

    useEffect(() => {
        getAllPadrones().then(setPadrones)
    },[])

    const handleChange = (evt) =>{
        setBody({
            ...body,
            [evt.target.name]: evt.target.value,
        })
    }
    const handleSubmit = () =>{
        const bodyEnviar = ({
            ...body,
            padron_electoral: padronSelect,
        })
        crearReferendum(bodyEnviar)
        setOpenAlert(true)
        
    }
    return(
        <>
        {openAlert && <CreateVoteAlert closeAlert={setOpenAlert} mensaje={"el referéndum"}/>}
        {openModal && <VoteModal setOpenModal={setOpenModal} padrones={padrones} setPadronSelect={setPadronSelect} />}
        <main>
            <div className="create_ref_container">
            <form>
                <h1>Crear un referéndum</h1>
                    <div className="form_imputs">
                        <label> Nombre de referéndum:</label>
                        <input className="form_mod_input"
                        type="text"
                        onChange={handleChange}
                        name="nombre"
                        autoComplete="off"/>
                    </div>
                    <div className="form_imputs">
                        <label> Pregunta del referendum:</label>
                        <input className="form_mod_input"
                        type="text"
                        onChange={handleChange}
                        name="pregunta"
                        autoComplete="off"/>
                    </div>
                    <div className="form_imputs">
                        <label> Fecha de inicio: </label>
                        <input className="form_mod_input" 
                        type="date"
                        onChange={handleChange}
                        name="inicio_referendum"
                        autoComplete="off"/>
                    </div>
                    <div className="form_imputs">
                        <label> Fecha de finalización:</label> 
                        <input className="form_mod_input" 
                        type="date"
                        onChange={handleChange}
                        name="fin_referendum"
                        autoComplete="off"/>
                    </div>
                    <div className="form_imputs">
                        <label> Seleccionar padron:</label>
                        <button type='button' onClick={() => setOpenModal(true)}>Seleccionar padron</button>
                    </div>
                    <div className="login_btn">
                        <button type="button"  onClick={handleSubmit} className="button_one">Crear Referéndum</button>
                    </div>
                </form>
            </div>
        </main>
        </>
    )
}