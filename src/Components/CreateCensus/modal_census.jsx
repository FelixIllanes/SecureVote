import './censusform.css'
import UsuarioCheck from './UsuariosCheck'
function Modal_Census({closeModal, users, userCheck, handleSubmit}){
 
    return(
        <div className="modal_background_census">
            <form /* onSubmit={handleOnSubmit} */>
                <div className="modal_container_census">
                    <div className="close_boton">
                        <button onClick={() => closeModal(false)}>X</button>
                    </div>
                    <h2>Selecciona los usuarios</h2>
                    <div className="modal_body_census">

                    {users?.map((user, idx) => (

                        <UsuarioCheck key={idx} user={user} userCheck={userCheck}/>

                    ))}
                    
                    </div>
                    <div className="modal_footer_census">
                        <button className='button_one' 
                        onClick={() => closeModal(false)}>Cancelar</button>
                        <button className='button_one' 
                        type="submit" onClick={handleSubmit}>Crear padron</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Modal_Census