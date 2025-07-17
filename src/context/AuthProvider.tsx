"use client";

import React, { createContext, useEffect, useState, ReactNode } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  User,
  UserCredential,
} from "firebase/auth";
import app from "../firebase/firebase.config";

// ✅ এখানেই টাইপ define করা
export type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  createUser: (email: string, password: string) => Promise<UserCredential>;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  googleSignIn: () => Promise<UserCredential>;
  logOut: () => Promise<void>;
};

// ✅ context create
export const AuthContext = createContext<AuthContextType | null>(null);

const auth = getAuth(app);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const googleProvider = new GoogleAuthProvider();

  // 🔹 create user
  const createUser = (email: string, password: string): Promise<UserCredential> => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // 🔹 login with email/password
  const signIn = (email: string, password: string): Promise<UserCredential> => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // 🔹 Google sign-in
  const googleSignIn = (): Promise<UserCredential> => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // 🔹 logout
  const logOut = (): Promise<void> => {
    setIsLoading(true);
    return signOut(auth);
  };

  // 🔹 Firebase user observe
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo: AuthContextType = {
    user,
    isLoading,
    createUser,
    signIn,
    googleSignIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
