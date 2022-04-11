import { createStore } from "redux";
import { reducer } from "./reducer";

export const store = createStore(reducer, { 
    isAuth: false, 
    token: "cc4a5ce1b3df48aec5d22d1f16b894a0b894eccc"
});