import React, { useContext, useEffect, useRef, Suspense, lazy } from "react";
import { Route, Routes } from "react-router";
import Lenis from "lenis";
import Aos from "aos";
import Loader from "./components/loader/Loader";
import LoaderContext from "./context/LoaderContext";

const Header = lazy(() => import("./layouts/header/Header"));
const Footer = lazy(() => import("./layouts/footer/Footer"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About/About"));
const OurProduct = lazy(() => import("./pages/Products/OurProduct"));
const Review = lazy(() => import("./pages/Review/Review"));

function App() {
  const lenisRef = useRef();
  const { mounted } = useContext(LoaderContext);

  useEffect(() => {
    if (mounted) {
      Aos.init({
        duration: 1000,
        easing: "ease-out-cubic",
        offset: 100,
      });
      Aos.refresh();
    }
  }, [mounted]);

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

  if (!mounted) return <Loader />;

  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/products/:slug" element={<OurProduct />} />
        <Route path="/review" element={<Review />} />
        {/* <Route path="*" element={<PageNotFound/>} /> */}
      </Routes>
      <Footer />
    </Suspense>
  );
}

export default App;
