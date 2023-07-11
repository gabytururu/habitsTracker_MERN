import HabitsContext from '../context/habitsContext'
import {useContext} from 'react'

export const useWorkoutsContext = ( )=>{
    const context = useContext (HabitsContext)

    if (!context){
        throw Error ('useHabitsContext can only be used inside a HAbitsContextProvider')
    }

    return context
}