import { createContext, ReactNode, useState, useEffect } from "react";
import { api } from "../lib/axios";

interface IssuesContextType {
  userInfos: UserProfile | null;
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

  async function fetchUsers(user: string) {
    try {
      const response = await api.get(`/users/${user}`);
      const userData = response.data;

      const profileData: UserProfile = {
        avatar_url: userData.avatar_url,
        bio: userData.bio,
        company: userData.company,
        name: userData.name,
        html_url: userData.html_url,
        followers: userData.followers,
        login: userData.login,
      };

      setUserInfos(profileData);
    } catch (error) {
      console.error('Erro ao buscar o usuário:', error);
    }
  }

  useEffect(() => {
    fetchUsers('RodGondin');
  }, []);

  return (
    <IssuesContext.Provider value={{ userInfos }}>
      {children}
    </IssuesContext.Provider>
  );
}