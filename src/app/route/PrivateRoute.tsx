"use client";
import { AuthContext } from "@/context/AuthProvider";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useContext(AuthContext);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push(`/login?redirect=${pathname}`);
    }
  }, [user, isLoading, pathname, router]);

  if (isLoading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return <>{children}</>;
};

export default PrivateRoute;
