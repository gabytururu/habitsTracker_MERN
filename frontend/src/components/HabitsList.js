import { Link } from 'react-router-dom'
import {useState} from 'react'

const HabitsList = ({habit}) => {
   
    const handleDelete = async(e) =>{
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
        } 
    }

    const [title, setTitle] = useState(habit.title)
    const [quantity, setQuantity] = useState(habit.quantity)
    const [id, setId] = useState(habit._id)
    const [modal, setModal] = useState(false)

    const handleUpdate = async(e)=>{
        console.log('update habit #', habit._id)
        setModal(true)
        
    }

    const handleSubmit = async()=>{
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
        }
        // console.log('primerFetch --->', fetchUpdate)
        // console.log('fetchUpdate en json-->', responseFetch)
    }
        
    
   
    return ( 
            <div className="habitCard-container">
                    <div className="habitInfo">                        
                        {/* <Link to='/reports'>   
                            <p>habit name:{habit.title}</p>
                            <p>habit tracking Method:{habit.trackingMethod}</p>           
                            <p>Habit qty:{habit.quantity}</p>          
                            <p>Habit ID:{habit._id}</p>
                        </Link>             */}
                        {modal ?
                            <form onSubmit={handleSubmit}>
                                 <h3>Changing Habit # {id}</h3>
                                <label>Current Habit Title</label>
                                <input type="text" value={title} onChange = {(e)=>{setTitle(e.target.value)}}/>
                                <label>Current Habit Qty</label>
                                <input type="text" value={quantity} onChange = {(e)=>{setQuantity(e.target.value)}}/>
                                <button>Send Update</button>
                            </form> 
                            :
                            <Link to='/reports'>   
                            <p>habit name:{habit.title}</p>
                            <p>habit tracking Method:{habit.trackingMethod}</p>           
                            <p>Habit qty:{habit.quantity}</p>          
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
