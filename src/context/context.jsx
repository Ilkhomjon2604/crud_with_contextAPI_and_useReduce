import React, {createContext, useReducer} from "react";
import { reducer } from "./reducer";
import { users } from "../mock";

export const GlobalContext = createContext()

export  const CrudTable = ({children})=>{

    const [data, dispatch] = useReducer(reducer, {
        info: users,
        search: 'id',
        userName: '',
        userJob : '',
        userStatus: '',
        userAge: '',
        active : null,
        nameE : '',
        jobE: '',
        statusE: '',
        ageE: '',
    });

    return (
        <GlobalContext.Provider value={[data, dispatch]}>
            {children}
        </GlobalContext.Provider>
    )

}