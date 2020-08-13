export type ChangeThemeActionType = {
    type: "CHANGE-THEME",
    color: string
}

type ActionType = ChangeThemeActionType

export type ThemeType = {
    background: string,
}

const initialState: ThemeType = {
    background: "",
}

export const themeReducer = (state = initialState, action: ActionType) => {
    debugger
    switch (action.type) {
        case "CHANGE-THEME":
            return {
                ...state,
                background: action.color,
            }
        default: return  state
    }
}

export const changeThemeAC = (color: string): ChangeThemeActionType => {
    return {type: "CHANGE-THEME", color}
}
