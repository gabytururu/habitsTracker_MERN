import {createContext, useReducer} from 'react'

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
        case 'DELETE_HABITS':
            return{
                habits: state.habits.filter((habit)=>habit._id !== action.payload._id)
            }
        case 'UPDATE_HABITS':
            return{
                habits: [...state.habits]
            }
        //Notas Cautelares asi funciona pero no se actualiza la pagina - por lo que no se refresca, pero si quito prevent default si.. entonces pues ni pex, llamado nuevo a backend ... mas uso de server.. mas $$ 
        //habits: [...state.habits, action.payload] --> 2 children with same id -- no importa el orden, si ponemos ambos truena en ambos por ahora queda asi.. a futuro... sustituir en frontend
            //
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