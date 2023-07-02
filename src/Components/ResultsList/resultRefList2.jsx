import { useNavigate } from "react-router-dom"

function ResultRefList2({refFinalizada}) {
    
    const{id, nombre} = refFinalizada

    const navigate = useNavigate();
    const redirectTo = () => {
        navigate(`/Admin/RefEstadistics2/${id}`)
    }

    return(
        <tbody>
            <tr>
                <td>{nombre}</td>
                <td>Referendum</td>
                <td>
                    <button className="button_one" onClick={redirectTo}>Ver mas</button>
                </td>
            </tr>
        </tbody>
    )
}
export default ResultRefList2