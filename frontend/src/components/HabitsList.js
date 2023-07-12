import { Link } from 'react-router-dom'
import {useState, useContext} from 'react'
import HabitsContext from '../context/habitsContext'

const HabitsList = ({habit}) => {    
    const {dispatch} = useContext(HabitsContext)

    const [title, setTitle] = useState(habit.title)
    const [quantity, setQuantity] = useState(habit.quantity)
    const [id, setId] = useState(habit._id)
    const [originalHabit, setOriginalHabit] = useState(true)
    const [modal, setModal] = useState(false)
    const [updatedHabit, setUpdatedHabit] = useState(false)

    const handleUpdate = async()=>{
        console.log('update habit #', habit._id)
        setModal(true) 
        setOriginalHabit(false) 
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const updatedHabit = {title: title, quantity:quantity}
        console.log({id, title, quantity})
        const fetchUpdate = await fetch(`http://localhost:4000/api/habits/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedHabit)
        })
            const responseFetch = await fetchUpdate.json()

            if(!fetchUpdate.ok){
                console.log('la actualizacion no jalo')
                
            }else{
                console.log(' update lograda. va Objeto PATCHEADO Nativo-->', fetchUpdate, 'ahora va objeto Fetcheado en JSON--->', responseFetch)
                dispatch({type: 'UPDATE_HABITS'})
                setUpdatedHabit(true) 
                setOriginalHabit(false)
                setModal(false)
                    
            }
        }
    
    const handleDelete = async() =>{
        console.log('delete habit #', habit._id)
        const fetchDelete = await fetch(`http://localhost:4000/api/habits/${habit._id}`,{
            method: 'DELETE'
        })
        const responseDelete = await fetchDelete.json()
        console.log(fetchDelete)
        console.log(responseDelete)
        if(!fetchDelete.ok){
            console.log('y no se pudo borar esta cosa')
        }else{
            console.log('y ya borramos la cosa --->', responseDelete) 
            dispatch({type:'DELETE_HABITS', payload:responseDelete})
        } 
    }

    return ( 
            <div className="habitCard-container">
                    <div className="habitInfo">  
                        { originalHabit &&
                            <Link to='/reports'>   
                            <p>habit name:{habit.title}</p>
                            <p>habit tracking Method:{habit.trackingMethod}</p>           
                            <p>Habit qty:{habit.quantity}</p>          
                            <p>Habit ID:{habit._id}</p>
                            <p>created: {habit.createdAt}</p>
                            </Link>     
                        }                      
                        {modal &&
                            <form onSubmit={handleSubmit}>
                                 <h3>Changing Habit # {id}</h3>
                                <label>Current Habit Title</label>
                                <input type="text" value={title} onChange = {(e)=>{setTitle(e.target.value)}}/>
                                <label>Current Habit Qty</label>
                                <input type="text" value={quantity} onChange = {(e)=>{setQuantity(e.target.value)}}/>
                                <button>Send Update</button>
                            </form>       
                        }   
                        {updatedHabit &&
                            <Link to='/reports'>   
                            <p>habit name:{title}</p>
                            <p>habit tracking Method:{habit.trackingMethod}</p>           
                            <p>Habit qty:{quantity}</p>          
                            <p>Habit ID:{habit._id}</p>
                            <p>created: {habit.createdAt}</p>
                            </Link>    
                        }                      
                    </div>                  
                    <div className="deleteHabit">
                        <button className="deleteButton" onClick={handleDelete}>Delete</button> 
                        <button className="deleteButton" onClick={handleUpdate}>Update</button> 
                    </div>              
            </div>
     );
}
 
export default HabitsList;
