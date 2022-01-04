import axios from "axios";
import { BASE_URL } from "../constants/Url";

 export const Pokemons = () => {
    axios.get(`${BASE_URL}/pokemon?limit=30&offset=200`).then((res) => {
        console.log(res.data)
    }).catch((error) => {
        alert("Erro", error.response)
    })
 }

 export const Detail = (id) => { // id do pokemon
    axios.get(`${BASE_URL}/pokemon/${id}`).then((res) => {
        console.log(res.data)
    }).catch((error) => {
        alert("Erro", error.response)
    })
 }

export default {Pokemons, Detail};