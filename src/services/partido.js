import { baseUrl as api, headers } from "./api.config";

export const partidoById = (id) =>
    fetch(`${api}/api/partido/${id}`)
    .then((res) => res.json())
    .then((data) => data);

export const getAllpartidos = () =>
    fetch(`${api}/api/partido/`)
    .then((res) => res.json())
    .then((data) => data)

export const createParty = (body) => 
    fetch(`${api}/api/partido/`, {method: 'POST', headers, body: JSON.stringify(body)})
    .then((res) => res.json())
    .then((data) => data);

export const deleteParty = (id) =>
    fetch(`${api}/api/partido/${id}/` , {method: 'DELETE', headers});

export const getPartidoName = (ci) => 
    fetch(`${api}/getPartidoxUsr/${ci}`)
    .then((res) => res.json())
    .then((data) => data.partido)

export const asignarPartido = (body,ci) =>
    fetch(`${api}/api/usuario/${ci}/` , {method: 'PATCH', headers, body: JSON.stringify(body)})
    .then((res) => res.json())
    .then((data) => data)