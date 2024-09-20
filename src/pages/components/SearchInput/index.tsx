import { useContext, useEffect } from "react";
import { SearchDiv, PublicationsSpan, CountablePublicationSpan, SearchIssueInput } from "./styles";
import { IssuesContext, IssuesContextType } from "../../../contexts/IssuesContext";
import { useForm } from "react-hook-form";

export function SearchInput() {
  const context = useContext<IssuesContextType | undefined>(IssuesContext);
  const { register, watch } = useForm();

  if (!context) {
    throw new Error('IssuesContext not initialized');
  }

  const { issueInfos, fetchIssues } = context;

  const searchInputValue = watch('issueSearch');

  useEffect(() => {
    fetchIssues(searchInputValue, 'RodGondin', 'Github-blog');
  }, [searchInputValue]);

  if (!issueInfos) {
    return <div>Carregando...</div>;
  }

  return (
    <SearchDiv>
      <div>
        <PublicationsSpan>Publicações</PublicationsSpan>
        <CountablePublicationSpan>{issueInfos.total_count} publicações</CountablePublicationSpan>
      </div>
      <SearchIssueInput
        id="issueSearch"
        type="text"
        placeholder="Buscar conteúdo"
        {...register('issueSearch')}
      />
    </SearchDiv>
  );
}