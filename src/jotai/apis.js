import { getDefaultStore } from "jotai";
import { basicData } from "./jotaiStore";

export const fetchingData = () => {
    const newData = { 
        name: "Vinay",
        role: "React Developer", 
        qualification: "B tech", 
        skills: ["HTML", "CSS", "JS"] 
    };

    const store = getDefaultStore();
    store.set(basicData, newData);
};