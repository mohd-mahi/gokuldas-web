import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "./ui/Heading";
import testiData from "./data/testimonialData";

const Testimonial = () => {
  return (
    <section className="testimonial-section section-padding">
      <div className="fix-container">
        <Heading title="What They Say" heading="Our Happy Costomers" />
        <div className="testi-wrappper">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {testiData.slice(0, 3).map((item, index) => (
              <SwiperSlide key={index}>
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
