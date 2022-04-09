import { createStore, combineReducers } from "redux"
import { interestsReducer } from "./reducer/profileReducer"
import { chatsReducer } from "./reducer/chatsReducer"
import { messagesReducer } from "./reducer/messagesReducer"

export const store = createStore(combineReducers({ profile: interestsReducer, chats: chatsReducer, messages: messagesReducer }))