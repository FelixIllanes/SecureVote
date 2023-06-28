export default function VoteList() {
    return(
        <main>
            <div className="container_vote_complete">
                <h1>Emision de voto</h1>
                <div className="vote_container">
                    <VoteCard/>
                    <VoteCard/>
                    <VoteCard/>
                    <VoteCard/>
                </div>
                <button className="button_one">Votar</button>
            </div>
        </main>
    )
}