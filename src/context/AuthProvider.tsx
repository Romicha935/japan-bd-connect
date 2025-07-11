// context/AuthProvider.tsx
"use client"
import React, { createContext, useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from 'firebase/auth';
import app from './../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const googleProvider = new GoogleAuthProvider()

  const createUser = (email, password) => {
    setIsLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setIsLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const googleSignIn = () => {
    setIsLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const logOut = () => {
    setIsLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser)
      setIsLoading(false)
    })
    return () => unsubscribe()
  }, [])

  const authInfo = {
    user,
    isLoading,
    createUser,
    signIn,
    googleSignIn,
    logOut
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
