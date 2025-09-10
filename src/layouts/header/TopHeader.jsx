import { useEffect, useRef } from "react";
import "./topHeader.css";

export default function NewsTicker() {
  const items = [
    "Govt unveils new digital health initiative nationwide.",
    "Markets open higher as tech stocks rally in early trade.",
    "Monsoon intensifies; IMD issues heavy rain advisory.",
    "ISRO announces date for next commercial satellite launch.",
    "Fuel prices stable across metros for third straight day.",
  ];

  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.style.setProperty("--count", items.length);
    }
  }, [items.length]);

  return (
    <div className="ticker" aria-label="News Ticker">
      {/* <span className="ticker__label">News</span> */}

      <div className="container">
        <div className="ticker__viewport">
          <ul className="ticker__list" ref={listRef}>
            {items.map((text, i) => (
              <li className="ticker__item" key={i} style={{ ["--i"]: i }}>
                <a href="#">{text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
