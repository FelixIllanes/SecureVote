function CreateVoteAlert({closeAlert}){

    return(
        <div className="modal_background_census">
            <div className="modal_container_delete">
                <div className="close_boton">
                    <button onClick={() => closeAlert(false)}>X</button>
                </div>
                <div className="modal_body">
                    <h2>Se creo la votacion con exito</h2>
                </div>
                <div className="delete_butons">
                    <button className='button_one' 
                    onClick={() => window.location.reload()} 
                    type="button">Aceptar</button>
                </div>
            </div>
        </div>
    )
}

export default CreateVoteAlert