import './censusform.css'
function UsuarioCheck({user, userCheck}){

    const{ci, nombre, apellido, fecha_nacimiento, ciudad, email, telefono, is_superuser} = user

    if(!is_superuser){
        return(
            <label class="container_checkbox_census">
                <input onChange={userCheck} value={ci} name={email} id={ci} type="checkbox"/>
                <p> {nombre} {apellido}</p>
            </label>
        )
    }
}
export default UsuarioCheck