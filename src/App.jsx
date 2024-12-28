import { styled } from "styled-components"
import GlobalStyles from "./components/GlobalStyles/GlobalStyles"
import Header from "./components/Header/Header"
import AsideBar from "./components/AsideBar/AsideBar"
import Banner from "./components/Banner/Banner"
import Galery from "./components/Galery/Galery"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    width: 100%;
    min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`

const MainContainer = styled.main`
  display: flex;
  justify-content: space-between;
  gap: 24px;

  @media screen {
    
  }
`

const Content = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`


function App() {

  return (
    <FundoGradiente>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <MainContainer>
          <AsideBar></AsideBar>
          <Content>
            <Banner text={'A galeria mais completa de fotos do espaço!'} bgImage={'./assets/images/banner.jpg'}></Banner>
            <Galery />
          </Content>
        </MainContainer>
      </AppContainer>


    </FundoGradiente>
  )
}

export default App