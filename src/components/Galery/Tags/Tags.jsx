import styled from 'styled-components';
import tags from './tags.json';

const TagContainer = styled.div`
    display: flex;
    flex-direction: row;
    color: #f2f2f2;
    font-size: 24px;
    gap: 24px;
    flex-wrap: wrap;
`;

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
`



const ListTag = styled.ul`
    display: flex;
    gap: 24px;
    list-style: none;
    padding: 0;
    margin: 10px 0;
`;

const TagButton = styled.button`
    font-size: 24px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: ${({ $selected }) => ($selected ? '2px solid #857AE6' : '2px solid transparent')};
    &:hover {
      border-color: #C98CF1;
    }
    background-color: #d9d9d958;
    border-radius: 10px;
    color: #f2f2f2;
    transition: border 0.3s ease;
`;

export default function Tags() {
    return (
        <TagContainer>
            <TagTitulo>Busque por Tags:</TagTitulo>
            <ListTag>
                {tags?.map(tag => (
                    <li key={tag.id}>
                        <TagButton
                            $selected={tag.titulo === 'Todas'}
                            aria-pressed={tag.titulo === 'Todas'}
                        >
                            {tag.titulo || 'Sem título'}
                        </TagButton>
                    </li>
                ))}
            </ListTag>
        </TagContainer>
    );
}
