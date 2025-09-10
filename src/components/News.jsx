import React from "react";
import Heading from "./ui/Heading";

const News = () => {
  const foodData = [
    {
      date: "14 DEC 2019",
      img: "/images/kachori.jpg",
      text: "Pellentesque habitant morbi tristique senectus et netus et malesuada ...",
      delay: "100",
    },
    {
      date: "23 FEB 2020",
      img: "/images/kachori.jpg",
      text: "Pellentesque habitant morbi tristique senectus et netus et malesuada ...",
      delay: "250",
    },
    {
      date: "01 MAR 2020",
      img: "/images/kachori.jpg",
      text: "Pellentesque habitant morbi tristique senectus et netus et malesuada ...",
      delay: "400",
    },
  ];

  return (
    <section className="news-section section-padding pt-0">
      <div className="container">
        <Heading title="What`s Happening" heading="News & Events" />
        <div className="row g-3">
          {foodData.map((item, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={index}
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <div className="news-card">
                <div className="news-img">
                  <img src={item.img} alt="" className="img-fluid" />
                </div>
                <div className="news-content">
                  <div className="squre-box">{item.date}</div>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
