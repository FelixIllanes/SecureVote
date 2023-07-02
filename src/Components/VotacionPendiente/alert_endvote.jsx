import { terminarVotacion } from "../../services/vote"
function AlertEndModal({closeModal, id}){

    const handleSubmit = (evt) =>{
        terminarVotacion(id)
        window.location.reload()
    }

    return(
        <div className="modal_background_census">
            <div className="modal_container_delete">
                <div className="close_boton">
                    <button onClick={() => closeModal(false)}>X</button>
                </div>
                <div className="modal_body_endVote">
                    <h2>¿Desea finalizar esta votación?</h2>
                </div>
                <div className="delete_butons">
                    <button className='button_one' 
                    onClick={() => closeModal(false)} 
                    type="button">Cancelar</button>
                    <button className='button_one' 
                    type="button" onClick={handleSubmit}>Finalizar votacion</button>
                </div>
            </div>
        </div>
    )
}

export default AlertEndModal