import React, { useState } from "react";

const Feature = ({ cl }) => {
  const featuresData = [
    {
      id: 1,
      img: "/images/home/fresh.png",
      text: "MADE FRESH DAILY",
    },
    {
      id: 2,
      img: "/images/home/shop.png",
      text: "NO MINIMUM ORDERS",
    },
    {
      id: 3,
      img: "/images/home/rating.png",
      text: "SATISFACTION GUARANTEED",
    },
  ];

  const [active, setActive] = useState(featuresData[0].id);

  const toggleTitle = (id) => {
    setActive(id);
  };

  return (
    <section className={`feature-section ${cl}`}>
      <div className="container">
        <div className="local-container" data-aos="fade-up">
          {/* Normal Static Grid (desktop) */}
          <div className="row g-2 d-lg-flex d-none">
            {featuresData.map((item, index) => (
              <div className="col-md-4 col-sm-6" key={index}>
                <div className="fea-card">
                  <div className="fea-content">
                    <img src={item.img} alt="" />
                    <h6 className="fea-title">{item.text}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tab Buttons (mobile) */}
          <div className="d-block d-lg-none">
            <div className=" d-flex  justify-between">
              {featuresData.map((item, index) => (
                <div
                  key={index}
                  className={`fea-card ${active === item.id ? "active" : ""}`}
                >
                  <button type="button" onClick={() => toggleTitle(item.id)}>
                    <img src={item.img} alt="" />
                  </button>
                </div>
              ))}
            </div>

            {/* Tab Content */}
            <div className="tab-content">
              {featuresData.map(
                (item) =>
                  active === item.id && (
                    <div key={item.id} className="fea-content">
                      <h6 className="fea-title">{item.text}</h6>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
