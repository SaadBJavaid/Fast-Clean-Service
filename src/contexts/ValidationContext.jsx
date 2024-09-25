"use client";
import React, {createContext, useContext, useState} from 'react';

const ValidationContext = createContext(null);

export const ValidationProvider = ({ children }) => {
    const [isValid, setIsValid] = useState(false);

    const updateValidation = (valid) => {
        setIsValid(valid);
    };

    return (
        <ValidationContext.Provider value={{ isValid, updateValidation }}>
            {children}
        </ValidationContext.Provider>
    );
};

export const useValidation = () => useContext(ValidationContext);
