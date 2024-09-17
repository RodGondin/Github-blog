import { ArrowSquareOut, Building, GithubLogo, Users } from "@phosphor-icons/react"
import { Header } from "../components/Header"
import { MainDiv, ProfileSection, FirstInfosDiv, DescriptionProfileParagraph, LastInfosDiv, InfosDivProfile, IssuesMainGrid } from "./styles"
import { IssueCard } from "./components/IssueCard"
import { useContext } from "react";
import { IssuesContext } from "../contexts/IssuesContext";
import { SearchInput } from "./components/SearchInput";


export function Home() {
  const context = useContext(IssuesContext);

  if (!context) {
    throw new Error('context not initialized');
  }

  const { userInfos, issueInfos } = context;
  const issues = issueInfos?.items;

  if (!userInfos) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <MainDiv>
        <ProfileSection>
          <img src={userInfos.avatar_url} alt="github profile photo" />
          <InfosDivProfile>
            <FirstInfosDiv>
              <p>{userInfos.name}</p>
              <div>
                <a href={userInfos.html_url}>GITHUB </a>
                <ArrowSquareOut size={12} color="#3294F8" />
              </div>
            </FirstInfosDiv>
            <DescriptionProfileParagraph>{userInfos.bio}</DescriptionProfileParagraph>
            <LastInfosDiv>
              <div>
                <GithubLogo size={14} />
                <span>{userInfos.login}</span>
              </div>
              <div>
                <Building size={14} />
                <span>{userInfos.company}</span>
              </div>
              <div>
                <Users size={14} />
                <span>{userInfos.followers} seguidores</span>
              </div>
            </LastInfosDiv>
          </InfosDivProfile>
        </ProfileSection>

        <SearchInput />

        <IssuesMainGrid>

          {issues ? issues.map((issue) => {
            return (
              <IssueCard key={issue.id} id={issue.id} />
            )
          }) : null}

        </IssuesMainGrid>

      </MainDiv>
    </div>
  )
}