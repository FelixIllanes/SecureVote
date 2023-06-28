function PadronList({padron, handleClick}){

    const{id, nombre} = padron

    return(
        <tbody>
            <tr>
                <td>{nombre}</td>
                <td>
                    <button type="button" id={id} onClick={() => handleClick(id)} className="button_one">Seleccionar padron</button>
                </td>
            </tr>
        </tbody>
    )
}
export default PadronList