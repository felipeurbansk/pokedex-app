
import styled from "styled-components"


function PokemonList({children}) {
  return (
    <StyledList>
        { children }
    </StyledList>
  )
}
export default PokemonList;

const StyledList = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`