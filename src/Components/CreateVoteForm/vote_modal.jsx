import PadronList from "./paron_list"
function VoteModal({setOpenModal, padrones, setPadronSelect}){

    const handleClick = (id) => {
        setPadronSelect(id)
        setOpenModal()
    }
    return(
        <div className="modal_background_census">
            <form /* onSubmit={handleOnSubmit} */>
                <div className="modal_container_census">
                    <div className="close_boton">
                        <button onClick={() => setOpenModal(false)}>X</button>
                    </div>
                    <h2>Seleccione el padron</h2>
                    <div className="modal_body_">
                        <table className="table_vote_padron">
                            <thead>
                                <th>Nombre del padron</th>
                                <th></th>
                            </thead>

                        {padrones?.map((padron, idx) =>(
                            <PadronList key={idx} padron={padron} handleClick={handleClick}/>
                        ))}

                        </table>
                    </div>
                    <div className="modal_footer_census">
                        <button className='button_one' 
                        onClick={() => setOpenModal(false)} 
                        type="button">Cancelar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default VoteModal