import { useNavigate } from "react-router-dom"

function ResultRefList({refActiva}) {
    
    const{id, nombre} = refActiva

    const navigate = useNavigate();
    const redirectTo = () => {
        navigate(`/Admin/RefEstadistics/${id}`)
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
export default ResultRefList