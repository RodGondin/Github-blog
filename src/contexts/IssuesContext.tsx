import { createContext, ReactNode, useState, useEffect } from "react";
import { api } from "../lib/axios";

export interface IssuesContextType {
  userInfos: UserProfile | null;
  issueInfos: IssueType | null;
  fetchIssues: (
    query: string | null,
    user: string,
    repo: string
  ) => Promise<void>;
}

interface IssueItem {
  html_url: string | undefined;
  id: number;
  number: number;
  title: string;
  body: string;
  url: string;
  created_at: string;
  comments: number;
  user: {
    login: string;
    avatar_url: string;
  };
}

export interface IssueType {
  incomplete_results: boolean;
  items: IssueItem[];
  total_count: number;
}
interface UserProfile {
  avatar_url: string;
  bio: string;
  company?: string;
  name: string;
  html_url: string;
  followers: number;
  login: string;
}

interface IssuesProviderProps {
  children: ReactNode;
}

export const IssuesContext = createContext<IssuesContextType | undefined>(undefined);

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [userInfos, setUserInfos] = useState<UserProfile | null>(null);
  const [issueInfos, setIssueInfos] = useState<IssueType | null>(null);

  async function fetchUsers(user: string) {
    try {
      const response = await api.get(`/users/${user}`);
      const userData = response.data;

      setUserInfos({
        avatar_url: userData.avatar_url,
        bio: userData.bio,
        company: userData.company,
        name: userData.name,
        html_url: userData.html_url,
        followers: userData.followers,
        login: userData.login,
      });
    } catch (error) {
      console.error('Erro ao buscar o usuário:', error);
    }
  }

  async function fetchIssues(query: string | null, user: string, repo: string) {
    try {
      const response = await api.get('/search/issues', {
        params: {
          q: `${query} repo:${user}/${repo}`,
        },
      });
      setIssueInfos(response.data);
    } catch (error) {
      console.error('Error fetching issues:', error);
    }
  }

  useEffect(() => {
    fetchUsers('RodGondin');
    fetchIssues('', 'RodGondin', 'Github-blog');
  }, []);
  return (
    <IssuesContext.Provider value={{ userInfos, issueInfos, fetchIssues }}>
      {children}
    </IssuesContext.Provider>
  );
}