import styled from "styled-components";

export const MainDiv = styled.div`
  width: 100%;
  height: 100vh;
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
  width: 100%;
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

export const IssuesMainGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(390px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;