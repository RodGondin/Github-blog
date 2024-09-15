import styled from "styled-components";

export const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 18rem;
`;

export const ProfileSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 212px;
  padding: 2rem 2rem;
  margin-top: -100px;
  border-radius: 10px;
  background-color: ${props => props.theme['base-profile']};

  display: flex;

  img {
    height: 148px;
    width: 148px;
    border-radius: 8px;
    margin-right: 2rem;
    align-self: center;
  }
`;

export const InfosDivProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FirstInfosDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
  margin-bottom: 8px;

  p {
    color: ${props => props.theme['base-title']};
    font-size: 1.5rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 4px;

    a {
      color: ${props => props.theme['blue']};
      font-weight: 600;
      text-decoration: none;
      font-size: 0.75rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const DescriptionProfileParagraph = styled.div`
  margin-bottom: 24px;
  font-size: 0.875rem;
`;

export const LastInfosDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;

export const SearchDiv = styled.div`
  padding-top: 4.5rem;
  width: 100%;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const PublicationsSpan = styled.span`
  color: ${props => props.theme['base-subtitle']};
  font-size: 1;
  font-weight: 600;
`;

export const CountablePublicationSpan = styled.span`
  color: ${props => props.theme['base-span']};
  font-size: 0.75rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 50px;
  margin-top: 12px;
  margin-bottom: 48px;
  border-radius: 6px;
  padding: 12px 16px;
  background-color: ${props => props.theme['base-input']};
  color: ${props => props.theme['base-text']};

  border: 1px solid ${props => props.theme['base-border']};

  &::-webkit-input-placeholder {
    color: ${props => props.theme['base-label']};
  }

  &:-moz-placeholder { /* Firefox 18- */
    color: ${props => props.theme['base-label']};
  }

  &::-moz-placeholder {  /* Firefox 19+ */
    color: ${props => props.theme['base-label']};
  }

  &:-ms-input-placeholder {  
    color: ${props => props.theme['base-label']};
  }
`;

export const IssuesMainGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const IssueCard = styled.div`
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
      max-width: 65%;
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
