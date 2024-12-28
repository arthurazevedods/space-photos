
/* eslint react/prop-types: 0 */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components"

const Card = styled.figure`
    
    display: flex;
    flex-direction: column;
    gap: 0;
    background-color: #001634;
    max-width: 448px;
    max-height: 336px;
    border-radius: 12px;
`

const CardImage = styled.img`
    max-width: 448px;
    max-height: 256px;
    border-radius: 12px 12px 0 0;
`

const Caption = styled.figcaption`
    display: flex;
    flex-direction: column;
`
const CardTitle = styled.h3`
    color: #f2f2f2;
    font-size: 12px;
`

const CardFooter = styled.footer`
    display: flex;
    gap: 5px;
    color: #f2f2f2;
    font-size: 12px;
`
const Icon = styled(FontAwesomeIcon)`
    font-size: 20px;
    padding: 6px;
    border-radius: 8px;
    width: 24px;
    height: 24px;
    color: #f2f2f2;
`;

const CardButton = styled.button`
    background-color: transparent;
    border: none;
    width: 24px;
    height: 24px;
    
`
export default function Image({ photo }) {
    return (
        <Card>
            <CardImage src={photo.path} alt={photo.titulo} />
            <Caption>
                <CardTitle>fonte: {photo.titulo}</CardTitle>
                <CardFooter>
                    <p>{photo.fonte}</p>
                    <CardButton><Icon icon={faHeart}></Icon></CardButton>
                    <CardButton><Icon icon={faHeart}></Icon></CardButton>
                </CardFooter>
            </Caption>
        </Card>
    )
}