import { baseUrl as api, headers } from "./api.config";

export const getAllPadrones = () => 
    fetch(`${api}/api/padron/`)
    .then((res) => res.json())
    .then((data) => data)

export const createPadron = (body) =>
    fetch(`${api}/api/padron/` , {method: 'POST', headers, body: JSON.stringify(body)})
    .then((res) => res.json())
    .then((data) => data)

export const asignarUsuarios = (body) =>
    fetch(`${api}/api/padronUsuario/` , {method: 'POST', headers, body: JSON.stringify(body)})
    .then((res) => res.json())
    .then((data) => data)