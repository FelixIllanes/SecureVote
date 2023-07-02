import { useEffect, useState } from "react"
import ResultsList from "../Components/ResultsList"
import { votacionesActivas, votacionesTerminadas } from "../services/vote"
import ResultsList2 from "../Components/ResultsList/resultList2"
import ResultRefList from "../Components/ResultsList/resultRefList"
import ResultRefList2 from "../Components/ResultsList/resultRefList2"
import { getReferendumsActivos, getReferendumsFin } from "../services/referendum"

export default function Allvotes(){

    const[activas, setActivas] = useState([])
    const[finalizadas, setFinalizadas] = useState([])
    const[refActivas, setRefActivas] = useState([])
    const[refFinalizadas, setRefFinalizadas] = useState([])

    useEffect(() => {
        votacionesActivas().then(setActivas)
        votacionesTerminadas().then(setFinalizadas)
        getReferendumsActivos().then(setRefActivas)
        getReferendumsFin().then(setRefFinalizadas)        
    },[])

    return(
        <main>
            <div className="votes_tables_container">
                <div className="vote_list">
                    <h1>Resultados en curso</h1>
                    <table>
                        <thead>
                            <th>Nombre votación</th>
                            <th>Tipo de votación</th>
                            <th></th>
                        </thead>

                    {activas?.map((activa, idx ) => (
                        <ResultsList key={idx} activa={activa}/>
                    ))}


                    </table>
                </div> 
                <div className="vote_list">
                    <h1>Resultados finalizados</h1>
                    <table>
                        <thead>
                            <th>Nombre votación</th>
                            <th>Tipo de votacion</th>
                            <th></th>
                        </thead>

                        {finalizadas?.map((finalizada, idx) => (
                            <ResultsList2 key={idx} finalizada={finalizada}/>
                        ))}  

                    </table>
                </div>
                <div className="vote_list">
                    <h1>Resultados Referendum en curso</h1>
                    <table>
                        <thead>
                            <th>Nombre votación</th>
                            <th>Tipo de votacion</th>
                            <th></th>
                        </thead>
                        {refActivas?.map((refActiva, idx) => (
                            <ResultRefList key={idx} refActiva={refActiva}/>
                        ))}
                    </table>
                </div>
                <div className="vote_list">
                    <h1>Resultados Referendum finalizados</h1>
                    <table>
                        <thead>
                            <th>Nombre votación</th>
                            <th>Tipo de votacion</th>
                            <th></th>
                        </thead>
                        {refFinalizadas?.map((refFinalizada, idx) => (
                            <ResultRefList2 key={idx} refFinalizada={refFinalizada}/>
                        ))}
                    </table>
                </div>
            </div>           
        </main>
    )
}