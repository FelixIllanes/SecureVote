function VoteAlert({redirectTo}){

    return(
        <div className="modal_background_census">
            <div className="modal_container_delete">
                <div className="close_boton">
                </div>
                <div className="modal_body_">
                    <h2>Se registro su voto de forma exitosa</h2>
                </div>
                <div className="delete_butons">
                    <button className='button_one' 
                    onClick={() => redirectTo()} 
                    type="button">Aceptar</button>
                </div>
            </div>
        </div>
    )
}

export default VoteAlert