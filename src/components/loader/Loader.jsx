import React from "react";

const Loader = ({ isLoading }) => {

  return (
    <div className={`loader-wrapper ${isLoading ? "active" : ""}`}>
      <div className="loader">
        <img src="/images/logo (2).png" alt="" />
      </div>
    </div>
  );
};

export default Loader;
