import { baseUrl as api, headers } from "./api.config";

export const votacionesUsuario = (ci) =>
    fetch(`${api}/getVotacionesxUsuario/${ci}`)
    .then((res) => res.json())
    .then((data) => data.transactions);

export const votacionById = (id) => 
    fetch(`${api}/api/votacion/${id}`)
    .then((res) => res.json())
    .then((data) => data);