import ResultsList from "../Components/ResultsList"

export default function Allvotes(){
    return(
        <main>
            <div className="vote_list">
                <h1>Resultados</h1>
                <table>
                    <thead>
                        <th>Tipo</th>
                        <th>Nombre votacion</th>
                        <th>Resultados</th>
                        <th></th>
                    </thead>
                    <ResultsList/>
                </table>
            </div>           
        </main>
    )
}