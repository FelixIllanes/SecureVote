import UserCrud from "../Components/UserCrud"
import { useUser } from "../hooks/useUser"
export default function UserCrudPage() {

    const{users, updateUser, removeUser, focusUser, user} = useUser()

    return(
        <main>
            <div className="table_container">
                <table>
                    <thead>
                        <th>CI</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Fecha de Nacimiento</th>
                        <th>Ciudad</th>
                        <th>Email</th>
                        <th>Telefono</th>
                    </thead>

                {users?.map((user, idx) => (

                    <UserCrud key={idx} user={user}/>

                ))}
                    
                </table>
            </div>
        </main>
    )
}