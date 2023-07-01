function Referendum_pregunta() {
    return(
        <div className="card_container_ref">
            <div className="card_header">
                <div className="inf_card">
                    <h1>Nombre de la votacion</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt animi atque nostrum totam quae explicabo tempora reiciendis debitis aspernatur et voluptates molestiae fugit dicta adipisci, provident dolor doloremque, illo quasi?</p>
                </div>
            </div>
            <div className="card_checkbox_ref">
                <label class="container_checkbox">
                    <input type="checkbox" /* onChange={votoChange} value={candidato.id}  id={unPartido.id} *//>
                    <p>Si</p>
                </label>
                <label class="container_checkbox">
                    <input type="checkbox" /* onChange={votoChange} value={candidato.id}  id={unPartido.id} *//>
                    <p>No</p>
                </label>
           </div>
        </div>
    )
}
export default Referendum_pregunta