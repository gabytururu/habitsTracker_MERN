import { Link } from 'react-router-dom'
const HabitsList = ({habit}) => {
    
    //const {title, reps} = habits
    //const [habits,setHabits] = useState(habits)
    return ( 
            <div className="habitCard">
                <Link to='/reports'>                
                    <p>habit name:{habit.title}</p>
                    <p>habit tracking Method:{habit.trackingMethod}</p>           
                    <p>Habit qty:{habit.quantity}</p>          
                    <p>Habit ID:{habit._id}</p>         
                </Link>
            </div>
           
       
     );
}
 
export default HabitsList;
