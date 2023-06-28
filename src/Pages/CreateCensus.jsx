import { useState } from "react"
import CreateCensusForm from "../Components/CreateCensus"
import Modal_Census from "../Components/CreateCensus/modal_census"
import { useUser } from "../hooks/useUser"
import { asignarUsuarios, createPadron } from "../services/padron"
export default function CreateCensus() {

    const[openModal, setOpenModal] = useState(false)

    const{users, updateUser, removeUser, focusUser, user} = useUser()

    const[body, setBody] = useState({})

    const handleChange = (evt) => {
        setBody({
            ...body,
            [evt.target.name]:evt.target.value,
        })
    }

    //Agarrando los usuarios que tengan check
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

    const[asigna2, setAsigna2] = useState({})

    

    const handleSubmit = (evt) =>{
        evt.preventDefault()
        if(lleno){
            createPadron(body).then(data =>{
                if(data.id !== null){
                    for (let clave in assign) {
                        if (assign.hasOwnProperty(clave)){
                            const usuarioAsign = {
                                ...asigna2,
                                ci_usuario: assign[clave],
                                id_padron: data.id,
                            }
                            asignarUsuarios(usuarioAsign).then(res => {
                                
                                setAssign({})
                                setOpenModal(false)
                                window.location.reload()
                            })
                        }
                    }
                }
            }).catch(err => console.log(err))
        }else{
            setAssign({})
        }
    }

    return(
        <>
        {openModal && <Modal_Census closeModal={setOpenModal} users ={users} userCheck={userCheck} handleSubmit={handleSubmit}/>}
        <main>
            <div className='create_census_container' id="create_census_container">
                <form className="create_census_form">
                <h1>Crear Padron</h1>
                    <div className="form_imputs">
                        <label className='label_text_census'> Nombre del padron:</label>
                        <input className="form_mod_input"
                        type="text"
                        onChange={handleChange}
                        name="nombre"
                        autocomplete="off"/>
                    </div>
                    <div className="login_btn">
                        <button type="button" onClick={() => setOpenModal(true)} className="button_one">Seleccionar usuarios</button>
                    </div>
                </form>
            </div>
        </main>
        </>
    )
}