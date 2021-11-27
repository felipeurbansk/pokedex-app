import styled from "styled-components"


function Body({children}) {
  return (
    <StyledBody>
        {children}
    </StyledBody>
  )
}
export default Body;

const StyledBody = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`