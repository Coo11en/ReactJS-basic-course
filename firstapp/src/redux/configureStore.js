import { createStore, combineReducers, applyMiddleware } from "redux"
import { interestsReducer } from "./reducers/profileReducer"
import { chatsReducer } from "./reducers/chatsReducer"
import { messagesReducer } from "./reducers/messagesReducer"
import { authorizationReducer } from "./reducers/authorizationReducer"
import thunk from "redux-thunk"
import storage from "redux-persist/lib/storage"
import { persistStore, persistReducer } from "redux-persist"
import { gistsReducer } from "./reducers/gistsReducer"
import { createLogger } from "redux-logger"
const persistConfig = {
    key: 'root',
    storage
}

const logger = createLogger({
    collapsed: true,
    diff: true
})

const rootReducer = combineReducers({ profile: interestsReducer, chats: chatsReducer, messages: messagesReducer, gists: gistsReducer, user: authorizationReducer })

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk, logger))



export const persistor = persistStore(store)