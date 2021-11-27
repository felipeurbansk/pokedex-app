
import styled from 'styled-components'
import { ReactComponent as PokeballIcon } from '../../assets/images/pokeball.svg'
import { ReactComponent as DownIcon } from '../../assets/images/down.svg'
import { ReactComponent as SearchIcon } from '../../assets/images/search.svg'

import Container from '../../components/Container'
// import Header from '../../components/Header'

function Main() {
    return (
        <Container>
            <StyledHeader>
                <StyledBrand>
                    <PokeballIcon/>
                    <StyledTitle>Pokédex</StyledTitle>
                </StyledBrand>
                <StyledSort>
                    <StyledHash>#</StyledHash>
                    <DownIcon/>
                </StyledSort>
            </StyledHeader>
            <StyledSearch>
                <StyledInputSearch placeholder="Procurar"></StyledInputSearch>
            </StyledSearch>
        </Container>
    )
}
export default Main

const StyledHeader = styled.header`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    text-align: center;
`

const StyledBrand = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledTitle = styled.h1`
    font-size: 24px;
    font-weight: 800;
    color: #212121;
    padding-left: 16px;
`

const StyledHash = styled.span`
    text-align: center;
    font-size: 12px;
    line-height: 12px;
    margin: 0px 3px;
    color: #212121;
    font-weight: 700;
`

const StyledSort = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledSearch = styled.div`
    display: flex;
    width: 100%;
    padding: 17px 0;
`

const StyledInputSearch = styled.input.attrs(props => ({
    type: 'text'
}))`
    width: 100%;
    padding: 6px 0px;
    border-radius: 8px;
    background-color: #FFF;
    border: 1px solid #E0E0E0;
    text-align: center;
    font-size: 10px;
`
    