function AlertCensus({closeAlert}){

    return(
        <div className="modal_background_census">
            <div className="modal_container_delete">
                <div className="close_boton">
                    <button onClick={() => closeAlert(false)}>X</button>
                </div>
                <div className="modal_body_">
                    <h2>Se creo el padron con exito</h2>
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

export default AlertCensus