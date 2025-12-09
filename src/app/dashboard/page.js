"use client"; // Must be a client component

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check localStorage for token
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Optional loading state
  }

  if (!token) {
    return (
      <div className="text-center mt-5">
        <h2>Please signup or sign in</h2>
        <button
          className="btn btn-primary m-2"
          onClick={() => router.push("/signup")}
        >
          Signup
        </button>
        <button
          className="btn btn-secondary m-2"
          onClick={() => router.push("/signin")}
        >
          Sign In
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1>Dashboard</h1>
      <p>Welcome</p>
      <button
        className="btn btn-danger"
        onClick={() => {
          localStorage.removeItem("token");
          router.push("/signin");
        }}
      >
        Logout
      </button>
    </div>
  );
}
