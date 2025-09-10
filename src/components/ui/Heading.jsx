import React from "react";

const Heading = ({ title, heading }) => {
  return (
    <div className="heading-container">
      <p data-aos="fade-up" data-aos-delay="100">
        {title}
      </p>
      <h2 className="heading" data-aos="fade-up" data-aos-delay="300">
        {heading}
      </h2>
    </div>
  );
};

export default Heading;
