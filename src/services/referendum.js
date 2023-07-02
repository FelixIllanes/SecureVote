import { baseUrl as api, headers } from "./api.config";

export const crearReferendum = (body) =>
    fetch(`${api}/api/referendum/`, {method: 'POST', headers, body: JSON.stringify(body)})
    .then((res) => res.json())
    .then((data) => data)

export const getAllReferendums = (id) =>
    fetch(`${api}/getReferendumsxUsuario/${id}/`)
    .then((res) => res.json())
    .then((data) => data.referendums)

export const getReferendumsActivos = () =>
    fetch(`${api}/getReferendumssActivas/`)
    .then((res) => res.json())
    .then((data) => data.referendums)

export const getReferendumsFin = () =>
    fetch(`${api}/getReferendumssTerminadas/`)
    .then((res) => res.json())
    .then((data) => data.referendums)

export const getReferendumxId = (id) =>
    fetch(`${api}/api/referendum/${id}`)
    .then((res) => res.json())
    .then((data) => data)

export const votarReferendum = (ci_votante, id_referendum, hashvoto, index, tipo_voto) => {

    const body = ({
        ci_votante : ci_votante,
        id_referendum: id_referendum,
        hashvoto: hashvoto,
        index: index,
        tipo_voto: tipo_voto,
    })
    console.log(body)
    fetch(`${api}/sufragarReferendum/` , {method: 'POST', headers, body:JSON.stringify(body)})
    .then((res) => res.json())
    .then((data) => data)
}

export const referendumAutomatico = (id) =>
    fetch(`${api}/resultadoAutomaticoReferendum/${id}/`)
    .then((res) => res.json())
    .then((data) => data)

export const finalizarReferendum = (id) =>
    fetch(`${api}/terminarReferendum/${id}`)
    .then((res) => res.json())
    .then((data) => data)
    