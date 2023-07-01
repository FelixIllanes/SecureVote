import RefBarchart from "../Components/Grafics/refBarChart";
import UserList from "../Components/UserList";

export default function RefEstadistics() {
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
                        <RefBarchart/>
                    </div>
                </div>
            </div>
        </main>
    )
}