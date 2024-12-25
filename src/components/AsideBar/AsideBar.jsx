import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faEye, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faFaceSurprise, faLightbulb } from '@fortawesome/free-regular-svg-icons';

const ListStyled = styled.li`
    list-style-type: none;
    padding: 0;
    margin: 0;
`

const LinkElm = styled.a`
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    border-radius: 5px;
    color: #d2d2d2;
    font-size: 24px;
`

export default function AsideBar() {
    return (
        <aside>
            <nav>
                <ul>
                    <ListStyled>
                        <LinkElm href="">
                            <FontAwesomeIcon icon={faHouse} style={{fontSize:'20px' ,color: '#f2f2f2', borderRadius: '8px' ,backgroundColor: '#857AE6', padding:'6px', width:'26px', height:'26px'  }} />
                            <p>Início</p>
                        </LinkElm>
                    </ListStyled>
                    <ListStyled>
                        <LinkElm href="">
                            <FontAwesomeIcon icon={faEye} style={{fontSize:'20px' ,color: '#f2f2f2', borderRadius: '8px' ,backgroundColor: '#04244f', padding:'6px', width:'26px', height:'26px'  }} />
                            <p>Mais Vistas</p>
                        </LinkElm>
                    </ListStyled>
                    <ListStyled>
                        <LinkElm href="">
                            <FontAwesomeIcon icon={faThumbsUp} style={{fontSize:'20px', color: '#f2f2f2', borderRadius: '8px' ,backgroundColor: '#04244f', padding:'6px', width:'26px', height:'26px'  }} />
                            <p>Mais Curtidas</p>
                        </LinkElm>
                    </ListStyled>
                    <ListStyled>
                        <LinkElm href="">
                            <FontAwesomeIcon icon={faLightbulb} style={{fontSize:'20px', color: '#f2f2f2', borderRadius: '8px' ,backgroundColor: '#04244f', padding:'6px', width:'26px', height:'26px' }} />
                            <p>Novidades</p>
                        </LinkElm>
                    </ListStyled>
                    <ListStyled>
                        <LinkElm href="">
                            <FontAwesomeIcon icon={faFaceSurprise} style={{fontSize:'20px', color: '#f2f2f2', borderRadius: '8px' ,backgroundColor: '#13325c', padding:'6px', width:'26px', height:'26px' }} />
                            <p>Surpreenda-me</p>
                        </LinkElm>
                    </ListStyled>
                </ul>
            </nav>

        </aside>
    )
}