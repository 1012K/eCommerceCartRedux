import { combineReducers } from "redux";
import { cartreducer } from "./reducer";


const rootred = combineReducers({
    cartreducer

    //yaha ek se jyada reducers ko pass kar dege  or rootred reducers ka combo hai
});

export default rootred