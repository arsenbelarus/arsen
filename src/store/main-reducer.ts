export type LoadingActionType = {
    type: "TOOGLE-LOADING",
    loading: boolean
}

type ActionType = LoadingActionType

export type LoadingType = boolean

const initialState = {
    loading: false
}

export const loadingReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "TOOGLE-LOADING":
            return {
                ...state,
                loading: action.loading
            }
        default: return  state
    }
}

export const toggleLoadingAC = (loading: boolean): LoadingActionType => {
    return {type: "TOOGLE-LOADING", loading: loading}
}
