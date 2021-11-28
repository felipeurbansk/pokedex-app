
import { useEffect, useState } from 'react'
import styled from "styled-components"
import api from "../services/api";

import PokemonCard  from "./PokemonCard";

function PokemonList({children}) {
  const [totalPokemons, setTotalPokemons] = useState(0);
  const [nextRequestUrl, setNextRequestUrl] = useState('');
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetch() {
      await api.get('/pokemon?limit=12')
        .then((response) => {
          if(typeof response.data.results !== 'undefined' && response.data.results.length > 0) {
            setPokemons(response.data.results)
            setTotalPokemons(response.data.count)
            setNextRequestUrl(response.data.next)
          }
        }).catch((err) => {
          console.log({err})
        })
    } 
    fetch();
  }, [])

  return (
    <StyledList>
      {
        pokemons &&
        pokemons.map((pokemon, index) => (
          <PokemonCard key={index} index={index} pokemon={pokemon}/>
        ))
      }
    </StyledList>

  )
}
export default PokemonList;

const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: left;
`