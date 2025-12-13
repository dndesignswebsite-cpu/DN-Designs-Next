"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";
import AdminSidebar from "@/Components/Admin/Sidebar/AdminSidebar";
import "./admin.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});

export default function AdminLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const pathname = usePathname();

  const isLoginPage = pathname === "/admin/login";

  // Load saved theme on mount
  useEffect(() => {
    const savedColor = localStorage.getItem("admin-primary-color");
    if (savedColor) {
      const lightenColor = (hex, percent) => {
        const num = parseInt(hex.replace("#", ""), 16);
        const amt = Math.round(2.55 * percent);
        const R = Math.min((num >> 16) + amt, 255);
        const G = Math.min(((num >> 8) & 0x00ff) + amt, 255);
        const B = Math.min((num & 0x0000ff) + amt, 255);
        return `#${(0x1000000 + R * 0x10000 + G * 0x100 + B)
          .toString(16)
          .slice(1)}`;
      };
      const darkenColor = (hex, percent) => {
        const num = parseInt(hex.replace("#", ""), 16);
        const amt = Math.round(2.55 * percent);
        const R = Math.max((num >> 16) - amt, 0);
        const G = Math.max(((num >> 8) & 0x00ff) - amt, 0);
        const B = Math.max((num & 0x0000ff) - amt, 0);
        return `#${(0x1000000 + R * 0x10000 + G * 0x100 + B)
          .toString(16)
          .slice(1)}`;
      };

      const root = document.documentElement;
      root.style.setProperty("--admin-primary", savedColor);
      root.style.setProperty(
        "--admin-primary-light",
        lightenColor(savedColor, 15)
      );
      root.style.setProperty(
        "--admin-primary-dark",
        darkenColor(savedColor, 15)
      );
      root.style.setProperty("--admin-secondary", lightenColor(savedColor, 15));
    }
  }, []);

  useEffect(() => {
    let isMounted = true;

    const checkAuth = async () => {
      const token = Cookies.get("admin_token");

      if (!token) {
        if (isMounted) {
          setUser(null);
          setIsLoading(false);
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
          // API returns { success: true, data: user }
          const userData = data.data;
          if (userData?.role === "admin") {
            setUser(userData);
          } else {
            Cookies.remove("admin_token");
            setUser(null);
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
  }, []);

  const handleLogout = () => {
    Cookies.remove("admin_token");
    setUser(null);
    window.location.href = "/admin/login";
  };

  // Loading state
  if (isLoading) {
    return (
      <QueryClientProvider client={queryClient}>
        <div className="admin-loading-layout">
          <div className="admin-loading-spinner"></div>
          <p>Loading...</p>
        </div>
      </QueryClientProvider>
    );
  }

  // Login page - always render children
  if (isLoginPage) {
    return (
      <QueryClientProvider client={queryClient}>
        <div className="admin-login-wrapper">{children}</div>
      </QueryClientProvider>
    );
  }

  // Not logged in - redirect to login
  if (!user) {
    // Use window.location for reliable redirect
    if (typeof window !== "undefined") {
      window.location.href = "/admin/login";
    }
    return (
      <QueryClientProvider client={queryClient}>
        <div className="admin-loading">
          <div className="admin-loading-spinner"></div>
          <p>Redirecting to login...</p>
        </div>
      </QueryClientProvider>
    );
  }

  // Authenticated - render dashboard
  return (
    <QueryClientProvider client={queryClient}>
      <div
        className={`admin-wrapper ${
          sidebarCollapsed ? "sidebar-collapsed" : ""
        }`}
      >
        <AdminSidebar
          user={user}
          onLogout={handleLogout}
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
        <main className="admin-main">
          <div className="admin-content">{children}</div>
        </main>
      </div>
    </QueryClientProvider>
  );
}
