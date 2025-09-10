import React from "react";
import Heading from "../../../components/ui/Heading";

const AboutUs = () => {
  return (
    <section className="about-us-section section-padding less pb-0">
      <div className="container">
        <div className="local-container">
          <Heading title="Who We Are" heading="About Us" />
          <div className="ctnr" data-aos="fade-up" data-aos-delay="300">
            <img
              src="/images/kachori.jpg"
              alt="ABouts-us-img"
              className="img-fluid d-block"
            />
          </div>
          <div className="about-us-text">
            <h3 data-aos="fade-up" data-aos-delay="100">
              We at Gokuldas Gathiawala believe that qualityis never anaccident;
            </h3>
            <h4 data-aos="fade-up" data-aos-delay="300">
              it is always the result of high intention, sincere effort &
              experience...
            </h4>
            <p className="ab-para" data-aos="fade-up" data-aos-delay="200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              nibh dui, finibus quis egestas iaculis, mollis ut libero. Nunc at
              venenatis orci, pretium cursus quam. Sed rutrum mauris ac
              vestibulum vulputate. Nullam nulla leo, scelerisque eu accumsan
              quis, eleifend et quam. Nullam sapien leo, ullamcorper vitae augue
              id, bibendum mattis neque. Morbi at diam ut ex placerat dignissim
              ut sit amet sem. Sed quis dui non nisi porta facilisis a eget leo.
              Cras ut nisi eu augue imperdiet scelerisque eget quis augue.
              Vivamus eget vestibulum enim. Integer a convallis magna.
            </p>
            <p data-aos="fade-up" data-aos-delay="300">
              Vestibulum eu tortor at mi elementum sagittis. Integer turpis
              diam, condimentum vel volutpat eu, accumsan nec nulla. Sed a
              sollicitudin libero. Praesent id tincidunt tellus, eu ultrices
              nisi. Nullam sed mauris non dolor dictum lacinia. Vestibulum vitae
              consequat justo. Praesent vitae dictum lorem, vitae efficitur est.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
