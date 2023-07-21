import {combineReducers} from "redux"
import counterReducer from "./counterReducer"
import authReducer from "./authReducer";
import formReducer from "./formReducer"

const allReducers=combineReducers({
    counter:counterReducer,
    auth:authReducer,
    form:formReducer,
})
export default allReducers;