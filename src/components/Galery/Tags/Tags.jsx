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

const ListTag = styled.ul`
    display: flex;
    gap: 24px;
    list-style: none;
    padding: 0;
    margin: 10px 0;
`;

const TagButton = styled.button`
    background-color: #d9d9d958;
    border: ${({ $selected }) => ($selected ? '2px solid #857AE6' : 'none')};
    border-radius: 10px;
    color: #f2f2f2;
    padding: 8px;
    transition: border 0.3s ease;
`;

export default function Tags() {
    return (
        <TagContainer>
            <p>Busque por Tags:</p>
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
