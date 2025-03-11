import {useParams} from 'react-router-dom'
import {useState} from 'react'

const HabitDetails = () => {
    const {id} = useParams()
    const [title, setTitle] = useState('')
    const [quantity, setQuantity] = useState('')
    const [method, setMethod] = useState('')
    
    const getTheHabit =async()=>{
        try{
            const fetchedHabit = await fetch(`http://localhost:4000/api/habits/${id}`)
            const fetchedHabitJson = await fetchedHabit.json()
            console.log(fetchedHabit)
            console.log(fetchedHabitJson)
            
            setTitle(fetchedHabitJson.title)
            setQuantity(fetchedHabitJson.quantity)
            setMethod(fetchedHabitJson.trackingMethod)


        }catch(err){
            console.log(err)
        }
        
    }
    getTheHabit()
    
    

    return ( 
        <div className="habitDetails">
            <h1>titulo{title}</h1>
            <h3>{quantity}</h3>
            <p>{method}</p>
            <p>Habit id#{id}</p>
        </div>
       
     );
}
 
export default HabitDetails;