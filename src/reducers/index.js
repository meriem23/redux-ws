import { combineReducers } from "redux"
import couterReducer from "./counterReducer"
import profileReducer from "./profileReducer"

export const rootReducer = combineReducers({
    counter: couterReducer,
    profile: profileReducer
})
