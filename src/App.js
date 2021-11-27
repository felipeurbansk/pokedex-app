import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'


/** Components */
import Body from './components/Body'
/** Pages */
import Main from './pages/Main'

/** Reset */
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;800;900&display=swap');
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 16px;
    vertical-align: baseline;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: 'Poppins', sans-serif;
  }
`

function App() {
  return (
    <Router>
        <GlobalStyle/>
        <Body>
          <Routes>
            <Route exact path="/" element={<Main/>}/>
          </Routes>
        </Body>
    </Router>
  )
}
export default App