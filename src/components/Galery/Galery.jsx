import { useState } from "react";
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
  const [selectedTag, setSelectedTag] = useState(0);
  
  // Lista de favoritos (independente da filtragem)
  const favorites = photos.filter(photo => photo.favorita);

  // Lista de fotos filtradas (com base na tag selecionada)
  const filteredPhotos = selectedTag === 0 ? photos : photos.filter(photo => photo.tagId === selectedTag);

  return (
    <>
      <Tags onSelectTag={setSelectedTag} />
      <GaleryContainer>
        <FluidSection>
          <Title>Navegue pela Galeria</Title>
          <ContainerImages>
            {filteredPhotos.map((photo) => (
              <Image
                key={photo.id}
                photo={photo}
                onZoom={onSelectPhoto}
                onFavorite={onFavorite}
              />
            ))}
          </ContainerImages>
        </FluidSection>
        {/* Favoritos NÃO DEPENDEM DO FILTRO */}
        <Favorites favorites={favorites} />
      </GaleryContainer>
    </>
  );
};

export default Galery;
