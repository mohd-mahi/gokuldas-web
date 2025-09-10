import React, { useContext } from "react";
import LoaderContext from "../../context/LoaderContext";

const Loader = () => {
  const { mounted } = useContext(LoaderContext);

  return (
    <div className={`loader-wrapper ${!mounted ? "active" : ""}`}>
      <div className="loader">
        <img src="/images/logo (2).png" alt="" />
      </div>
    </div>
  );
};

export default Loader;
