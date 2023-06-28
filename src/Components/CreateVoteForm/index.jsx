import './createvote.css'
function CreateVoteForm({setOpenModal}) {
    return(
        <div className='create_vote_container'>
            <form className="create_user_form">
                <h1>Crear Votacion</h1>
                <div className='container_votecreateform'>
                    <div className='part_one'>
                        <div className="form_imputs">
                            <label> Nombre de votacion:</label>
                            <input className="form_mod_input"
                            type="text"
                            /* onChange={handleChange}  */
                            name="votacion"
                            autocomplete="off"/>
                        </div>
                        <div className="form_imputs">
                            <label> Fecha de inicio: </label>
                            <input className="form_mod_input" 
                            type="date"
                            /* onChange={handleChange}  */ 
                            name="fechaini"
                            autocomplete="off"/>
                        </div>
                        <div className="form_imputs">
                            <label> Fecha de finalización:</label> 
                            <input className="form_mod_input" 
                            type="date"
                            /* onChange={handleChange}   */
                            name="lastname"
                            autocomplete="off"/>
                        </div>
                        <div className="form_imputs">
                            <label> Seleccionar padron:</label>
                            <button type='button' onClick={() => setOpenModal(true)}>Seleccionar padron</button>
                        </div>
                    </div>
                    <div className='part_two'>
                        <h3>partido electoral</h3>
                        <h3>partido electoral</h3>
                        <h3>partido electoral</h3>
                        <h3>partido electoral</h3>
                    </div>
                </div>
                    <div className="login_btn">
                        <button type="submit" /* onClick={handleSubmit} */ className="button_one">Crear Usuario</button>
                    </div>
                </form>
        </div>
    )
}
export default CreateVoteForm