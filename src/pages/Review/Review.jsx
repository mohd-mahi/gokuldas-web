import React from "react";

import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "../../components/ui/Heading";
import testiData from "../../components/data/testimonialData";
import Feature from "../../components/Feature";

const Review = () => {
  return (
    <>
      <section className="testimonial-section section-padding">
        <div className="fix-container">
          <Heading title="What They Say" heading="Our Happy Costomers" />
          <div className="testi-wrappper">
            <div className="row g-2">
              {testiData.map((item, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div
                    className="testi-card"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="testi-content">
                      <ul className="happy-icon">
                        <li>
                          <FontAwesomeIcon icon={faFaceSmile} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faFaceSmile} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faFaceSmile} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faFaceSmile} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faFaceSmile} />
                        </li>
                      </ul>
                      <p>{item.text}</p>
                    </div>
                    <div className="author">
                      <h3>{item.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Feature cl="section-padding pt-0" />
    </>
  );
};

export default Review;
