import { styled } from "styled-components"

import fotos from '../../fotos.json';
import Title from "../Title/Title";

const PhotosCol = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const PopImage = styled.img`
    max-width: 212px;
    border-radius: 20px;
`

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

const Populares = () => {
    return (
        <section>
            <Title $alinhamento='center'>Populares</Title>
            <PhotosCol>
                {fotos.map(foto => <PopImage key={foto.id} src={foto.path} alt={foto.alt}/>)}
            </PhotosCol>
            <Button>Ver mais</Button>
        </section>
    )
}

export default Populares