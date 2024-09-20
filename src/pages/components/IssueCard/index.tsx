import { useContext } from "react";
import { IssueCardContainer, NavigateButton } from "./styles";
import { IssuesContext, IssuesContextType } from "../../../contexts/IssuesContext";
import { useNavigate } from "react-router-dom";
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export interface IssueCardType {
  id: number;
  body: string;
  title: string;
  created_at: string;
  url: string;
  comments: number;
}

export function IssueCard({ id }: { id: number }) {
  const context = useContext<IssuesContextType | undefined>(IssuesContext);
  const navigate = useNavigate();

  if (!context || !context.issueInfos) {
    throw new Error('IssuesContext not initialized or no issues available');
  }

  const { issueInfos } = context;

  const issue = issueInfos.items.find((issue: IssueCardType) => issue.id === id);

  if (!issue) {
    return <div>Issue não encontrada</div>;
  }

  function goToIssuePage(issueId: number) {
    navigate(`/issue/${issueId}`);
  }

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return formatDistanceToNow(date, { addSuffix: true, locale: ptBR }); // 'há x dias'
  }

  const formattedDate = formatDate(issue.created_at);

  return (
    <NavigateButton onClick={() => goToIssuePage(issue.number)}>
      <IssueCardContainer>
        <div>
          <span>{issue.title}</span>
          <span>{formattedDate}</span>
        </div>
        <p>{issue.body}</p>
      </IssueCardContainer>
    </NavigateButton>
  );
}