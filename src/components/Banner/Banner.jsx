/* eslint react/prop-types: 0 */
import { styled } from "styled-components"

const FigureEstilizada = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover;
`

const TituloEstilizado = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #F2F2F2;
    max-width: 300px;
    padding: 0 48px;
    max-width: 250px
`

const Banner = ({text, bgImage}) => {
    return (<FigureEstilizada $backgroundImage={bgImage}>
        <TituloEstilizado>{text}</TituloEstilizado>
    </FigureEstilizada>)
}

export default Banner