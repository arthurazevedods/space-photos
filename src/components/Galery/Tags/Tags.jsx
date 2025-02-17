import { useState } from "react";
import styled from "styled-components";
import tags from "./tags.json";
/* eslint-disable react/prop-types */
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
`;

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
  padding: 12px;
  border-radius: 10px;
  background-color: ${({ $selected }) => ($selected ? "#857AE6" : "#d9d9d958")};
  color: #f2f2f2;
  border: 2px solid ${({ $selected }) => ($selected ? "#C98CF1" : "transparent")};
  transition: background-color 0.3s ease, border 0.3s ease;
`;

export default function Tags({ onSelectTag }) {
  const [selectedTag, setSelectedTag] = useState(0); // Começa com "Todas"

  const handleTagClick = (id) => {
    setSelectedTag(id);
    onSelectTag(id);
  };

  return (
    <TagContainer>
      <TagTitulo>Busque por Tags:</TagTitulo>
      <ListTag>
        {tags.map((tag) => (
          <li key={tag.id}>
            <TagButton
              $selected={selectedTag === tag.id}
              onClick={() => handleTagClick(tag.id)}
            >
              {tag.titulo}
            </TagButton>
          </li>
        ))}
      </ListTag>
    </TagContainer>
  );
}
