import types from "./types";

export function increment (data) {
    console.log("increment function call ", data);
    return {
        type: types.INCREMENT,
        payload: data
    }
}

export function decrement (data) {
    console.log("decrement function call ", data);
    return {
        type: types.DECREMENT,
        payload: data
    }
}