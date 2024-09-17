import styled from "styled-components";

export const IssueCardContainer = styled.div`
  background-color: ${props => props.theme['base-post']}; /* Cor de fundo do card */
  color: ${props => props.theme['base-text']};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  cursor: pointer;
  transition: 0.2s;

  div {
    display: flex;
    justify-content: space-between;

    margin-bottom: 1rem;

    span:first-child {
      font-weight: 600;
      color: ${props => props.theme['base-title']};
      max-width: 75%;
    }

    span:not(:first-child) {
      font-size: 0.75rem;
      line-height: 24px;
      color: ${props => props.theme['base-span']};
    }
  }

  p {
    overflow: hidden;
    display: -webkit-box;      /* Define como um container flexível */
    -webkit-line-clamp: 4;     /* Limita a exibição a 4 linhas */
    -webkit-box-orient: vertical; /* Orienta o conteúdo na vertical */
    text-overflow: ellipsis;
  }

  &:hover {
    border: 2px solid ${props => props.theme['base-label']};
  }
`;
