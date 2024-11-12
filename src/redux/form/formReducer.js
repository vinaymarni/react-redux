import { DATA } from "./formType";

export const initialState = {
    name: "",
    role: "",
    qualification: "",
    skills:[],
    steps:{
        step1: 0,
        step2: 0,
        step3: 0,
    }
};

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case DATA:
            // let {name, role, qualification, skills} = action.payload;
            return {
                ...state,
                ...action.payload
            }
        default: return state;
    }
}