import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import firebase from 'firebase/compat/app';
import { auth } from "../firebaseSetup";

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);

  //mount時
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {  //ログイン時
      setUser(firebaseUser);  //stateにset
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;  //user情報を子コンポーネントにわたす
};