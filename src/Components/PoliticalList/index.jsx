import { useEffect, useState } from "react"
function PoliticalList({partido, openModal, focusParty}) {

    const{ Sigla, Slogan, id, nombre_partido } = partido

    const handleDelete = () => {
        focusParty(partido)
        openModal(true)
    }
    
    return(
        <tbody>
            <tr>
                <td>{nombre_partido}</td>
                <td>{Slogan}</td>
                <td>{Sigla}</td>
                <td>
                    <button onClick={handleDelete}>Elimnar</button>
                </td>
            </tr>
        </tbody>
    )
}
export default PoliticalList