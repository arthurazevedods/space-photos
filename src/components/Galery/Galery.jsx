import styled from "styled-components"
import Title from "../Title/Title"
import Tags from "./Tags/Tags"
import Populars from "./Populars"
import Image from "./Image"
/* eslint react/prop-types: 0 */
const ContainerGalery = styled.div`
    display: flex;
`
const FluidSection = styled.section`
    flex-grow: 1;
`
const ListPhotos = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    padding-inline-start:0px;
`
const PhotoItem = styled.li`
    margin: 0;
    padding: 0;
`

export default function Galery({ photos = [] }) {

    return (
        <>
            <Tags />
            <ContainerGalery>
                <FluidSection>
                    <Title>Navegue pela galeria</Title>
                    <ListPhotos>
                        {photos.map(photo =>
                            <PhotoItem key={photo.id}>
                                <Image photo={photo}></Image>
                            </PhotoItem>
                        )}
                    </ListPhotos>
                </FluidSection>
                <Populars />
            </ContainerGalery>

        </>

    )
}