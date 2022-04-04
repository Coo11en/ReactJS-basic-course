import { createStore } from "redux"
import { interestsReducer } from "./reducer/profile"

export const store = createStore(interestsReducer)