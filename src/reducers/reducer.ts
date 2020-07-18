export const hwReducer =
    (state: Array<{ id: string, name: string, age: number }>, action: { type: string, payload: any }) => {
        switch (action.type) {
            case "SORT":
                if (action.payload === "NAME-UP") {
                    return [...state.sort(function (a, b) {
                        if (a.name < b.name) {
                            return -1;
                        }
                        if (a.name > b.name) {
                            return 1;
                        }
                        return 0;
                    })]
                } else if (action.payload === "NAME-DOWN") {
                    return [...state.sort(function (a, b) {
                        if (a.name < b.name) {
                            return 1;
                        }
                        if (a.name > b.name) {
                            return -1;
                        }
                        return 0;
                    })]
                } else if (action.payload === "AGE-UP") {
                    return [...state.sort(function (a, b) {
                        if (a.age < b.age) {
                            return -1;
                        }
                        if (a.age > b.age) {
                            return 1;
                        }
                        return 0;
                    })]
                } else if (action.payload === "AGE-DOWN") {
                    return [...state.sort(function (a, b) {
                        if (a.age < b.age) {
                            return 1;
                        }
                        if (a.age > b.age) {
                            return -1;
                        }
                        return 0;
                    })]
                }
            case "CHECK":
                return [...state.filter(obj => obj.age > action.payload)]
            default:
                return state
        }
    };