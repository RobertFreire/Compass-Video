import React, { createContext, ReactNode, useContext, useState } from 'react';
import { createRequestToken } from './ApiAuth';
import config from '../../shared/constant';

interface User {
  id: number;
  name: string;
  userName: string;
  photo: string;
}

interface UserContextType {
  user: User | null;
  authenticated: boolean;
  setAuthenticated: (value: boolean) => void;
  getUserInfo: (session: string) => void;
  login: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [authenticated, setAuthenticated] = useState(false);


  const login = async () => {

    try {
      const requestToken = await createRequestToken();
      localStorage.setItem('Token', requestToken);
      window.location.href = `${config.MAIN_URL}authenticate/${requestToken}?redirect_to=${config.MY_URL}callback`;
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const getUserInfo = async (session :string) => {
    try {
      if (!session) {
        console.error('getUserInfo: Session não fornecida.');
        return;
      }
      const response = await fetch(`https://api.themoviedb.org/3/account?api_key=${config.API_KEY}&session_id=${session}`);
      const data = await response.json();
  
      if (data) {
        return setUser({
          id: data.id,
          name: data.name,
          userName: data.username,
          photo: 'https://www.themoviedb.org/t/p/w500' + data.avatar.tmdb.avatar_path, 
        });
        
      } else {
        console.error('getUserInfo: Dados do usuário inválidos:', data);
      }
    } catch (error) {
      console.error('getUserInfo: Erro ao buscar informações do usuário:', error);
    }
  };




  return (
    <UserContext.Provider value={{ authenticated, setAuthenticated, user, getUserInfo , login}}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export { UserProvider, useUser };
