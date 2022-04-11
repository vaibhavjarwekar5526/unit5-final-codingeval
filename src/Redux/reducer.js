import { IS_AUTH } from "./action";



export const reducer = (store, action) => {
    switch(action.type){
        case IS_AUTH:
            return{
                ...store,
                isAuth: !store.isAuth
            };
        default:
            return store;
    }
};