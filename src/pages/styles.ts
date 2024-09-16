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