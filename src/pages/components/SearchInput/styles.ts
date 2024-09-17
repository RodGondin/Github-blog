import styled from "styled-components";


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

export const SearchIssueInput = styled.input`
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
