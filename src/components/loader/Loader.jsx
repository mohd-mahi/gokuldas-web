import React from "react";

const Loader = ({ isLoading }) => {
  return (
    <div className={`loader-wrapper ${isLoading ? "active" : ""}`}>
      <div className="loader">
        <img src="/images/logo.png" alt="" />
      </div>
    </div>
  );
};

export default Loader;
