import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { listaVotos, resultadoActual } from "../services/resultados"
import BarchartOnGoin from "../Components/Grafics/BarChartOnGoin"
import UserListVote from "../Components/UserList/userListVote"

export default function Estadistics2() {

    const {id} = useParams()

    const[data, setData] = useState([])
    const[votos, setVotos] = useState([])
    const[loaded, setLoaded] = useState(true)

    useEffect(() => {
        const espera = async () => {
            resultadoActual(id).then(setData)
            listaVotos(id).then(setVotos)
            await new Promise(resolve => setTimeout(resolve,1000));
            setLoaded(false)
        }
        espera()
    },[])

    if(loaded){
        return <main><div className="loader"></div></main>
    }
    return(
        <main>
            <div className="estadistica_container">
                <h1>Resultados</h1>
                <div className="data_results">
                    <p>Resultado de la votación: En curso</p>
                </div>
                <div className="estadistics_page">
                    <div className="list_user">
                        <table>
                            <thead>
                                <th>listta de votantes</th>
                            </thead>
                            {votos?.map((voto, idx) => (
                                <UserListVote key={idx} voto={voto}/>
                            ))}
                        </table>
                    </div>
                    <div className="estadistic_container">
                        <BarchartOnGoin data={data}/>
                    </div>
                </div>
            </div>
        </main>
    )
}