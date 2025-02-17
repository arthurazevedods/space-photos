import styled from "styled-components";
import Title from "../Title/Title";
/* eslint-disable react/prop-types */
const PhotosCol = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PopImage = styled.img`
  max-width: 212px;
  border-radius: 20px;
`;

const Button = styled.button`
  background-color: transparent;
  color: #fff;
  border: 2px solid;
  border-color: #C98CF1;
  padding: 12px 20px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  margin-top: 16px;
`;

const Favorites = ({ favorites }) => {
  return (
    <section>
      <Title $alinhamento="center">Favoritos</Title>
      <PhotosCol>
        {favorites.length > 0 ? (
          favorites.map((foto) => (
            <PopImage key={foto.id} src={foto.path} alt={foto.alt} />
          ))
        ) : (
          <p>Nenhuma imagem favoritada</p>
        )}
      </PhotosCol>
      {favorites.length > 0 && <Button>Ver mais</Button>}
    </section>
  );
};

export default Favorites;
