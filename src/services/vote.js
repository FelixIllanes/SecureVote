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

export const votar = (ci_votante, ci_candidato, id_votante, hashvoto, index, tipo_voto) =>{

    const body = ({
        ci_votante: ci_votante,
        ci_candidato: ci_candidato,
        id_votacion: id_votante,
        hashvoto: hashvoto,
        index: index,
        tipo_voto: tipo_voto,

    })

    fetch(`${api}/votar/`, {method: 'POST', headers, body:JSON.stringify(body)})
    .then((res) => res.json())
    .then((data) => data)
}

export const votacionAutomatica = (id) =>
    fetch(`${api}/resultadoAutomatico/${id}`)
    .then((res) => res.json())
    .then((data) => data)