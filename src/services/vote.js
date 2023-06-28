import { baseUrl as api, headers } from "./api.config";

export const crearVotacion = (body) =>
    fetch(`${api}/api/votacion/`, {method: 'POST', headers, body: JSON.stringify(body)})
    .then((res) => res.json())
    .then((data) => data)