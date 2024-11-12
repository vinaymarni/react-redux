import { combineReducers } from "redux";

import { cakeReducer } from "./cake/cakeReducer";
import { iceCreamReducer } from "./iceCream/iceCreamReducer";
import { userReducer } from "./user/userReducers";
import { formReducer } from "./form/formReducer";


export const rootReducers = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user:userReducer,
    form: formReducer
});