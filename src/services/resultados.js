import { baseUrl as api, headers } from "./api.config";

export const resultadoPorVotacion = (id) =>
    fetch(`${api}/getResultVotacion/${id}`)
    .then((res) => res.json())
    .then((data) => data)

export const listaVotos = (id) =>
    fetch(`${api}/getListVotosHash/${id}`)
    .then((res) => res.json())
    .then((data) => data.votos)

export const resultadoActual = (id) =>
    fetch(`${api}/getResultadoActual/${id}`)
    .then((res) => res.json())
    .then((data) => data)

//Referendum

export const resultadoReferendumActual = (id) =>
    fetch(`${api}/getResultadoActualReferendum/${id}/`)
    .then((res) => res.json())
    .then((data) => data)

export const resultadoxReferendum = (id) =>
    fetch(`${api}/calcResultadoReferendum/${id}`)
    .then((res) => res.json())
    .then((data) => data)

export const listVotosRef = (id) =>
    fetch(`${api}/getListVotosHashReferendum/${id}`)
    .then((res) => res.json())
    .then((data) => data.votosRef)