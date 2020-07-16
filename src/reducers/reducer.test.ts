import {v1} from "uuid";
import {hwReducer} from "./reducer";

test('array of people should be sorted by name ascending', () => {

    const startState: Array<{id: string, name: string, age: number}> = [
        {id: v1(), name: "Arsen", age: 37},
        {id: v1(), name: "Olga", age: 40},
        {id: v1(), name: "Tigran", age: 10},
        {id: v1(), name: "David", age: 5},
    ]

    const endState: Array<{ id: string; name: string; age: number }> = hwReducer(startState, {type: "SORT", payload: "NAME-UP"});

    expect(endState[0].name).toBe("Arsen");
    expect(endState[1].name).toBe("David");
    expect(endState[2].name).toBe("Olga");
    expect(endState[3].name).toBe("Tigran");
});

test('array of people should be sorted by name descending', () => {

    const startState: Array<{id: string, name: string, age: number}> = [
        {id: v1(), name: "Arsen", age: 37},
        {id: v1(), name: "Olga", age: 40},
        {id: v1(), name: "Tigran", age: 10},
        {id: v1(), name: "David", age: 5},
    ]

    const endState: Array<{ id: string; name: string; age: number }> = hwReducer(startState, {type: "SORT", payload: "NAME-DOWN"});

    expect(endState[0].name).toBe("Tigran");
    expect(endState[1].name).toBe("Olga");
    expect(endState[2].name).toBe("David");
    expect(endState[3].name).toBe("Arsen");
});
test('should be returned array of people of age 18 or older', () => {

    const startState: Array<{id: string, name: string, age: number}> = [
        {id: v1(), name: "Arsen", age: 37},
        {id: v1(), name: "Olga", age: 40},
        {id: v1(), name: "Tigran", age: 10},
        {id: v1(), name: "David", age: 5},
    ]

    const endState: Array<{ id: string; name: string; age: number }> = hwReducer(startState, {type: "SORT", payload: "18"});

    expect(endState[0].name).toBe("Arsen");
    expect(endState[1].name).toBe("Olga");
    expect(endState.length).toBe(2);
});
test('array of people should be sorted by age ascending', () => {

    const startState: Array<{id: string, name: string, age: number}> = [
        {id: v1(), name: "Arsen", age: 37},
        {id: v1(), name: "Olga", age: 40},
        {id: v1(), name: "Tigran", age: 10},
        {id: v1(), name: "David", age: 5},
    ]

    const endState: Array<{ id: string; name: string; age: number }> = hwReducer(startState, {type: "SORT", payload: "AGE-UP"});

    expect(endState[0].name).toBe("David");
    expect(endState[1].name).toBe("Tigran");
    expect(endState[2].name).toBe("Arsen");
    expect(endState[3].name).toBe("Olga");
});

test('array of people should be sorted by age descending', () => {

    const startState: Array<{id: string, name: string, age: number}> = [
        {id: v1(), name: "Arsen", age: 37},
        {id: v1(), name: "Olga", age: 40},
        {id: v1(), name: "Tigran", age: 10},
        {id: v1(), name: "David", age: 5},
    ]

    const endState: Array<{ id: string; name: string; age: number }> = hwReducer(startState, {type: "SORT", payload: "AGE-DOWN"});

    expect(endState[0].name).toBe("Olga");
    expect(endState[1].name).toBe("Arsen");
    expect(endState[2].name).toBe("Tigran");
    expect(endState[3].name).toBe("David");
});
