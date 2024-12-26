import { styled } from 'styled-components';
import { faHouse, faEye, faThumbsUp, faFaceSurprise, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import NavItem from '../NavItem/NavItem';

const ListItemStyled = styled.li`
    list-style-type: none;
    margin-bottom: 10px;
    cursor: pointer;
`;

const AsideStyled = styled.aside`
    width: 250px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;
const ListStyled = styled.ul`
    padding-inline-start: 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
`


export default function AsideBar() {
    return (
        <AsideStyled>
            <nav>
                <ListStyled>
                    <ListItemStyled>
                        <NavItem href="#" icon={faHouse} active={true}>
                            Início
                        </NavItem>
                    </ListItemStyled>
                    <ListItemStyled>
                        <NavItem href="#" icon={faEye} active={false}>
                            Mais Vistas
                        </NavItem>
                    </ListItemStyled>
                    <ListItemStyled>
                        <NavItem href="#" icon={faThumbsUp} active={false}>
                            Mais Curtidas
                        </NavItem>
                    </ListItemStyled>
                    <ListItemStyled>
                        <NavItem href="#" icon={faLightbulb} active={false}>
                            Novidades
                        </NavItem>
                    </ListItemStyled>
                    <ListItemStyled>
                        <NavItem href="#" icon={faFaceSurprise} active={false}>
                            Surpreenda-me
                        </NavItem>
                    </ListItemStyled>
                </ListStyled>
            </nav>
        </AsideStyled>
    );
}
