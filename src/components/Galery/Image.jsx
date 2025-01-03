/* eslint react/prop-types: 0 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid, faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";

const Figure = styled.figure`
  width: ${(props) => (props.$expandida ? "90%" : "460px")};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;

  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }

  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;

    

    h4 {
      flex-grow: 1;
    }

    h3,
    h4 {
      margin: 0;
      font-size: 16px;
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 20px;
  padding: 6px;
  border-radius: 8px;
  width: 24px;
  height: 24px;
  color: #f2f2f2;
`;

const CardButton = styled.button`
  margin-left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Image = ({ photo, expandida = false, onZoom, onFavorite }) => {

  
  return (
    <Figure $expandida={expandida} id={`photo-${photo.id}`}>
      <img src={photo.path} alt={photo.alt} />
      <figcaption>
        <h3>{photo.titulo}</h3>
        <Footer>
          <h4>{photo.fonte}</h4>
          <CardButton aria-label="Curtir" onClick={() => onFavorite(photo)}>
            <Icon icon={photo.favorita ? faHeartSolid : faHeartRegular} />
          </CardButton>
          {!expandida && <CardButton onClick={() => onZoom(photo)} aria-hidden={expandida} aria-label="Expandir">
            <Icon icon={faUpRightAndDownLeftFromCenter} />
          </CardButton>}
        </Footer>
      </figcaption>
    </Figure>
  );
};

export default Image;
