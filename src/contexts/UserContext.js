import { createContext, useReducer } from "react";

export const UserContext = createContext()

const userReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_CODE':
            return { ...state, currentCode: action.payload }
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

    return (
        <UserContext.Provider value={{...state, changeCurrentCode }}>
            { children }
        </UserContext.Provider>
    )
}