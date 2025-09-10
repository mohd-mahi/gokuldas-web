import React from "react";

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="container">
        <div className="banner-row">
          <div className="banner-content local-container">
            <img
              src="/images/coffee.png"
              data-aos="fade-up"
              data-aos-delay="100"
            />
            <p data-aos="fade-up" data-aos-delay="300">
              We at <b>Gokuldas Gathiawala</b> believe that quality is never an
              accident; it is always the result of high intention, sincere
              effort & experience...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
