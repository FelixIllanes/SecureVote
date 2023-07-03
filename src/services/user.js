import { baseUrl as api, headers } from "./api.config";

export const getOne = (id) =>
    fetch(`${api}/api/usuario/${id}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch(err => console.log(err));

export const getAll = () =>
    fetch(`${api}/api/usuario/`)
    .then((res) => res.json())
    .then((data) => data)
    .catch(err => console.log(err));

export const remove = (id) => 
    fetch (`${api}/api/usuario/${id}/`, {method: 'DELETE', headers});

export const getCadidatoxPartido = (id) =>
    fetch(`${api}/getCandidato/${id}/`)
    .then((res) => res.json())
    .then((data) => data);

export const crearUsuario = (body) =>
    fetch(`${api}/register/` , {method: 'POST', headers, body: JSON.stringify(body)})
    .then((res) => res.json())
    .then((data) => data)

export const getUserSinPartido = () =>
    fetch(`${api}/getUsersSinPartido/`)
    .then((res) => res.json())
    .then((data) => data.usuarios)