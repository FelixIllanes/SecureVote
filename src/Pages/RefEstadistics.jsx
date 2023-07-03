import { useParams } from "react-router-dom";
import RefBarchartOnGoin from "../Components/Grafics/refBarChartOnGoin";
import UserList from "../Components/UserList";
import { useEffect, useState } from "react";
import { listVotosRef, resultadoReferendumActual } from "../services/resultados";

export default function RefEstadistics() {

    const{id} = useParams()
    const[votos, setVotos] = useState([])
    const[data, setData] = useState([])
    const[loaded, setLoaded] = useState(true)

    useEffect(() => {
        const espera = async () => {
            listVotosRef(id).then(setVotos)
            resultadoReferendumActual(id).then(setData)
            await new Promise(resolve => setTimeout(resolve,1000))
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
                    <p>Resultado del referéndum: En curso</p>
                </div>
                <div className="estadistics_page">
                    <div className="list_user">
                        <table>
                            <thead>
                                <th>Lista de votantes</th>
                            </thead>

                            {votos?.map((voto, idx) => (
                                <UserList key={idx} voto={voto}/>
                            ))}

                        </table>
                    </div>
                    <div className="estadistic_container">
                        <RefBarchartOnGoin data={data}/>
                    </div>
                </div>
            </div>
        </main>
    )
}