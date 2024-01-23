import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { URL } from "../url";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try{
      const res = await axios.get(URL + "/api/auth/refetch", {withCredentials: true});
      setUser(res.data); //after refreshing user will not automatic logged out
    }catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
    getUser();
  },[])
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
