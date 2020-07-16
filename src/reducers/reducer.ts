export const hwReducer =
    (state: Array<{ id: string, name: string, age: number }>, action: { type: string, payload: any }) => {
        switch (action.type) {
            case "SORT":
                switch (action.payload) {
                    case "NAME-UP":
                        return [...state.sort(function (a, b) {
                            if (a.name < b.name) {
                                return -1;
                            }
                            if (a.name > b.name) {
                                return 1;
                            }
                            return 0;
                        })]
                    case "NAME-DOWN":
                        return [...state.sort(function (a, b) {
                            if (a.name < b.name) {
                                return 1;
                            }
                            if (a.name > b.name) {
                                return -1;
                            }
                            return 0;
                        })]
                    case "AGE-UP":
                        return [...state.sort(function (a, b) {
                            if (a.age < b.age) {
                                return -1;
                            }
                            if (a.age > b.age) {
                                return 1;
                            }
                            return 0;
                        })]
                    case "AGE-DOWN":
                        return [...state.sort(function (a, b) {
                            if (a.age < b.age) {
                                return 1;
                            }
                            if (a.age > b.age) {
                                return -1;
                            }
                            return 0;
                        })]
                    case "18":
                        return [...state.filter(obj => obj.age > 18)]
                    default:
                        return state
                }
            default:
                return state
        }

    };