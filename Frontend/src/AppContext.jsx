import React from "react";
import { createContext, useState, useContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [appState, setAppState] = useState({

    });

    return (
        <AppContext.Provider value={[appState, setAppState]}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    return context;
}
