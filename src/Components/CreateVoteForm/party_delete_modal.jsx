import PadronList from "./paron_list"
function PartyDeleteModal({closeModal, removeParty, party}){

    const{id,nombre_partido, Slogan, Sigla} = party || {}

    const handleOnSubmit = (evt) => {
        evt.preventDefault()
        removeParty(id)
        closeModal()
        window.location.reload()
    }

    return(
        <div className="modal_background_census">
            <form onSubmit={handleOnSubmit}>
                <div className="modal_container_delete">
                    <div className="close_boton">
                        <button onClick={() => closeModal(false)}>X</button>
                    </div>
                    <div className="modal_body_">
                        <h2>¿Seguro que deseas eliminar al partido {nombre_partido}?</h2>
                    </div>
                    <div className="delete_butons">
                        <button className='button_one' 
                        onClick={() => closeModal(false)} 
                        type="button">Cancelar</button>
                        <button className='button_one' 
                        type="submit">Eliminar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PartyDeleteModal