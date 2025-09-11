import React, { useState, useRef, useEffect } from "react";
import Heading from "./ui/Heading";
import products from "./data/accordionData";
import { Fancybox } from "@fancyapps/ui";

const Explore = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      Thumbs: false,
      Toolbar: {
        display: ["zoom", "fullscreen", "close"],
      },
      closeButton: "inside",
      dragToClose: true,
      animated: true,
      infinite: false,
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <section className="explore-section section-padding">
      <div className="container">
        <div className="local-container">
          <Heading title="Pick Your Taste" heading="Explore Snacks" />
          <div className="accordion" id="accordionExample">
            {products.map((item, index) => {
              const isOpen = activeIndex === index;
              const contentRef = useRef(null);
              useEffect(() => {
                if (isOpen) {
                  contentRef.current.style.height =
                    contentRef.current.scrollHeight + "px";
                } else {
                  contentRef.current.style.height = "0px";
                }
              }, [isOpen]);

              return (
                <div
                  className="accordion-item"
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${
                        isOpen ? "" : "collapsed"
                      }`}
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => toggleAccordion(index)}
                    >
                      {/* <img src={item.img} alt={item.title} /> */}
                      {item.title}
                    </button>
                  </h2>
                  <div
                    ref={contentRef}
                    className="accordion-collapse"
                    style={{ height: "0px" }}
                  >
                    <div className="accordion-body">
                      <table className="tables">
                        <thead>
                          <tr>
                            <th>Item</th>
                            {[
                              ...new Set(
                                item.items.flatMap((row) =>
                                  Object.keys(row).filter(
                                    (k) =>
                                      k !== "name" &&
                                      k !== "url" &&
                                      k !== "description"
                                  )
                                )
                              ),
                            ].map((key) => (
                              <th key={key}>{key}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {item.items.map((row, i) => {
                            const keys = [
                              ...new Set(
                                item.items.flatMap((r) =>
                                  Object.keys(r).filter(
                                    (k) =>
                                      k !== "name" &&
                                      k !== "url" &&
                                      k !== "description"
                                  )
                                )
                              ),
                            ];
                            return (
                              <tr key={i}>
                                <td className="td">
                                  {row.url && (
                                    <a
                                      href={row.url}
                                      data-fancybox={`img-${index}-${i}`}
                                      data-caption={row.name}
                                    >
                                      <img
                                        src={row.url}
                                        alt={row.name}
                                        style={{
                                          cursor: "pointer",
                                          maxWidth: "80px",
                                        }}
                                      />
                                    </a>
                                  )}
                                  {row.name}
                                </td>
                                {keys.map((key) => (
                                  <td key={key}>{row[key] ?? "-"}</td>
                                ))}
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
