import { createContext, useEffect, useState, type PropsWithChildren } from "react"
import { users, type User } from "../data/user-data";

// interface UserContextProps {
//     children: React.ReactNode;
// }

type AuthStatus = 'checking' | 'authenticated' | 'NoAuthenticated'; 

interface UsercontextProps {
    //state
    authStatus: AuthStatus;
    isAuthenticated: boolean;
    user: User | null;
    //methods
    login: (userId: number) =>boolean;
    logout: () =>void;

}

export const UserContext = createContext({} as UsercontextProps);

export const UserContextProvider = ({children}: PropsWithChildren) => {

const [authStatus, setAuthStatus] = useState<AuthStatus> ('checking');
const [user, setUser] = useState<User | null> (null);

const handleLogin = (userId: number)=>{
    // console.log({userId});
    const user = users.find(user => user.id ===userId);
    if(!user){
        console.log(`not user found ${userId}`);
        setUser(null);
        setAuthStatus('NoAuthenticated');
        return false;
    }
    setUser(user);
    setAuthStatus('authenticated');
    localStorage.setItem('userId', userId.toString());
    return true;
}

const handleLogout = ()=>{
    console.log('logout');
    setAuthStatus('NoAuthenticated');
    setUser(null);
    localStorage.removeItem('userid');
}

useEffect(()=>{
  const storageUserId = localStorage.getItem('userId');
  if(storageUserId){
    handleLogin(+storageUserId);
  }else{
    handleLogout();
  }
},[])



//HOC
  return <UserContext value={{
    authStatus: authStatus,
    isAuthenticated: authStatus === 'authenticated',
    user: user,
    login:handleLogin,
    logout:handleLogout,
  }}>
    {children}
  </UserContext>
}
