import { atom } from "jotai";

export const defaultData = { 
    name: "",
    role: "", 
    qualification: "", 
    skills: [] 
};

export const basicData = atom(defaultData);
export const status = atom({});
