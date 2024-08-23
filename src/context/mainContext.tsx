'use client'
import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface MainContextProps {
    navToggle: boolean;
    currentIndex: number;
    setCurrentIndex: Dispatch<SetStateAction<number>>;
    setNavToggle: Dispatch<SetStateAction<boolean>>;
    className?: string;
}

const MainContext = createContext<MainContextProps | undefined>(undefined);

export const MainContextProvider: React.FunctionComponent<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(5);
    const [navToggle, setNavToggle] = useState<boolean>(false);

    const contextValue: MainContextProps = {
        navToggle,
        currentIndex,
        setCurrentIndex,
        setNavToggle,
        className
    }

    return <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
}

export const useMainContext = () => {
    const context = useContext(MainContext);

    if (!context) {
        throw new Error("MainContext must be used within a MainContextProvider");
    }

    return context;
}
