import styled from 'styled-components'
import { ReactComponent as PokeballIcon } from '../assets/images/pokeball.svg'
import { ReactComponent as DownIcon } from '../assets/images/down.svg'
function Header() {
    return(
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
    )
}
export default Header;


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
    margin: 0px 2px;
    color: #212121;
    font-weight: 700;
`

const StyledSort = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

