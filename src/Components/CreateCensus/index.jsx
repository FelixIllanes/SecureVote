import './censusform.css'
function CreateCensusForm({openModal}) {
    return(
        <div className='create_census_container'>
            <form className="create_census_form">
                <h1>Crear Padron</h1>
                    <div className="form_imputs">
                        <label className='label_text_census'> Nombre del padron:</label>
                        <input className="form_mod_input"
                        type="text"
                        /* onChange={handleChange}  */
                        name="padron_name"
                        autocomplete="off"/>
                    </div>
                    <div className="form_imputs">
                        <label className='label_text_census'> Lista de usuarios: </label>
                        <button type='button' onClick={() => openModal(true)}>Agregar usuarios</button>
                    </div>
                    <div className="login_btn">
                        <button type="submit" /* onClick={handleSubmit} */ className="button_one">Crear Usuario</button>
                    </div>
                </form>
        </div>
    )
}
export default CreateCensusForm