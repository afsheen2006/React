import { createContext } from "react";

const BioContext = createContext();

export const BioProvider =({children})=>{
    const myName = "Afsheen";
    console.log("BioProvider Rendered");
    return(
        <BioContext.Provider value={myName}>         
           {children}
        </BioContext.Provider>
    )
}

export default BioContext;