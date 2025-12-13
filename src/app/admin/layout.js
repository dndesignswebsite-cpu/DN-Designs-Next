"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  AdminAuthProvider,
  useAdminAuth,
} from "@/Components/Admin/AdminAuthContext";
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

function AdminLayoutContent({ children }) {
  const { user, isLoading, logout } = useAdminAuth();
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

  // Loading state
  if (isLoading) {
    return (
      <div className="admin-loading-layout">
        <div className="admin-loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  // Login page - always render children
  if (isLoginPage) {
    return <div className="admin-login-wrapper">{children}</div>;
  }

  // Not logged in - redirect logic handled in Context or here visually
  if (!user) {
    if (typeof window !== "undefined") {
      window.location.href = "/admin/login";
    }
    return (
      <div className="admin-loading-layout">
        <div className="admin-loading-spinner"></div>
        <p>Redirecting to login...</p>
      </div>
    );
  }

  // Authenticated - render dashboard
  return (
    <div
      className={`admin-wrapper ${
        sidebarCollapsed ? "sidebar-collapsed" : ""
      }`}
    >
      <AdminSidebar
        user={user}
        onLogout={logout}
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <main className="admin-main">
        <div className="admin-content">{children}</div>
      </main>
    </div>
  );
}

export default function AdminLayout({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AdminAuthProvider>
        <AdminLayoutContent>{children}</AdminLayoutContent>
      </AdminAuthProvider>
    </QueryClientProvider>
  );
}
