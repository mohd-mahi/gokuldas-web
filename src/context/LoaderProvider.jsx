import React, { useEffect, useRef, useState } from "react";
import LoaderContext from "./LoaderContext";
import { useLocation } from "react-router";
import imagesLoaded from "imagesloaded";

const LoaderProvider = ({ children }) => {
    const location = useLocation();

    const [isLoading, setIsLoading] = useState(true);
    const [isMounted, setMounted] = useState(false);
    const isFirstLoading = useRef(true);
    const [isAssetsLoaded, setIsAssetsLoaded] = useState(false);

    const waitForResources = async () => {
        try {
            if (document.fonts?.ready) await document.fonts.ready;

            await new Promise((resolve) => {
                imagesLoaded(document.body, { background: true }, () => {
                    resolve();
                });
            });
        } catch (err) {
            console.warn("Resource wait failed:", err);
        }
    };

    useEffect(() => {
        const handleLoadComplete = () => {
            setIsLoading(false);

            requestAnimationFrame(() => {
                if (window.lenis?.scrollTo) {
                    window.lenis.scrollTo(0, { immediate: true });
                } else {
                    window.scrollTo(0, 0);
                }
            });
            isFirstLoading.current = false;
            setTimeout(() => {
                setMounted(true);
            }, 400);
        };

        const startLoading = async () => {
            await waitForResources();
            if (document.readyState === "complete") {
                handleLoadComplete();
            } else {
                window.addEventListener("load", handleLoadComplete, { once: true });
            }
        };

        startLoading();

        return () => {
            window.removeEventListener("load", handleLoadComplete);
        };

    }, []);

    useEffect(() => {
        if (isFirstLoading.current) return;
        setMounted(false);
        setIsAssetsLoaded(false);

        const completeLoading = async () => {
            await waitForResources();
            setIsAssetsLoaded(true);
            setMounted(true);
        };

        requestAnimationFrame(() => {
            setTimeout(() => {
                completeLoading();
            }, 100);
        });

    }, [location.pathname]);

    return (
        <LoaderContext.Provider
            value={{
                isLoading,
                isMounted,
                setMounted,
                isAssetsLoaded,
                isFirstLoading,
            }}
        >
            {children}
        </LoaderContext.Provider>
    );
};

export default LoaderProvider;
