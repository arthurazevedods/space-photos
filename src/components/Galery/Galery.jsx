import styled from "styled-components"
import Title from "../Title/Title"
import Tags from "./Tags/Tags"
import Populars from "./Populars"

const ContainerGalery = styled.div`
    display: flex;
`
const FluidSection = styled.section`
    flex-grow: 1;

`
export default function Galery() {

    return (
        <>
            <Tags />
            <ContainerGalery>
                <FluidSection>
                    <Title>Navegue pela galeria</Title>

                </FluidSection>
                <Populars/>
            </ContainerGalery>

        </>

    )
}