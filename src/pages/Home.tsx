import { ArrowSquareOut, Building, GithubLogo, Users } from "@phosphor-icons/react"
import { Header } from "../components/Header"
import { MainDiv, ProfileSection, FirstInfosDiv, DescriptionProfileParagraph, LastInfosDiv, InfosDivProfile, SearchDiv, PublicationsSpan, CountablePublicationSpan, SearchInput, IssuesMainGrid } from "./styles"
import { IssueCard } from "./components/IssueCard"
import { useContext } from "react";
import { IssuesContext } from "../contexts/IssuesContext";


export function Home() {
  const context = useContext(IssuesContext);

  if (!context) {
    throw new Error('context not initialized');
  }

  const { userInfos } = context;

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

        <SearchDiv>
          <div>
            <PublicationsSpan>Publicações</PublicationsSpan>
            <CountablePublicationSpan>6 publicações</CountablePublicationSpan>
          </div>
          <SearchInput type="text" placeholder="Buscar conteúdo" />
        </SearchDiv>

        <IssuesMainGrid>
          <IssueCard />
          <IssueCard />
          <IssueCard />
          <IssueCard />
        </IssuesMainGrid>

      </MainDiv>
    </div>
  )
}