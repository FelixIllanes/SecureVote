import { redirect, useNavigate } from "react-router-dom"

function AlertReferendum({closeAlert}){

    const navigate = useNavigate()
    const redirectTo = () => {
        navigate("/User")
    }

    return(
        <div className="modal_background_census">
            <div className="modal_container_delete">
                <div className="close_boton">
                </div>
                <div className="modal_body">
                    <h2>Se creo el referendum con exito</h2>
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

export default AlertReferendum