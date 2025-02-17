import styled from "styled-components";
import Title from "../Title/Title";
import Tags from "./Tags/Tags";
import Favorites from "./Favorites";
import Image from "./Image";
/* eslint-disable react/prop-types */
const GaleryContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const FluidSection = styled.section`
  flex-grow: 1;
`;

const ContainerImages = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

const Galery = ({ photos, onSelectPhoto, onFavorite }) => {
  return (
    <>
      <Tags />
      <GaleryContainer>
        <FluidSection>
          <Title>Navegue pela Galeria</Title>
          <ContainerImages>
            {photos.map((photo) => (
              <Image
                key={photo.id}
                photo={photo}
                onZoom={onSelectPhoto}
                onFavorite={onFavorite}
              />
            ))}
          </ContainerImages>
        </FluidSection>
        <Favorites favorites={photos.filter((photo) => photo.favorita)} />
      </GaleryContainer>
    </>
  );
};

export default Galery;
