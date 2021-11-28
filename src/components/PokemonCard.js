import {useEffect,useState} from 'react'
import styled from 'styled-components'
import api from '../services/api'

function PokemonCard({index, pokemon}) {
    const [pokemonData, setPokemonData] = useState({})
    
    useEffect(() => {
        async function fetch() {
            await api.get(`pokemon/${index + 1}`).then((response) => {
                setPokemonData(response.data)
                return response;
            }).catch((err) => {
                console.log({err})
            }).then((response) => {
                console.log({response: response.data})
            })
        }   
        fetch()
    }, []);
    
    return (
            <StyledCard>
                <StyledHeaderTitle><span>#{(index + 1).toString().padStart(3, 0)}</span></StyledHeaderTitle>
                <StyledBody>
                    {
                        pokemonData.sprites &&
                            typeof pokemonData.sprites.other['official-artwork'].front_default !== undefined &&
                                <StyledImage src={pokemonData.sprites.other['official-artwork'].front_default}></StyledImage>
                    }
                </StyledBody>
                <StyledFooter>
                    <StyledPokemonName>
                        {pokemon.name}
                    </StyledPokemonName>
                </StyledFooter>
            </StyledCard>
    )

}
export default PokemonCard;

const StyledCard = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    min-width: 104px;
    max-width: 104px;
    /* padding: 2px; */
    margin: 8px;
    height: 116px;
    border: 1px solid ${props => props.card.primary};
    border-radius: 8px;

    span {
        color: ${props => props.card.primary};
        font-size: 11px;
    }
`
StyledCard.defaultProps = {
    card: {
        primary: '#74CB48'
    }
}

const StyledHeaderTitle = styled.div`
    width: 100%;
    text-align: right;
    padding-right: 5px;
`

const StyledBody = styled.div`
    display: flex;
    justify-content: center;
`
const StyledImage = styled.img`
    width: 70px;
    height: 70px;
`

const StyledFooter = styled.div`
    width: 104px;
    height: 26px;
    left: -1px;
    display: block;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    border-radius: 0 0px 8px 8px;
    background-color: ${props => props.footer.primary};
`
StyledFooter.defaultProps = {
    footer: {
        primary: '#74CB48'
    }
}
const StyledPokemonName = styled.p`
    text-transform: capitalize;
    color: #FFF;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
`