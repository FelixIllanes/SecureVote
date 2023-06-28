import "./login.css"
import { useState, useContext } from "react"
import { AuthContext } from "../../store/user"
import { useNavigate } from "react-router-dom"

function Login() {

    const navigate = useNavigate();

    const { signIn } = useContext(AuthContext);
    const [errores, setErrores] = useState({});

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        const body = {
            email: evt.target.email.value,
            password: evt.target.password.value,
        };
        try{
            await signIn(body)
        }
        catch (err) {
            console.log(err)
        }
    };

    return(
        <main className="login_main">
            <div className="login">
                <form className="form_login" onSubmit={handleSubmit}>
                    <h1>Inicio de sesión</h1>
                    <div>
                        <label> Email:</label>
                        <input className="form_mod_input"
                        type="text" 
                        name="email"
                        autocomplete="off"/>
                    </div>
                    <div >
                        <label> Contraseña:</label>
                        <input className="form_mod_input" 
                        type="password" 
                        name="password"
                        autocomplete="off"/>
                    </div>
                    <div className="login_btn">
                        <button type="submit" className="button_one">Ingresar</button>
                    </div>
                </form>
            </div>
        </main>
    )
}
export default Login