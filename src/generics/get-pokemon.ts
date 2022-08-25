import axios from 'axios'
import { Pokemon } from '../interfaces';

export const getPokemon = async (pokwmonId: number): Promise<Pokemon> => {
  const resp = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokwmonId}`)
  const { data } = resp
  console.log(data.abilities[0])

  return data
}