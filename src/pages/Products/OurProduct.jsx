import React from "react";
import Heading from "../../components/ui/Heading";
import Feature from "../../components/Feature";
import { Link, useParams } from "react-router";
import products from "../../components/data/accordionData";

const OurProduct = () => {
  const { slug } = useParams();

  // Find the category by slug
  const category = products.find(
    (cat) => cat.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  // If slug doesn't match, show fallback
  if (!category) {
    return (
      <section className="product-section section-padding less">
        <div className="container">
          <Heading title="Product Not Found" heading="Oops!" />
          <p>No product found for "{slug}"</p>
        </div>
      </section>
    );
  }

  const keys = [
    ...new Set(
      category.items.flatMap((item) =>
        Object.keys(item).filter(
          (k) => k !== "name" && k !== "url" && k !== "description"
        )
      )
    ),
  ];

  return (
    <>
      <section className="product-section section-padding less">
        <div className="container">
          <Heading title="Who We Are" heading={category.title} />

          <div
            className="local-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="ctnr">
              <table className="tables">
                <thead>
                  <tr>
                    <th>Item</th>
                    {keys.map((key) => (
                      <th key={key}>{key}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {category.items.map((item, idx) => (
                    <tr key={idx}>
                      <td className="td">
                        {item.url && <img src={item.url} alt={item.name} />}
                        <span>
                          {item.name}
                          <p> {item.description}</p>
                        </span>
                      </td>
                      {keys.map((key) => (
                        <td key={key}>{item[key] ?? "-"}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="btn-container">
                <Link to="?">
                  Download <span>Shipping Rates Card</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Feature cl="section-padding" />
    </>
  );
};

export default OurProduct;
