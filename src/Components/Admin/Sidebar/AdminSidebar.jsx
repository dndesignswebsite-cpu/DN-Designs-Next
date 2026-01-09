"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faNewspaper,
  faFile,
  faEnvelope,
  faAddressBook,
  faSignOutAlt,
  faBars,
  faChevronLeft,
  faChevronRight,
  faUser,
  faCog,
  faList,
  faTags,
  faPlus,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import "./AdminSidebar.css";

export default function AdminSidebar({ user, onLogout, collapsed, onToggle }) {
  const pathname = usePathname();
  const [blogsOpen, setBlogsOpen] = useState(false);

  // Keep blogs menu open if we are on a blog-related page
  // Keep blogs menu open if we are on a blog-related page but ONLY if not collapsed
  useEffect(() => {
    if (
      !collapsed &&
      (pathname.startsWith("/admin/blogs") ||
        pathname.startsWith("/admin/categories") ||
        pathname.startsWith("/admin/tags"))
    ) {
      setBlogsOpen(true);
    } else if (collapsed) {
      // Logic for when it collapses automatically is handled by the toggle button/Link click,
      // but ensuring it doesn't force open is key.
      setBlogsOpen(false);
    }
  }, [pathname, collapsed]);

  const menuItems = [
    {
      path: "/admin",
      icon: faHome,
      label: "Dashboard",
      exact: true,
      show: true,
    },
    {
      label: "Blogs",
      icon: faNewspaper,
      show: true,
      isParent: true,
      isOpen: blogsOpen,
      onToggle: () => setBlogsOpen(!blogsOpen),
      subItems: [
        {
          path: "/admin/blogs",
          label: "All Blogs",
          icon: faList,
          exact: true,
          show: true,
        },
        {
          path: "/admin/blogs/new",
          label: "Create New",
          icon: faPlus,
          show: ["admin", "editor"].includes(user?.role),
        },
        {
          path: "/admin/categories",
          label: "Categories",
          icon: faTags,
          show: true,
        },
        {
          path: "/admin/tags",
          label: "Tags",
          icon: faTags,
          show: true,
        },
      ],
    },
    {
      path: "/admin/gallery",
      icon: faImage,
      label: "Gallery",
      show: true,
    },
    {
      path: "/admin/pages",
      icon: faFile,
      label: "Pages",
      show: true,
    },
    {
      path: "/admin/form-submissions",
      icon: faAddressBook,
      label: "Form Submissions",
      show: true,
    },
    {
      path: "/admin/emails",
      icon: faEnvelope,
      label: "Emails",
      show: true,
    },
    {
      path: "/admin/users",
      icon: faAddressBook,
      label: "Users",
      show: user?.role === "admin",
    },
    {
      path: "/admin/settings",
      icon: faCog,
      label: "Settings",
      show: true,
    },
  ];

  const isActive = (path, exact) => {
    if (exact) {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <aside className={`admin-sidebar ${collapsed ? "collapsed" : ""}`}>
      {/* Logo */}
      <div className="admin-sidebar-header">
        <Link href="/admin" className="admin-sidebar-logo">
          {!collapsed && (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/logo.webp"
                  alt=""
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
              <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                <span>DN Designs</span>
              </div>
            </div>
          )}
          {collapsed && (
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/logo.webp"
                alt=""
                style={{ width: "30px", height: "30px" }}
              />{" "}
            </div>
          )}
        </Link>
        <button className="admin-sidebar-toggle" onClick={onToggle}>
          <FontAwesomeIcon icon={collapsed ? faBars : faChevronLeft} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="admin-sidebar-nav">
        {menuItems
          .filter((item) => item.show)
          .map((item, index) => {
            if (item.isParent) {
              const anySubActive = item.subItems.some((sub) =>
                isActive(sub.path, sub.exact)
              );
              return (
                <div key={index} className="admin-sidebar-parent-group">
                  <button
                    className={`admin-sidebar-link has-submenu ${
                      blogsOpen ? "open" : ""
                    } ${anySubActive ? "active" : ""}`}
                    onClick={item.onToggle}
                    aria-expanded={blogsOpen}
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="admin-sidebar-icon"
                    />
                    {!collapsed && (
                      <>
                        <span>{item.label}</span>
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="admin-sidebar-link-chevron"
                        />
                      </>
                    )}
                  </button>
                  {blogsOpen && (
                    <div className="admin-sidebar-submenu">
                      {item.subItems
                        .filter((sub) => sub.show)
                        .map((subItem) => (
                          <Link
                            key={subItem.path}
                            href={subItem.path}
                            className={`admin-sidebar-sublink ${
                              isActive(subItem.path, subItem.exact)
                                ? "active"
                                : ""
                            }`}
                            onClick={() => {
                              if (collapsed) setBlogsOpen(false);
                            }}
                          >
                            <FontAwesomeIcon
                              icon={subItem.icon}
                              className="admin-sidebar-icon"
                              style={{ fontSize: "0.8rem" }}
                            />
                            <span>{subItem.label}</span>
                          </Link>
                        ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`admin-sidebar-link ${
                  isActive(item.path, item.exact) ? "active" : ""
                }`}
                title={collapsed ? item.label : ""}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="admin-sidebar-icon"
                />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
      </nav>

      {/* User Section */}
      <div className="admin-sidebar-footer">
        {user && (
          <Link
            href="/admin/settings"
            className="admin-sidebar-user"
            title={collapsed ? "Settings" : ""}
          >
            <div className="admin-sidebar-avatar">
              {user.avatar ? (
                <img src={user.avatar} alt={user.name} />
              ) : (
                <FontAwesomeIcon icon={faUser} />
              )}
            </div>
            {!collapsed && (
              <div className="admin-sidebar-user-info">
                <span className="admin-sidebar-user-name">{user.name}</span>
                <span className="admin-sidebar-user-role">{user.role}</span>
              </div>
            )}
          </Link>
        )}
        <button
          className="admin-sidebar-logout"
          onClick={onLogout}
          title="Logout"
        >
          <FontAwesomeIcon icon={faSignOutAlt} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
