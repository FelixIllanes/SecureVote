import { useNavigate } from "react-router-dom"

function ResultsList() {
    
    const navigate = useNavigate();
    const redirectTo = () => {
        navigate('/User/Estadisticas')
    }

    return(
        <tbody>
            <tr>
                <td>Gobernatura</td>
                <td>resultado resultado resultado</td>
                <td>cantidad de votos</td>
                <td>
                    <button className="button_one" onClick={redirectTo}>Ver mas</button>
                </td>
            </tr>
        </tbody>
    )
}
export default ResultsList