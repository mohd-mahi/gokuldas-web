import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Hero = () => {
  const banner = [
    { url: "/images/hero.jpg" },
    { url: "/images/hero-2.jpg" },
    { url: "/images/hero.jpg" },
    { url: "/images/hero-3.jpg" },
  ];
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
            {banner.map((v, i) => (
              <SwiperSlide key={i}>
                <a href="https://wa.me/919029291221?text=Hello">
                  <img src={v.url} alt="banner" className="img-fluid" />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
