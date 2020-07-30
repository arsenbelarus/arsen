export type LoadingTrueActionType = {
    type: "SET-LOADING-TRUE",
    loading: boolean
}
export type LoadingFalseActionType = {
    type: "SET-LOADING-FALSE",
    loading: boolean
}
type ActionType = LoadingTrueActionType | LoadingFalseActionType

export type LoadingType = boolean

const initialState = {
    loading: false
}

export const loadingReducer = (state = initialState, action: ActionType) => {
    debugger
    switch (action.type) {
        case "SET-LOADING-TRUE":
            return {
                ...state,
                loading: action.loading
            }
        case "SET-LOADING-FALSE":
            return {
                ...state,
                loading: action.loading
            }
        default:
            return state
    }
}

export const loadingTrueAC = (): LoadingTrueActionType => {
    return {type: "SET-LOADING-TRUE", loading: true}
}
export const loadingFalseAC = (): LoadingFalseActionType => {
    return {type: "SET-LOADING-FALSE", loading: false}
}