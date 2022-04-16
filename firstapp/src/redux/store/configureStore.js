import { createStore, combineReducers, applyMiddleware } from "redux"
import { interestsReducer } from "./reducer/profileReducer"
import { chatsReducer } from "./reducer/chatsReducer"
import { messagesReducer } from "./reducer/messagesReducer"
import thunk from "redux-thunk"
import storage from "redux-persist/lib/storage"
import { persistStore, persistReducer } from "redux-persist"
import { gistsReducer } from "./reducer/gistsReducer"
const persistConfig = {
    key: 'root',
    storage
}



const rootReducer = combineReducers({ profile: interestsReducer, chats: chatsReducer, messages: messagesReducer, gists: gistsReducer })

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk))



export const persistor = persistStore(store)