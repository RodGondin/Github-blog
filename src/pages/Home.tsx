import { ArrowSquareOut, Building, GithubLogo, Users } from "@phosphor-icons/react"
import { Header } from "../components/Header"
import { MainDiv, ProfileSection, FirstInfosDiv, DescriptionProfileParagraph, LastInfosDiv, InfosDivProfile, SearchDiv, PublicationsSpan, CountablePublicationSpan, SearchInput, IssuesMainGrid, IssueCard } from "./styles"


export function Home() {
  return (
    <div>
      <Header />
      <MainDiv>
        <ProfileSection>
          <img src="https://avatars.githubusercontent.com/u/71518244?v=4" alt="github profile photo" />
          <InfosDivProfile>
            <FirstInfosDiv>
              <p>Rodrigo Gondin Gevaerd</p>
              <div>
                <a href="github">GITHUB </a>
                <ArrowSquareOut size={12} color="#3294F8" />
              </div>
            </FirstInfosDiv>
            <DescriptionProfileParagraph>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</DescriptionProfileParagraph>
            <LastInfosDiv>
              <div>
                <GithubLogo size={14} />
                <span>RodGondin</span>
              </div>
              <div>
                <Building size={14} />
                <span>Compasso UOL</span>
              </div>
              <div>
                <Users size={14} />
                <span>32 seguidores</span>
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
          <IssueCard>
            <div>
              <span>JavaScript data types and data structures</span>
              <span>Há 1 dia</span>
            </div>
            <p>
              Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
            </p>
          </IssueCard>
          <IssueCard>
            <div>
              <span>JavaScript data types and data structures</span>
              <span>Há 1 dia</span>
            </div>
            <p>
              Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
            </p>
          </IssueCard>
          <IssueCard>
            <div>
              <span>JavaScript data types and data structures</span>
              <span>Há 1 dia</span>
            </div>
            <p>
              Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
            </p>
          </IssueCard>
          <IssueCard>
            <div>
              <span>JavaScript data types and data structures</span>
              <span>Há 1 dia</span>
            </div>
            <p>
              Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
            </p>
          </IssueCard>
        </IssuesMainGrid>

      </MainDiv>
    </div>
  )
}