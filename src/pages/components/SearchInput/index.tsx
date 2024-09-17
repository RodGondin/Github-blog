import { useContext } from "react";
import { SearchDiv, PublicationsSpan, CountablePublicationSpan, SearchIssueInput, } from "./styles"
import { IssuesContext, IssuesContextType } from "../../../contexts/IssuesContext";

export function SearchInput() {
  const context = useContext<IssuesContextType | undefined>(IssuesContext);

  if (!context) {
    throw new Error('IssuesContext not initialized');
  }

  const { issueInfos } = context;

  if (!issueInfos) {
    return <div>Carregando...</div>;
  }

  console.log(issueInfos)

  return (
    <SearchDiv>
      <div>
        <PublicationsSpan>Publicações</PublicationsSpan>
        <CountablePublicationSpan>{issueInfos.total_count} publicações</CountablePublicationSpan>
      </div>
      <SearchIssueInput type="text" placeholder="Buscar conteúdo" />
    </SearchDiv>
  );
}