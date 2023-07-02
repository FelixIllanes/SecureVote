import { useState } from 'react'
import './politicalform.css'
import { createParty } from '../../services/partido'

function PoliticalForm() {

    const[body, setBody] =useState({})

    const handleChange = (evt) => {
        setBody({
            ...body,
            [evt.target.name]: evt.target.value,
        })
    }

    const handleSubmit = (evt) =>{
        evt.preventDefault()
        createParty(body)
        window.location.reload()
    }


    return(
        <div className='political_form_create'>
            <form>
                <h2>Crear partido político</h2>
                <div className="imputs_politicalform">
                    <label> Nombre del partido:</label> <br />
                    <input className="form_mod_input"
                    type="text"
                    onChange={handleChange} 
                    name="nombre_partido"
                    autocomplete="off"/>
                </div>
                <div className="imputs_politicalform">
                    <label> Slogan:</label> <br />
                    <textarea className="form_mod_input"
                    type="text"
                    onChange={handleChange} 
                    name="Slogan"
                    autocomplete="off"
                    rows={3}/>
                </div>
                <div className="imputs_politicalform">
                    <label> Sigla:</label> <br />
                    <input className="form_mod_input"
                    type="text"
                    onChange={handleChange}  
                    name="Sigla"
                    maxLength={5}
                    autocomplete="off"/>
                </div>
                <div className="login_btn_politicalform">
                    <button type="submit" onClick={handleSubmit} className="button_one">Crear Partido</button>
                </div>
            </form>
        </div>
    )
}
export default PoliticalForm