import { DATA } from "./formType";

export const updateForm = (formData) => {
    return {
        type: DATA,
        payload: formData
    }
};