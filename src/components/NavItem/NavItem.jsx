import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'styled-components';
/* eslint react/prop-types: 0 */

const bgColorActive = '#857AE6';
const colorActive = '#f2f2f2';
const bgColorDesactive = '#04244f';
const colorDesactive = '#94a3b8';



const Item = styled.a`
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    border-radius: 5px;
    color: #d2d2d2;
    font-size: 18px;
    
    &:hover {
        color: #ffffff;
    }
`;


export default function NavItem ({ children, icon, href, active }) {
    return (
        <Item href={href}>
            <FontAwesomeIcon icon={icon} style={{ 
                fontSize: '20px', 
                padding: '6px', 
                borderRadius: '8px', 
                backgroundColor: active ? bgColorActive : bgColorDesactive, 
                color: active ? colorActive : colorDesactive, 
                width:'25px', 
                height:'25px'}} 
            />
            {children}
        </Item>
    );
};