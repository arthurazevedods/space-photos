import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const FieldStyled = styled.form`
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 2px solid white;
    border-radius: 8px;
    transition: border-color 0.3s;
    
    &:focus-within {
        border-color: #867be6;
    }
`;

const InputStyled = styled.input`
    border: none;
    outline: none;
    color: #fff;
    background: transparent;
    font-size: 16px;
    width: 100%;
    &::placeholder {
        color: #ccc;
    }
`;

const TextField = () => {
    return (
        <FieldStyled>
            <InputStyled type="text" placeholder="Search..." />

            <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ color: '#867be6', fontSize: '24px' }}
                aria-label="Search icon"
            />
        </FieldStyled>
    );
};

export default TextField;
