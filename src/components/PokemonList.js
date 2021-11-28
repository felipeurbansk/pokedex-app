
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
          savePokemons(response)
        }).catch((err) => {
          console.log({err})
        })
    } 
    fetch();
  }, [])

  async function getMore() {
    await api.get(nextRequestUrl)
      .then(response => {
        savePokemons(response)
      }).catch(err => {
        console.log({err})
      })
  }

  function savePokemons(response) {
    if(typeof response.data.results !== 'undefined' && response.data.results.length > 0) {
      if(pokemons && pokemons.length > 0) {
        setPokemons([...pokemons, ...response.data.results])
      } else {
        setPokemons(response.data.results)
        setTotalPokemons(response.data.count)
      }
      setNextRequestUrl(response.data.next)
    }
  }

  return (
    <PokemonListBody>
      <List>
        {
          pokemons &&
          pokemons.map((pokemon, index) => (
            <PokemonCard key={index} index={index} pokemon={pokemon}/>
          ))
        }
      </List>
      <Button onClick={getMore}>Carregar mais</Button>
    </PokemonListBody>
    

  )
}
export default PokemonList;


const PokemonListBody = styled.div`
  overflow-y: scroll;
  padding-bottom: 18px;

  ::-webkit-scrollbar {
    display: none;
  }
`

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: left;
`

const Button = styled.button`
  width: 100%;
  padding: 5px 0;
  margin-top: 3px;
  font-size: ${props => props.font_size};
  color: ${props => props.color};
  background-color: ${props => props.background };
  text-transform: uppercase;
  border: none;
  pointer-events: painted;
`
Button.defaultProps = {
  background: '#78A6B5',
  color: '#FFF',
  font_size: '12px',
}