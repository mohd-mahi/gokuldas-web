
import { useState } from "react";
import { FormLoaderContext } from "./FormLoaderContext";

const FormLoaderProvider = ({ children }) => {

    const [isVisible, setIsVisible] = useState(false);

    const showFormLoader = () => setIsVisible(true);
    const hideFormLoader = () => setIsVisible(false);

    return (
        <FormLoaderContext.Provider value={{ isVisible, showFormLoader, hideFormLoader }}>
            {children}
            {isVisible && (
                <div className="form-loader-overlay">
                    <div className="form-loader-spinner"></div>
                </div>
            )}
        </FormLoaderContext.Provider>
    );
};

export default FormLoaderProvider;
