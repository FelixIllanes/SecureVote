import { useEffect, useState } from 'react'
import './politicalform.css'
import { asignarPartido, createParty } from '../../services/partido'
import Modal_Census from '../CreateCensus/modal_census'
import { useUser } from '../../hooks/useUser'
import { getUserSinPartido } from '../../services/user'

function PoliticalForm() {

    const[body, setBody] =useState({})
    const[users, setUsers] = useState({})
    const[openModal, setOpenModal] = useState(false)


    useEffect(() => {
        getUserSinPartido().then(setUsers)
    },[])

    const handleChange = (evt) => {
        setBody({
            ...body,
            [evt.target.name]: evt.target.value,
        })
    }
    const[assign, setAssign] = useState({})
    const[lleno, setLleno] = useState(false)

    const userCheck = (evt) => {
        if(document.getElementById(evt.target.id).checked){
            setLleno(true)
            setAssign({
                ...assign,
                [evt.target.name]: evt.target.value,
            })
        }
        if(!document.getElementById(evt.target.id).checked){
            var valor = evt.target.name
            setLleno(false)
            delete assign[valor]
        }
    }

    const handleSubmit = (evt) =>{
        evt.preventDefault()
        createParty(body).then(data => {
            if(data.id !== null){
                const usuarioAsign = {
                    id_partido: data.id,
                }
                for(let clave in assign){
                    if(assign.hasOwnProperty(clave)){
                        asignarPartido(usuarioAsign, assign[clave])
                    }
                }
            }
        })
        window.location.reload()
    }

    


    return(
        <>
        {openModal && <Modal_Census closeModal={setOpenModal} users={users} userCheck={userCheck} handleSubmit={handleSubmit}/>}
        <div className='political_form_create'>
            <form>
                <h2>Crear partido político</h2>
                <div className="imputs_politicalform">
                    <label> Nombre del partido:</label> <br />
                    <input className="form_mod_input"
                    type="text"
                    onChange={handleChange} 
                    name="nombre_partido"
                    autocomplete="off"/>
                </div>
                <div className="imputs_politicalform">
                    <label> Slogan:</label> <br />
                    <textarea className="form_mod_input"
                    type="text"
                    onChange={handleChange} 
                    name="Slogan"
                    autocomplete="off"
                    rows={3}/>
                </div>
                <div className="imputs_politicalform">
                    <label> Sigla:</label> <br />
                    <input className="form_mod_input"
                    type="text"
                    onChange={handleChange}  
                    name="Sigla"
                    maxLength={3}
                    autocomplete="off"/>
                </div>
                <div className="login_btn_politicalform">
                    <button type="button" onClick={() => setOpenModal(true)} className="button_one">Seleccionar Candidatos</button>
                </div>
            </form>
        </div>
        </>
    )
}
export default PoliticalForm