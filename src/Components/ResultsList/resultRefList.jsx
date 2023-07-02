import { useNavigate } from "react-router-dom"

function ResultRefList() {
    
    /* const{id, nombre, tipo_votacion} = finalizada */

    const navigate = useNavigate();
    const redirectTo = () => {
        navigate(`/Admin/RefEstadistics`)
    }

    /* let typeV = "Mayoría absoluta"
    if(tipo_votacion === "N"){
        typeV = "Normal"
    }
    if(tipo_votacion === "P"){
        typeV = "Proporcional"
    } */

    return(
        <tbody>
            <tr>
                <td>{/* {nombre} */} Nombre de la votacion</td>
                <td>{/* {typeV} */} Tipo de votacion</td>
                <td>
                    <button className="button_one" onClick={redirectTo}>Ver mas</button>
                </td>
            </tr>
        </tbody>
    )
}
export default ResultRefList