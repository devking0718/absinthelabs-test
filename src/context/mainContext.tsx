'use client'
import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface MainContextProps {
    currentIndex: number;
    setCurrentIndex: Dispatch<SetStateAction<number>>;
    className?: string;
}

const MainContext = createContext<MainContextProps | undefined>(undefined);

export const MainContextProvider: React.FunctionComponent<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const contextValue: MainContextProps = {
        currentIndex,
        setCurrentIndex,
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
