import { useState } from "react"
import { crearUsuario } from "../services/user"
import CreateUserAlert from "../Components/CreateVoteForm/createUserAlert"

export default function CreateUser(){


    const[body, setBody] = useState({})
    const[openModal, setOpenModal] = useState(false)

    const handleChange = (evt) =>{
        setBody({
            ...body,
            [evt.target.name]: evt.target.value,
            is_superuser: false,
        })
    }
    const handleSubmit = (evt) => {
        evt.preventDefault()
        crearUsuario(body).then(data =>{
            if(data.status_code !== 201){
                console.log("Error al crear el usuario")
            }}).catch(err => console.log(err))
            setOpenModal(true)
    }

    return(
        <>
        {openModal && <CreateUserAlert closeAlert={setOpenModal}/>}
        <main>
            <div className="create_vote_container">
                <form >
                    <h1>Crear Usuario</h1>
                        <div className="create_user_data">
                            <div className="form_imputs">
                                <label> Ci:</label>
                                <input className="form_mod_input"
                                type="numeric"
                                onChange={handleChange}
                                name="ci"
                                autoComplete="off"/>
                            </div>
                            <div className="form_imputs">
                                <label> Nombre:</label>
                                <input className="form_mod_input"
                                type="text"
                                onChange={handleChange}
                                name="nombre"
                                autoComplete="off"/>
                            </div>
                            <div className="form_imputs">
                                <label> Apellido:</label>
                                <input className="form_mod_input"
                                type="text"
                                onChange={handleChange}
                                name="apellido"
                                autoComplete="off"/>
                            </div>
                        </div>
                        <div className="container_votecreateform">
                        <div className="form_imputs">
                            <label> Ciudad:</label>
                            <input className="form_mod_input"
                            type="text"
                            onChange={handleChange}
                            name="ciudad"
                            autoComplete="off"/>
                        </div>
                        <div className="form_imputs">
                            <label> Fecha de nacimiento:</label>
                            <input className="form_mod_input"
                            type="date"
                            onChange={handleChange}
                            name="fecha_nacimiento"
                            autoComplete="off"/>
                        </div>
                        <div className="form_imputs">
                            <label> Telefono:</label>
                            <input className="form_mod_input"
                            type="numeric"
                            onChange={handleChange}
                            name="telefono"
                            autoComplete="off"/>
                        </div>
                        <div className="form_imputs">
                            <label> Email:</label>
                            <input className="form_mod_input"
                            type="email"
                            onChange={handleChange}
                            name="email"
                            autoComplete="off"/>
                        </div>
                    </div>
                    <div className="form_imputs">
                        <label> Password:</label>
                        <input className="form_mod_input"
                        type="password"
                        onChange={handleChange}
                        name="password"
                        autoComplete="off"/>
                    </div>
                    <div className="login_btn">
                        <button type="button" onClick={handleSubmit} className="button_one">Crear Usuario</button>
                    </div>
                </form>
            </div>
        </main>
        </>
    )
}