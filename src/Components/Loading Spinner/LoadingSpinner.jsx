import React from "react";
import "./LoadingSpinner.css";

const LoadingSpinner = ({ isLoading, children, error }) => {
  return (
    <>
      {isLoading ? (
        <div className="loader-container" style={{ padding: "40px" }}>
          <div className="loader-spinner"></div>
        </div>
      ) : error ? (
        <div className="loader-alert loader-alert-error">{error}</div>
      ) : (
        children
      )}
    </>
  );
};

export default LoadingSpinner;
