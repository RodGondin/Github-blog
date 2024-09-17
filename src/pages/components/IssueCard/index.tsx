import { useContext } from "react";
import { IssueCardContainer } from "./styles";
import { IssuesContext, IssuesContextType } from "../../../contexts/IssuesContext";

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

  if (!context || !context.issueInfos) {
    throw new Error('IssuesContext not initialized or no issues available');
  }

  const { issueInfos } = context;

  const issue = issueInfos.items.find((issue: IssueCardType) => issue.id === id);

  if (!issue) {
    return <div>Issue não encontrada</div>;
  }

  return (
    <IssueCardContainer>
      <div>
        <span>{issue.title}</span>
        <span>{new Date(issue.created_at).toLocaleDateString()}</span>
      </div>
      <p>{issue.body}</p>
    </IssueCardContainer>
  );
}