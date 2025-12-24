"use client";

import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faFile,
  faAddressBook,
  faEnvelope,
  faEye,
  faPlus,
  faChartLine,
  faFolder,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useAdminAuth } from "@/Components/Admin/AdminAuthContext";

const fetchWithAuth = async (url) => {
  const token = Cookies.get("admin_token");
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

export default function AdminDashboard() {
  const { user } = useAdminAuth();
  const canCreate = user?.role === "admin" || user?.role === "editor";
  const canSend = user?.role === "admin" || user?.role === "editor";
  // Fetch stats
  const { data: contactStats } = useQuery({
    queryKey: ["contactStats"],
    queryFn: () => fetchWithAuth("/api/contact/stats/summary"),
  });

  const { data: pageStats } = useQuery({
    queryKey: ["pageStats"],
    queryFn: () => fetchWithAuth("/api/pages/stats"),
  });

  const { data: blogs } = useQuery({
    queryKey: ["blogStats"],
    queryFn: () => fetchWithAuth("/api/blogs?limit=1"),
  });

  const { data: recentContacts } = useQuery({
    queryKey: ["recentContacts"],
    queryFn: () => fetchWithAuth("/api/contact?limit=5&status=new"),
  });

  return (
    <div className="admin-dashboard">
      <div className="admin-page-header">
        <h1 className="admin-page-title">Dashboard</h1>
        <p className="admin-page-subtitle">
          Welcome back! Here&apos;s an overview of your website.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <div className="admin-stat-icon blue">
            <FontAwesomeIcon icon={faNewspaper} />
          </div>
          <div className="admin-stat-content">
            <h3>{blogs?.total || 0}</h3>
            <p>Total Blogs</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon green">
            <FontAwesomeIcon icon={faFile} />
          </div>
          <div className="admin-stat-content">
            <h3>{pageStats?.data?.total || 0}</h3>
            <p>Total Pages</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon orange">
            <FontAwesomeIcon icon={faAddressBook} />
          </div>
          <div className="admin-stat-content">
            <h3>{contactStats?.data?.total || 0}</h3>
            <p>Total Form Submissions</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon red">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className="admin-stat-content">
            <h3>{contactStats?.data?.new || 0}</h3>
            <p>New Messages</p>
          </div>
        </div>
      </div>

      {/* Quick Actions & Chart Placeholder */}
      <div className="admin-dashboard-grid">
        <div className="admin-card">
          <div className="admin-card-header">
            <h2 className="admin-card-title">Quick Actions</h2>
          </div>
          <div className="admin-quick-actions">
            {canCreate && (
              <Link href="/admin/blogs/new" className="admin-quick-action">
                <FontAwesomeIcon icon={faPlus} />
                <span>New Blog Post</span>
              </Link>
            )}
            {canCreate && (
              <Link href="/admin/pages/new" className="admin-quick-action">
                <FontAwesomeIcon icon={faPlus} />
                <span>New Page</span>
              </Link>
            )}
            <Link href="/admin/form-submissions" className="admin-quick-action">
              <FontAwesomeIcon icon={faEye} />
              <span>Form Submissions</span>
            </Link>
            {canSend && (
              <Link href="/admin/emails" className="admin-quick-action">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>Send Email</span>
              </Link>
            )}
            {canCreate && (
              <Link href="/admin/categories" className="admin-quick-action">
                <FontAwesomeIcon icon={faFolder} />
                <span>Categories</span>
              </Link>
            )}
            {canCreate && (
              <Link href="/admin/tags" className="admin-quick-action">
                <FontAwesomeIcon icon={faTags} />
                <span>Tags</span>
              </Link>
            )}
          </div>
        </div>

        <div className="admin-card">
          <div className="admin-card-header">
            <h2 className="admin-card-title">Analytics Overview</h2>
          </div>
          <div className="admin-chart-placeholder">
            <FontAwesomeIcon icon={faChartLine} />
            <p>Chart will be displayed here</p>
            <span>Connect analytics to see visitor data</span>
          </div>
        </div>
      </div>

      {/* Recent Submissions */}
      <div className="admin-card">
        <div className="admin-card-header">
          <h2 className="admin-card-title">Recent Form Submissions</h2>
          <Link
            href="/admin/form-submissions"
            className="admin-btn admin-btn-outline admin-btn-sm"
          >
            View All
          </Link>
        </div>

        {recentContacts?.data?.length > 0 ? (
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Page</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentContacts.data.map((contact) => (
                  <tr key={contact._id}>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.pageName || "-"}</td>
                    <td>{new Date(contact.createdAt).toLocaleDateString()}</td>
                    <td>
                      <span
                        className={`admin-badge admin-badge-${
                          contact.status === "new" ? "warning" : "success"
                        }`}
                      >
                        {contact.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="admin-empty">
            <p>No recent contacts</p>
          </div>
        )}
      </div>
    </div>
  );
}
