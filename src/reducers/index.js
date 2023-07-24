import {combineReducers} from "redux"
import counterReducer from "./counterReducer"
import authReducer from "./authReducer";
import formReducer from "./formReducer"
import { productReducer, selectedProductReducer } from "./productReducer";


const allReducers=combineReducers({
    counter:counterReducer,
    auth:authReducer,
    form:formReducer,
    products:productReducer,
    product:selectedProductReducer,
})
export default allReducers;