import { createContext, useReducer } from "react";

export const UserContext = createContext()

const userReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_CODE':
            return { ...state, currentCode: action.payload }
        case 'CLEAR_CODES':
            return { sessionCodeArray: [], currentCode: null}
        default:
            return state
    }
}

export function UserProvider({ children }) {
    const [state, dispatch] = useReducer(userReducer, {
        sessionCodeArray: [],
        currentCode: null
    })

    const changeCurrentCode = (code) => {
        dispatch({ type: 'CHANGE_CODE', payload: code})
    }

    const clearSessionCodeArray = () => {
        dispatch({ type: 'CLEAR_CODES', payload: []})
    }

    return (
        <UserContext.Provider value={{...state, changeCurrentCode, clearSessionCodeArray }}>
            { children }
        </UserContext.Provider>
    )
}