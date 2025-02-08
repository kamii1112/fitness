import { createContext, useContext, useState, ReactNode } from "react";

interface FitnessState {
    user: string;
    theme: "light" | "dark";
    isLoggedIn: boolean;
    setUser: (user: string) => void;
    setTheme: (theme: "light" | "dark") => void;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const FitnessContext = createContext<FitnessState | undefined>(undefined);

export const FitnessProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<string>("Guest");
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

    return (
        <FitnessContext.Provider value={{ user, theme, isLoggedIn, setUser, setTheme, setIsLoggedIn }}>
            {children}
        </FitnessContext.Provider>
    );
};

export const useFitnessContext = (): FitnessState => {
    const context = useContext(FitnessContext);
    if (!context) {
        throw new Error("useFitnessContext must be used within a FitnessProvider");
    }
    return context;
};
