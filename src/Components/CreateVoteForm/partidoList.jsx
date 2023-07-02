function PartidoList({partido, partidoChange}){

    const{id, nombre_partido, Sigla, Slogan} = partido

    return(
        <label className="container_checkbox_census">
            <input onChange={partidoChange} value={id} name={nombre_partido} id={id} type="checkbox"/>
            <p>{nombre_partido}</p>
        </label>
    )
}
export default PartidoList