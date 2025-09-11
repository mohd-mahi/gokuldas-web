import React from "react";
import Heading from "../../components/ui/Heading";
import Feature from "../../components/Feature";

const ContactUS = () => {
  return (
    <>
      <section className="contact-section section-padding less">
        <div className="container">
          <div className="local-container">
            <Heading title="Contact Us" heading="Get In Touch" />
            <div className="ctnr" data-aos="fade-up" data-aos-delay="200">
              {/* ___________google map________________ */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30176.93107515325!2d72.83286389623414!3d19.014592523148895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cedb5fa4a535%3A0x386d6d640427d1f0!2sGokuldas%20Gathiawala!5e0!3m2!1sen!2sin!4v1757565841447!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
              {/* __________shop info_______________ */}
              <div
                className="shop-info section-padding less"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="shop-address">
                  <h3>Shop Address</h3>
                  <h2>Gokuldas Gathiawala</h2>
                  <div className="sp-ads-ctnr">
                    <div className="sp-ads">
                      <img src="/images/store.png" alt="store" />
                      <p>
                        Shop No. 1, Laxmi Building, <br />
                        Dr, MC Jawale Rd, Near Kabutar Khana, <br />
                        Dadar West, Dadar, Mumbai, Maharashtra 400028
                      </p>
                    </div>
                    <div className="sp-ads">
                      <img src="/images/email.png" alt="store" />
                      <a href="mailto:info@gokuldasgathiawala.com">
                        info@gokuldasgathiawala.com
                      </a>
                    </div>
                    <div className="sp-ads">
                      <img src="/images/call.png" alt="store" />
                      <a href="tel:+919029291221">(+91) 90292 91221</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* _________contact form _____________---- */}
              <div
                className="contact-form section-padding less pb-0"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3>Have Questions?</h3>
                <h2>Write to us</h2>
                <form action="" className="form-ctnr">
                  <input type="text" placeholder="Full Name" />
                  <input type="email" placeholder="Email Address" />
                  <div className="input-mobile-nmbr">
                    <img src="/images/india.png" alt="" />
                    <input type="tel" placeholder="Mobile Number" />
                  </div>
                  <textarea placeholder="Your Message" rows="5"></textarea>
                  <div className="btn-container">
                    <button className="btnn">Submit Inquiry</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Feature cl="section-padding pt-0" />
    </>
  );
};

export default ContactUS;
