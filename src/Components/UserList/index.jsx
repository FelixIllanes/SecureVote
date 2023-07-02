function UserList({voto}) {

    const{id, hashvoto, ci_candidato, tipo_voto} = voto



    let typeV = "Blanco"
    if(tipo_voto === "U"){
        typeV = "Nulo"
    }
    if(tipo_voto === "S"){
        typeV = "Si"
    }
    if(tipo_voto === "N"){
        typeV = "No"
    }
    
    return(
        <tbody>
            <tr>
                <td>{hashvoto} {typeV}</td>
            </tr>
        </tbody>
    )
}
export default UserList