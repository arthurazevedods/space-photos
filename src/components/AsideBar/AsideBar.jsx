import { styled } from 'styled-components';
import { faHouse, faEye, faThumbsUp, faFaceSurprise, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import NavItem from '../NavItem/NavItem';

const ListStyled = styled.li`
    list-style-type: none;
    margin-bottom: 10px;
`;

const AsideStyled = styled.aside`
    width: 250px;
    padding: 20px;

    @media (max-width: 768px) {
        width: 100%;
        padding: 10px;
    }
`;






export default function AsideBar() {
    return (
        <AsideStyled>
            <nav>
                <ul>
                    <ListStyled>
                        
                        <NavItem href="#" icon={faHouse} active={true}>
                            Início
                        </NavItem>
                    </ListStyled>
                    <ListStyled>
                        <NavItem href="#" icon={faEye} active={false}>
                            Mais Vistas
                        </NavItem>
                    </ListStyled>
                    <ListStyled>
                        <NavItem href="#" icon={faThumbsUp} active={false}>
                            Mais Curtidas
                        </NavItem>
                    </ListStyled>
                    <ListStyled>
                        <NavItem href="#" icon={faLightbulb} active={false}>
                            Novidades
                        </NavItem>
                    </ListStyled>
                    <ListStyled>
                        <NavItem href="#" icon={faFaceSurprise} active={false}>
                            Surpreenda-me
                        </NavItem>
                    </ListStyled>
                </ul>
            </nav>
        </AsideStyled>
    );
}
