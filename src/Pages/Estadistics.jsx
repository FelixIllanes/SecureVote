import Barchart from "../Components/Grafics/BarChart"
import UserList from "../Components/UserList"
import ResultsList from "../Components/ResultsList"

export default function Estadistics() {
    return(
        <main>
            <div className="estadistica_container">
                <h1>Resultados</h1>
                <div className="estadistics_page">
                    <div className="list_user">
                        <table>
                            <thead>
                                <th>listta de votantes</th>
                            </thead>
                                <UserList/>
                        </table>
                    </div>
                    <div className="estadistic_container">
                        <Barchart/>
                    </div>
                </div>
            </div>
        </main>
    )
}