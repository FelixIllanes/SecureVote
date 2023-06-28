import EndVote from "../Components/VotacionPendiente/end_vote"
export default function AdminHome() {
    return(
        <main>
           <div>
            <div className="info_cont">
                <h1>Inicio administrador</h1>
                <div className="info">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad commodi quasi sapiente exercitationem blanditiis voluptatibus dicta, facere reprehenderit molestias rem id? Consectetur consequuntur adipisci porro, quae itaque impedit cumque voluptatum?
                </div>
            </div>
            <div className="votacion_pendiente_lista">
                <h1>Votaciones en curso</h1>
                <EndVote/>
                <EndVote/>
                <EndVote/>
                <EndVote/>
            </div>
           </div>
        </main>
    )
}