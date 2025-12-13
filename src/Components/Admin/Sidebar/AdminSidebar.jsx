"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
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
  faUser,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import "./AdminSidebar.css";

const menuItems = [
  { path: "/admin", icon: faHome, label: "Dashboard", exact: true },
  { path: "/admin/blogs", icon: faNewspaper, label: "Blogs" },
  { path: "/admin/pages", icon: faFile, label: "Pages" },
  { path: "/admin/form-submissions", icon: faAddressBook, label: "Form Submissions" },
  { path: "/admin/emails", icon: faEnvelope, label: "Emails" },
  { path: "/admin/settings", icon: faCog, label: "Settings" },
];

export default function AdminSidebar({ user, onLogout, collapsed, onToggle }) {
  const pathname = usePathname();

  const isActive = (item) => {
    if (item.exact) {
      return pathname === item.path;
    }
    return pathname.startsWith(item.path);
  };

  return (
    <aside className={`admin-sidebar ${collapsed ? "collapsed" : ""}`}>
      {/* Logo */}
      <div className="admin-sidebar-header">
        <Link href="/admin" className="admin-sidebar-logo">
          {!collapsed && <span>DN Designs</span>}
          {collapsed && <span>DN</span>}
        </Link>
        <button className="admin-sidebar-toggle" onClick={onToggle}>
          <FontAwesomeIcon icon={collapsed ? faBars : faChevronLeft} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="admin-sidebar-nav">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`admin-sidebar-link ${isActive(item) ? "active" : ""}`}
            title={collapsed ? item.label : ""}
          >
            <FontAwesomeIcon icon={item.icon} className="admin-sidebar-icon" />
            {!collapsed && <span>{item.label}</span>}
          </Link>
        ))}
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
