import {useState, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import HabitsContext from '../context/habitsContext'

const CreateHabitForm = () => {
    const {habits, dispatch} = useContext(HabitsContext)
    const [title, setTitle] = useState('')
    const [trackingMethod, setTrackingMethod] = useState('')
    const [quantity, setQuantity] = useState('')

    const navigate = useNavigate()
    

    const handleSubmit = async() =>{
        //e.preventDefault()
        const newHabit = {title, trackingMethod, quantity}
        console.log(newHabit)

        const postedData = await fetch('http://localhost:4000/api/habits/', {
            method: "POST",
            body: JSON.stringify(newHabit),
            headers: {"Content-Type": "application/json"}
        })

        const response = await postedData.json()

        if(!postedData.ok){
            console.log(response.error)
           
        }
        if(postedData.ok){
            console.log('new habit added', response)
            //dispatch({type:'CREATE_HABIT', payload: response})
            navigate("/")
        }
    }
    
    return ( 
        <div className="habitForm-container">
            <form className="createHabit" onSubmit={handleSubmit}>
                <label>Habit's name</label>
                <input 
                type="text" 
                value={title}
                onChange={(e)=>{setTitle(e.target.value)}}
                />
                <label>Habit's tracking Method</label>
                <select 
                type="text" 
                value={trackingMethod}
                onChange={(e)=>{setTrackingMethod(e.target.value)}}
                >
                    <option value="Minutes X Day"></option>
                    <option value="Times X Day"></option>
                    <option value="Hours X Day"></option>
                </select>
                <label>Habit's name</label>
                <input 
                type="number" 
                value={quantity}
                onChange={(e)=>{setQuantity(e.target.value)}}
                />
                <button>Submit</button>
            </form>
        </div>
     );
}
 
export default CreateHabitForm;