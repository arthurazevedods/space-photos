import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import TextField from '../TextField/TextField';

const HeaderStyled = styled.header`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        gap: 0;
    }
`;

const LogoStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`;

const TextStyled = styled.p`
    color: #F2F2F2;
    font-size: 24px;
`;



const Header = () => {
    return (
        <HeaderStyled>
            <LogoStyled>
                <FontAwesomeIcon icon={faMoon} style={{ color: '#867be6', fontSize: '24px' }} />
                <TextStyled>Space<b>View</b></TextStyled>
            </LogoStyled>
            <TextField />
        </HeaderStyled>
    );
};

export default Header;
