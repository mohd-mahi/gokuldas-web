import { useEffect, useRef } from "react";
import "./topHeader.css";

export default function NewsTicker() {
  const items = [
    "World Wide Shipping Available | For Order WhatsApp or Call (+91) 90292 91221 | PAN India Delivery Available",
    "World Wide Shipping Available | For Order WhatsApp or Call (+91) 90292 91221 | PAN India Delivery Available",
    "World Wide Shipping Available | For Order WhatsApp or Call (+91) 90292 91221 | PAN India Delivery Available",
    "World Wide Shipping Available | For Order WhatsApp or Call (+91) 90292 91221 | PAN India Delivery Available",
  ];

  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.style.setProperty("--count", items.length);
    }
  }, [items.length]);

  return (
    <div className="ticker" aria-label="News Ticker">
      <div className="container">
        <div className="ticker__viewport">
          <ul className="ticker__list" ref={listRef}>
            {items.map((text, i) => (
              <li className="ticker__item" key={i} style={{ "--i": i }}>
                <p>
                  {text.includes("Call") ? (
                    <>
                      World Wide Shipping Available | For Order WhatsApp or Call{" "}
                      <a href="tel:+919029291221">(+91) 90292 91221</a> | PAN
                      India Delivery Available
                    </>
                  ) : (
                    text
                  )}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
