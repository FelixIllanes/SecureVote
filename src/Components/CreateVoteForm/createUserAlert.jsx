import { useNavigate } from "react-router-dom"

function CreateUserAlert({closeAlert}){

    const navigate = useNavigate()
    const redirectTo = () => {
        navigate('/')
    }

    return(
        <div className="modal_background_census">
            <div className="modal_container_delete">
                <div className="close_boton">
                    <button onClick={() => closeAlert(false)}>X</button>
                </div>
                <div className="modal_body">
                    <h2>Usuario creado de manera exitosa</h2>
                </div>
                <div className="delete_butons">
                    <button className='button_one' 
                    onClick={redirectTo} 
                    type="button">Aceptar</button>
                </div>
            </div>
        </div>
    )
}

export default CreateUserAlert