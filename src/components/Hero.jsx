import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router";

const Hero = () => {
  const banner = [
    { url: "/images/banner-1.jpg" },
    { url: "/images/banner-2.jpg" },
    { url: "/images/banner-3.jpg" },
    { url: "/images/banner-4.jpg" },
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
                <Link to="https://wa.me/919029291221?text=Hello" target="blank">
                  <img src={v.url} alt="banner" className="img-fluid" />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
