import { useNavigate } from "react-router-dom"

function ResultsList2({finalizada}) {
    
    const{id, nombre, tipo_votacion} = finalizada

    const navigate = useNavigate();
    const redirectTo = () => {
        navigate(`/Admin/Estadisticas/${id}`)
    }

    let typeV = "Mayoría absoluta"
    if(tipo_votacion === "N"){
        typeV = "Normal"
    }
    if(tipo_votacion === "P"){
        typeV = "Proporcional"
    }

    return(
        <tbody>
            <tr>
                <td>{nombre}</td>
                <td>{typeV}</td>
                <td>
                    <button className="button_one" onClick={redirectTo}>Ver mas</button>
                </td>
            </tr>
        </tbody>
    )
}
export default ResultsList2