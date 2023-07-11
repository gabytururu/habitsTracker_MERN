import {createContext, useState} from 'react'

export const HabitsContext = createContext()

export const HabitsContextProvider = ({children}) =>{
    const [test, setTest] = useState({getAll:'xyzs', tryAll:'abcd'})

    return(
        <HabitsContext.Provider value={test}>
            {children}
        </HabitsContext.Provider>
    )
} 

export default HabitsContextProvider;