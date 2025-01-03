/* eslint react/prop-types: 0 */
import styled from "styled-components";
import Title from "../Title/Title";
import Tags from "./Tags/Tags";
import Populars from "./Populars";
import Image from "./Image";


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

const Galery = ({ photos = [], onSelectPhoto, onFavorite, isFavorite }) => {
  return (
    <>
      <Tags />
      <GaleryContainer>
        <FluidSection>
          <Title>Navegue pela Galeria</Title>
          <ContainerImages>
            {
              photos.map((photo) => <Image
                  onZoom={onSelectPhoto}
                  onFavorite={onFavorite}
                  isFavorite={isFavorite}
                  key={photo.id}
                  photo={photo} />)
            }
          </ContainerImages>
        </FluidSection>
        <Populars />
      </GaleryContainer>
    </>
  );
};

export default Galery;
