import {combineReducers, createStore} from 'redux';
import {loadingReducer} from "./main-reducer";

const rootReducer = combineReducers({
    loadingPage: loadingReducer
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store