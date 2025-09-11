import React, { useContext, useEffect, useRef } from "react";
import { Route, Routes } from "react-router";
import Lenis from "lenis";
import Aos from "aos";
import Loader from "./components/loader/Loader";
import LoaderContext from "./context/LoaderContext";
import PageNotFound from "./components/PageNotFound";

import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About/About";
import OurProduct from "./pages/Products/OurProduct";
import Review from "./pages/Review/Review";
import ContactUS from "./pages/ContactUS/ContactUS";


function App() {
    const lenisRef = useRef();
    const { isMounted, isLoading } = useContext(LoaderContext);

    useEffect(() => {
        if (!isMounted) return
        Aos.init({
            duration: 1000,
            easing: "ease-out-cubic",
            offset: 100,
        });
        Aos.refresh();

    }, [isMounted]);

    useEffect(() => {
        function easeInOutQuint(x) {
            return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
        }

        const lenis = new Lenis({
            autoRaf: false,
            duration: 1,
            easing: easeInOutQuint(),
        });

        window.lenis = lenis;
        lenisRef.current = lenis;

        function raf(time) {
            lenis.raf(time);
            Aos.refresh();
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);


    return (
        <>
            <Loader isMounted={isMounted} isLoading={isLoading} />
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<About />} />
                    <Route path="/products/:slug" element={<OurProduct />} />
                    <Route path="/review" element={<Review />} />
                    <Route path="*" element={<PageNotFound />} />
                    <Route path="/contact-us" element={<ContactUS />} />
                </Routes>
            </main>
            <Footer />
        </>

    );
}

export default App;
