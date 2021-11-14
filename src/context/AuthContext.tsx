import React from "react";
import firebase from 'firebase/compat/app';

//contextオブジェクト(user)を作成
export const AuthContext = React.createContext<firebase.User | null>(null);