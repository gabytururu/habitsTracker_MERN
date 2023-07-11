import {createContext, useState, useReducer} from 'react'

const HabitsContext = createContext()

const habitsReducer = (state, action) =>{
    switch(action.type){
        case 'SET_HABITS':
            return {
                habits: action.payload
            }
        case 'CREATE_HABITS':
            return{
                habits: [action.payload, ...state.habits]
            }
        case 'DELETE_WORKOUT':
            return{
                habits: state.habits.filter((habit)=>habit._id !== action.payload._id)
            }
        default:
            return state
    }
}

const HabitsContextProvider = ({children}) =>{
    
    const [state, dispatch] = useReducer(habitsReducer, {habits: null})
    // const [habitsinContext, setHabitsinContext] = useState([])
    
    // const handleGetHabits = async(url) =>{
    //     const fetchHabits = await fetch(url)
    //     const jsonFetchedHabits = await fetchHabits.json()
    //     console.log (jsonFetchedHabits)
    //     setHabitsinContext(jsonFetchedHabits)
    //     return jsonFetchedHabits
    // }
    //const data = {...state, dispatch}
    return(
        <HabitsContext.Provider value={{...state, dispatch}}>
            {children}
        </HabitsContext.Provider>
    )
} 

export {HabitsContextProvider}
export default HabitsContext