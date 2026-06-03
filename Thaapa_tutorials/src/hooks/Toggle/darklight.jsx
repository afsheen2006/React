import {createContext, useState} from "react";
import { use } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("Dark");
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "Dark" ? "Light" : "Dark"));
    }
    return (
        <ThemeContext.Provider value={{ theme , toggleTheme}}>
            {children} 
        </ThemeContext.Provider>
    )
}

const DarkLight = () => {
    const { theme, toggleTheme } = use(ThemeContext);
    return (
        <div className={`display-flex flex-column align-center gap-1 ${theme === "Dark" ? "bg-gray-800" : "bg-white"}` } >
            <h1>Dark Light Theme</h1>
            <button onClick={toggleTheme}> {theme === "Dark" ? "Switch to Light" : "Switch to Dark"} </button>
        </div>
    )
};

export default DarkLight;