import React, { useEffect, useRef, useState } from "react";
import LoaderContext from "./LoaderContext";
import { useLocation } from "react-router";

const LoaderProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [loaderExit, setLoaderExit] = useState(null);
    const [mounted, setMounted] = useState(false);

    const location = useLocation();

    const isFirstLoad = useRef(true);

    useEffect(() => {
        const waitForImages = async () => {
            const images = Array.from(document.images).filter(
                (img) => img.loading !== "lazy"
            );
            await Promise.all(
                images.map((img) =>
                    img.complete
                        ? img.decode?.().catch(() => { })
                        : new Promise((resolve) => {
                            img.addEventListener("load", () =>
                                img.decode?.().then(resolve).catch(resolve)
                            );
                            img.addEventListener("error", resolve);
                        })
                )
            );
        };

        const handleLoadComplete = () => {
            setIsLoading(false);
            setLoaderExit(true);

            requestAnimationFrame(() => {
                if (window.lenis?.scrollTo) {
                    window.lenis.scrollTo(0, { immediate: true });
                } else {
                    window.scrollTo(0, 0);
                }
            });

            setTimeout(() => {
                setLoaderExit(false);
            }, 3000);

            setTimeout(() => {
                setMounted(true);
                isFirstLoad.current = false;
            }, 2000);
        };

        const waitForResources = async () => {
            if (document.fonts?.ready) await document.fonts.ready;
            await waitForImages();

            if (document.readyState === "complete") {
                handleLoadComplete();
            } else {
                window.addEventListener("load", handleLoadComplete);
            }
        };

        waitForResources();

        return () => {
            window.removeEventListener("load", handleLoadComplete);
        };
    }, []);

    useEffect(() => {
        if (!isFirstLoad.current) {
            setMounted(false);
            const timeout = setTimeout(() => {
                setMounted(true);
            }, 2500);
            return () => clearTimeout(timeout);
        }
    }, [location.pathname]);


    return (
        <LoaderContext.Provider value={{ isLoading, loaderExit, mounted }}>
            {children}
        </LoaderContext.Provider>
    );
};

export default LoaderProvider;
