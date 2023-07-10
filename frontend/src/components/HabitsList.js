import { Link } from 'react-router-dom'
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
 


    //const {title, reps} = habits
    //const [habits,setHabits] = useState(habits)
    return ( 
            <div className="habitCard-container">
                   
                    <div className="habitInfo">
                    <Link to='/reports'>   
                        <p>habit name:{habit.title}</p>
                        <p>habit tracking Method:{habit.trackingMethod}</p>           
                        <p>Habit qty:{habit.quantity}</p>          
                        <p>Habit ID:{habit._id}</p>
                    </Link>                       
                    </div>
               
                    <div className="deleteHabit">
                        <button className="deleteButton" onClick={handleDelete}>Delete</button> 
                    </div>         
                         
            </div>
           
       
     );
}
 
export default HabitsList;
