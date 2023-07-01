import RefBarchart from "../Components/Grafics/refBarChart";
import Referendum_pregunta from "../Components/VoteCard/pregunta_ref";

export default function Referendum() {
    return(
        <main>
            <div className="container_vote_complete_ref">
                <form action="">
                    <h1>Emision de voto</h1>
                    <div className="vote_container">
                        <Referendum_pregunta/>
                    </div>
                    <button className="button_one">Votar</button>
                </form>
            </div>
        </main>
    )
}