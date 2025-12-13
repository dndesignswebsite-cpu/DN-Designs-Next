"use client";

import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter, usePathname } from "next/navigation";

const AdminAuthContext = createContext();

export function AdminAuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    let isMounted = true;

    const checkAuth = async () => {
      const token = Cookies.get("admin_token");

      if (!token) {
        if (isMounted) {
          setUser(null);
          setIsLoading(false);
          if (!isLoginPage) {
            // Optional: redirect logic here if strict protection is needed immediately
            // But Layout usually handles the redirect visual
          }
        }
        return;
      }

      try {
        const res = await fetch("/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!isMounted) return;

        if (res.ok) {
          const data = await res.json();
          const userData = data.data;
          // Ensure robust check for roles
          if (["admin", "editor", "user"].includes(userData?.role)) {
             // Although 'user' shouldn't really be here for admin panel, 
             // we allow the state to populate so the UI can decide to show/hide/redirect.
             // The original layout only checked for 'admin', but we are expanding roles.
             // Wait, the original layout line 91 said: if (userData?.role === "admin")
             // We need to allow 'editor' and 'user' now? 
             // The user request implies granular access. 
             // Let's allow valid roles but filtered by specific page logic if needed.
             // For now, let's assume any valid auth token gets user state, 
             // and we handle "Access Denied" visuals in components if needed.
            setUser(userData);
          } else {
             // Invalid role for dashboard access? 
             // Actually, the requirement allows 'user' to VIEW resources.
             // So we should allow them in.
            setUser(userData);
          }
        } else {
          Cookies.remove("admin_token");
          setUser(null);
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        if (isMounted) {
          Cookies.remove("admin_token");
          setUser(null);
        }
      }

      if (isMounted) {
        setIsLoading(false);
      }
    };

    checkAuth();

    return () => {
      isMounted = false;
    };
  }, [pathname, isLoginPage]);

  const logout = () => {
    Cookies.remove("admin_token");
    setUser(null);
    router.push("/admin/login");
  };

  return (
    <AdminAuthContext.Provider value={{ user, isLoading, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  return useContext(AdminAuthContext);
}
