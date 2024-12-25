import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'styled-components';
/* eslint react/prop-types: 0 */

const Icon = styled(FontAwesomeIcon)`
    font-size: 20px;
    padding: 6px;
    border-radius: 8px;
    width: 25px;
    height: 25px;
    background-color: ${({ $active }) => ($active ? '#857AE6' : '#04244f')};
    color: ${({ $active }) => ($active ? '#f2f2f2' : '#94a3b8')};
`;

const Item = styled.a`
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    border-radius: 5px;
    color: ${({ $active }) => ($active ? '#857AE6' : '#d2d2d2')};
    font-size: 18px;

    &:hover {
        color: #ffffff;
    }
`;

export default function NavItem({ children, icon, href, active = false }) {
    return (
        <Item href={href} $active={active} aria-current={active ? 'page' : undefined}>
            <Icon icon={icon} $active={active} />
            {children}
        </Item>
    );
}
