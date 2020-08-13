import {combineReducers, createStore} from 'redux';
import {loadingReducer} from "./main-reducer";
import {themeReducer} from "./theme-reducer";

const rootReducer = combineReducers({
    loadingPage: loadingReducer,
    theme: themeReducer
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store