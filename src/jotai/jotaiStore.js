import { atom } from "jotai";

const defaultData = { 
    name: "",
    role: "", 
    qualification: "", 
    skills: [] 
};

export const basicData = atom(defaultData);
export const status = atom({});
