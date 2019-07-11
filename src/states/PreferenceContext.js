import React, { useState, useContext } from "react";

export const CATS = 'cats';
export const DOGS = 'dogs';

const other = (current) => current === CATS ? DOGS : CATS;

const PreferenceContext = React.createContext({
    preference: CATS,
    togglePreference: () => {},
});

export const PreferenceProvider = ({ children }) => {
    const [preference, setPreference] = useState(CATS);

    const togglePreference = () => setPreference(other(preference));
    const isDogLover = () => preference === DOGS;

    return (
        <PreferenceContext.Provider value={{ preference, togglePreference, isDogLover }}>
            {children}
        </PreferenceContext.Provider>
    );
};

export const usePreference = () => useContext(PreferenceContext);
