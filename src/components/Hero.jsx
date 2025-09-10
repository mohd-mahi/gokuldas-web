import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Hero = () => {
  return (
    <section
      className="hero-section section-padding less"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="container">
        <div className="local-container">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={5}
            loop={true}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            breakpoints={{
              569.98: {
                spaceBetween: 10,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="/images/kachori.jpg" alt="" className="img-fluid" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/kachori.jpg" alt="" className="img-fluid" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/kachori.jpg" alt="" className="img-fluid" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/kachori.jpg" alt="" className="img-fluid" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
