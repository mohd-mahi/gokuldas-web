import { useEffect, useRef } from "react";
import "./topHeader.css";
import { Link } from "react-router";

export default function NewsTicker() {
  const listRef = useRef(null);

  const items = [
    "We deliver GLOBALLY",
    "For India's Shipping Rates Download Chart",
    "For Order WhatsApp or Call +919029291221",
  ];

  useEffect(() => {
    if (listRef.current) {
      listRef.current.style.setProperty("--count", items.length);
    }
  }, [items.length]);

  // Function to render formatted content for special message
  const renderItem = (text) => {
    if (text.includes("Call")) {
      return (
        <>
          For Order{" "}
          <Link
            to="https://wa.me/919029291221?text=Hello"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </Link>
          or Call
          <a href="tel:+919029291221" rel="noopener noreferrer">
            +91 90292 91221
          </a>
        </>
      );
    } else if (text.includes("Download Chart")) {
      return (
        <>
          For India's Shipping Rates{" "}
          <Link to="#" target="_blank" rel="noopener noreferrer">
            Download Chart
          </Link>
        </>
      );
    } else {
      return text;
    }
  };

  return (
    <div className="ticker" aria-label="News Ticker">
      <div className="container">
        <div className="ticker__viewport">
          <ul className="ticker__list" ref={listRef}>
            {items.map((text, i) => (
              <li className="ticker__item" key={i} style={{ "--i": i }}>
                <p>{renderItem(text)}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
