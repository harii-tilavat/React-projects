import { useEffect, useState } from "react";

let globalState = {};
let actions = {};
let listeners = [];

export const useStore = () => {
    const setState = useState(globalState)[1];
    const dispatch = (actionIndentifier, payload) => {
        const newState = actions[actionIndentifier](actionIndentifier, payload);
        globalState = { ...globalState, ...newState };
        for (let listener of listeners) {
            listener(globalState);
        }
    }
    useEffect(() => {
        listeners.push(setState);
        return () => {
            listeners = listeners.filter(listener => listener !== setState);
        }
    }, [setState]);
    return [globalState, dispatch];
}
export const initStore = (userActions, initialState) => {
    if (initialState) {
        globalState = { ...globalState, ...initialState };
    }
    actions = { ...actions, ...userActions };
}