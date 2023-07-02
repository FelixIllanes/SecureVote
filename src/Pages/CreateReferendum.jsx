import { useEffect, useState } from "react"
import { getAllPadrones } from "../services/padron"
import VoteModal from "../Components/CreateVoteForm/vote_modal"

export default function CreateReferendum(){

    const[openModal, setOpenModal] = useState(false)
    const[padrones, setPadrones] = useState([])

    const[padronSelect, setPadronSelect] = useState({})

    useEffect(() => {
        getAllPadrones().then(setPadrones)
    },[])

    return(
        <>
        {openModal && <VoteModal setOpenModal={setOpenModal} padrones={padrones} setPadronSelect={setPadronSelect} />}
        <main>
            <div className="create_ref_container">
            <form>
                <h1>Crear un referendum</h1>
                    <div className="form_imputs">
                        <label> Nombre de votacion:</label>
                        <input className="form_mod_input"
                        type="text"
                        /* onChange={handleChange} */
                        name="nombre"
                        autoComplete="off"/>
                    </div>
                    <div className="form_imputs">
                        <label> Fecha de inicio: </label>
                        <input className="form_mod_input" 
                        type="date"
                        /* onChange={handleChange}  */
                        name="inicio_votacion"
                        autoComplete="off"/>
                    </div>
                    <div className="form_imputs">
                        <label> Fecha de finalización:</label> 
                        <input className="form_mod_input" 
                        type="date"
                        /* onChange={handleChange}  */ 
                        name="fin_votacion"
                        autoComplete="off"/>
                    </div>
                    <div className="form_imputs">
                        <label> Pregunta del referendum:</label>
                        <input className="form_mod_input"
                        type="text"
                        /* onChange={handleChange} */
                        name="nombre"
                        autoComplete="off"/>
                    </div>
                    <div className="form_imputs">
                        <label> Seleccionar padron:</label>
                        <button type='button' onClick={() => setOpenModal(true)}>Seleccionar padron</button>
                    </div>
                    <div className="login_btn">
                        <button type="button" /* onClick={handleSubmit} */ className="button_one">Crear Referendum</button>
                    </div>
                </form>
            </div>
        </main>
        </>
    )
}