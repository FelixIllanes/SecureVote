import { finalizarReferendum } from "../../services/referendum"

function AlertEndModalRef({closeModalRef, id2}){

    const handleSubmit = (evt) =>{
        finalizarReferendum(id2)
        window.location.reload()
    }

    return(
        <div className="modal_background_census">
            <div className="modal_container_delete">
                <div className="close_boton">
                    <button onClick={() => closeModalRef(false)}>X</button>
                </div>
                <div className="modal_body_endVote">
                    <h2>¿Desea finalizar esta votación?</h2>
                </div>
                <div className="delete_butons">
                    <button className='button_one' 
                    onClick={() => closeModalRef(false)} 
                    type="button">Cancelar</button>
                    <button className='button_one' 
                    type="button" onClick={handleSubmit}>Finalizar votacion</button>
                </div>
            </div>
        </div>
    )
}

export default AlertEndModalRef