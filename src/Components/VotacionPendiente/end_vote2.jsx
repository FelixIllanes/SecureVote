import { referendumAutomatico } from "../../services/referendum"

function EndVote2({referendum,openModalRef, setId2, setLoaded}) {
    
    const{id, nombre, tipo_votacion} = referendum

    const handleSubmit = (evt) =>{
        setId2(id)
        openModalRef(true)
    }

    const simulate = (evt) => {
        setLoaded(true)
        const espera = async () =>{
            referendumAutomatico(id)
            await new Promise(resolve => setTimeout(resolve,5000))
            setLoaded(false)
            window.location.reload()
        }
        espera()
    }
   
    return(
        <div className="votacion_pendiente_container">
            <div className="votacion_info_home">
                <p>Referendum </p>
                <p>{nombre}</p>
                <button className="button_one" onClick={handleSubmit} >Finalizar Votacion</button>
                <button className="button_one" onClick={simulate}>Simular Votacion</button>
             </div>
        </div>
    )
}
export default EndVote2