import React from "react";

const LoadingSpinner = ({ isLoading, children, error }) => {
  return (
    <>
      {isLoading ? (
        <div className="admin-loading" style={{ padding: "40px" }}>
          <div className="admin-loading-spinner"></div>
        </div>
      ) : error ? (
        <div className="admin-alert admin-alert-error">{error}</div>
      ) : (
        children
      )}
    </>
  );
};

export default LoadingSpinner;
