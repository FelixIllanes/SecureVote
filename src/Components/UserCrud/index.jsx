function UserCrud({user}) {

    const{ci, nombre, apellido, fecha_nacimiento, ciudad, email, telefono, is_superuser} = user

    if(!is_superuser){
        return(
            <tbody>
                <tr>
                    <td>{ci}</td>
                    <td>{nombre}</td>
                    <td>{apellido}</td>
                    <td>{fecha_nacimiento}</td>
                    <td>{ciudad}</td>
                    <td>{email}</td>
                    <td>{telefono}</td>
                </tr>
            </tbody>
        )
    }
}
export default UserCrud