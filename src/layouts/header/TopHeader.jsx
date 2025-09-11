import { useEffect, useRef } from "react";
import "./topHeader.css";

export default function NewsTicker() {
    const items = [
        "We deliver GLOBALLY | For India's Shipping Rates Download Chart | For Order WhatsApp or Call +919029291221",
        "We deliver GLOBALLY | For India's Shipping Rates Download Chart | For Order WhatsApp or Call +919029291221",
        "We deliver GLOBALLY | For India's Shipping Rates Download Chart | For Order WhatsApp or Call +919029291221",
        "We deliver GLOBALLY | For India's Shipping Rates Download Chart | For Order WhatsApp or Call +919029291221",
        "We deliver GLOBALLY | For India's Shipping Rates Download Chart | For Order WhatsApp or Call +919029291221",
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
                                            We deliver GLOBALLY | For India's Shipping Rates{" "}
                                            <a
                                                href="#"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Download Chart
                                            </a>{" "}
                                            | For Order{" "}
                                            <a
                                                href="https://wa.me/919029291221?text=Hello"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                WhatsApp
                                            </a>{" "}
                                            or Call <a href="tel:+919029291221">+91 90292 91221</a>
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
