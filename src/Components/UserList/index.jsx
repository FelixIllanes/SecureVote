function UserList({voto}) {

    const{id, hashvoto, ci_candidato, tipo_voto} = voto



    let typeV = "Blanco"
    if(tipo_voto === "N"){
        typeV = "Nulo"
    }
    if(tipo_voto === "P"){
        typeV = "Positivo"
    }
    
    let res = ci_candidato

    if(ci_candidato == null){
        res = typeV
    } 

    return(
        <tbody>
            <tr>
                <td>{hashvoto} {res}</td>
            </tr>
        </tbody>
    )
}
export default UserList