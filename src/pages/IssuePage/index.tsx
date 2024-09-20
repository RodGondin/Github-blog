import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { FirstInfosDiv, InfosDivProfile, IssueDescriptionDiv, LastInfosDiv, MainDiv, ProfileSection, TitleInfoDiv } from "./styles";
import { ArrowSquareOut, CalendarDots, CaretLeft, ChatCircle, GithubLogo } from "@phosphor-icons/react";
import { useContext } from "react";
import { IssuesContext } from "../../contexts/IssuesContext";
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import ReactMarkdown from 'react-markdown';
import { useNavigate } from 'react-router-dom';


export function IssuePage() {
  const context = useContext(IssuesContext);
  const navigate = useNavigate();
  const { issueId } = useParams();

  if (!context) {
    throw new Error('context not initialized');
  }

  const { issueInfos } = context;
  if (!issueInfos) {
    return <div>Loading...</div>;
  }

  const issues = issueInfos.items;
  const issueSelected = issues.find(issue => issue.number === Number(issueId));

  if (!issueSelected) {
    return <div>Issue não encontrada.</div>;
  }

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return formatDistanceToNow(date, { addSuffix: true, locale: ptBR }); // 'há x dias'
  }

  const formattedDate = formatDate(issueSelected.created_at);

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div>
      <Header />
      <MainDiv>
        <ProfileSection>
          <InfosDivProfile>
            <FirstInfosDiv>
              <div onClick={handleGoBack}>
                <CaretLeft size={16} color="#3294F8" />
                <a href="">VOLTAR </a>
              </div>
              <div>
                <a href={issueSelected.html_url}>VER NO GITHUB </a>
                <ArrowSquareOut size={14} color="#3294F8" />
              </div>
            </FirstInfosDiv>
            <TitleInfoDiv>
              <p>{issueSelected.title}</p>
            </TitleInfoDiv>
            <LastInfosDiv>
              <div>
                <GithubLogo size={16} weight="fill" />
                <span>{issueSelected.user.login}</span>
              </div>
              <div>
                <CalendarDots size={16} weight="fill" />
                <span>{formattedDate}</span>
              </div>
              <div>
                <ChatCircle size={16} weight="fill" />
                <span>{issueSelected.comments} comentários</span>
              </div>
            </LastInfosDiv>
          </InfosDivProfile>
        </ProfileSection>

        <IssueDescriptionDiv>
          <ReactMarkdown>
            {issueSelected.body}
          </ReactMarkdown>
        </IssueDescriptionDiv>
      </MainDiv>
    </div>
  )
}