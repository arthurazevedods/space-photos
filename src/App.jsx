import { styled } from "styled-components"
import GlobalStyles from "./components/GlobalStyles/GlobalStyles"
import Header from "./components/Header/Header"
import AsideBar from "./components/AsideBar/AsideBar"
import Banner from "./components/Banner/Banner"
const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    width: 100%;
    min-height: 100vh;
`

const AsideAndBanner = styled.div`
  display: flex;
  justify-content: space-between;
`

function App() {

  return (
    <FundoGradiente>
      <GlobalStyles />
      <Header />
      <AsideAndBanner>
        <AsideBar></AsideBar>
        <Banner text={'A galeria mais completa de fotos do espaço!'} bgImage={'./assets/images/banner.jpg'}></Banner>
      </AsideAndBanner>

    </FundoGradiente>
  )
}

export default App