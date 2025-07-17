"use client";

import { useContext } from "react";
import { AuthContext } from "@/context/AuthProvider";
import type { AuthContextType } from "@/context/AuthProvider";


const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useContext(AuthContext) as AuthContextType;


  if (isLoading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="text-center py-20">
        <p className="mb-4 text-lg">You must be logged in to view this page.</p>
        <a
          href="/login"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Go to Login
        </a>
      </div>
    );
  }

  return <>{children}</>;
};

export default PrivateRoute;
