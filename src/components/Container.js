import styled from 'styled-components'

function Container({children}) {
    return(
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}
export default Container;

const StyledContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 406px;
    min-width: 406px;
    height: 640px;
    justify-content: start;
    flex-direction: column;
    padding: 24px 22px 0px;
    background: #F7F7F7;
    border-radius: 12px;
    border: 1px solid #DDD;
`