import { createContext, useReducer } from "react";

export const UserContext = createContext()

const userReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_CODE':
            return { ...state, currentCode: action.payload }
        case 'REMOVE_FROM_ENTERED_CODES':
            return { ...state, enteredCodes: action.payload}
        case 'CLEAR_CODES':
            return { enteredCodes: [], currentCode: null}
        default:
            return state
    }
}

export function UserProvider({ children }) {
    const [state, dispatch] = useReducer(userReducer, {
        currentCode: null,
        enteredCodes: []
    })

    const updateCurrentCode = (code) => {
        dispatch({ type: 'UPDATE_CODE', payload: code})
    }

    const clearEnteredCodes = () => {
        dispatch({ type: 'CLEAR_CODES', payload: []})
    }

    const removeFromEnteredCodes = (codeToRemove) => {

        const newArray = state.enteredCodes.filter((enteredCode) => {
            console.log(`${enteredCode.code} : ${codeToRemove}`)
            return enteredCode.code !== codeToRemove
        })
        dispatch({ type: 'REMOVE_FROM_ENTERED_CODES', payload: newArray})
        console.log(state.enteredCodes)
    }

    return (
        <UserContext.Provider value={{...state, updateCurrentCode, clearEnteredCodes, removeFromEnteredCodes }}>
            { children }
        </UserContext.Provider>
    )
}