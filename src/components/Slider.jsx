import React from "react";
import Slider from "react-slick";

const SliderSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="slide-section section-padding less">
      <div className="container">
        <div className="local-container">
          <Slider {...settings}>
            <div className="local-item">
              <img src="/images/kachori.jpg" alt="" className="img-fluid" />
            </div>
            <div className="local-item">
              <img src="/images/kachori.jpg" alt="" className="img-fluid" />
            </div>
            <div className="local-item">
              <img src="/images/kachori.jpg" alt="" className="img-fluid" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SliderSlide;
