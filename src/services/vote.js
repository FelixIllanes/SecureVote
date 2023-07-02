import { baseUrl as api, headers } from "./api.config";

export const crearVotacion = (body) =>
    fetch(`${api}/api/votacion/`, {method: 'POST', headers, body: JSON.stringify(body)})
    .then((res) => res.json())
    .then((data) => data)

export const votacionesActivas = () =>
    fetch(`${api}/getVotacionesActivas/`)
    .then((res) => res.json())
    .then((data) => data.transactions)

export const terminarVotacion = (id) =>
    fetch(`${api}/terminarVotacion/${id}`)
    .then((res) => res.json())
    .then((data) => data)

export const votacionesTerminadas = () =>
    fetch(`${api}/getVotacionesTerminadas/`)
    .then((res) => res.json())
    .then((data) => data.transactions)
