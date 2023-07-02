function Referendum_pregunta({referendum, votoChange}) {

    const{id, nombre, pregunta} = referendum

    return(
        <div className="card_container_ref">
            <div className="card_header">
                <div className="inf_card">
                    <h1>{nombre}</h1>
                    <p>{pregunta}</p>
                </div>
            </div>
            <div className="card_checkbox_ref">
                <label className="container_checkbox">
                    <input id="1" type="checkbox" onChange={votoChange} value={"S"} name="tipo_voto1"/>
                    <p>Si</p>
                </label>
                <label className="container_checkbox">
                    <input id="2" type="checkbox" onChange={votoChange} value={"N"} name="tipo_voto2"/>
                    <p>No</p>
                </label>
           </div>
        </div>
    )
}
export default Referendum_pregunta