import { styled } from "styled-components"
import GlobalStyles from "./components/GlobalStyles/GlobalStyles"
import Header from "./components/Header/Header"
import AsideBar from "./components/AsideBar/AsideBar"
const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    width: 100%;
    min-height: 100vh;
`

function App() {

  return (
    <FundoGradiente>
      <GlobalStyles />
      <Header />
      <AsideBar></AsideBar>
    </FundoGradiente>
  )
}

export default App