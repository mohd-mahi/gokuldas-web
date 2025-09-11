import { createContext, useContext } from "react";

export const FormLoaderContext = createContext({
    isVisible: false,
    showFormLoader: () => { },
    hideFormLoader: () => { },
});

export const useFormLoader = () => useContext(FormLoaderContext);
