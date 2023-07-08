import { Link } from 'react-router-dom'
const HabitsList = ({habit}) => {
    
    //const {title, reps} = habits
    //const [habits,setHabits] = useState(habits)
    return ( 

            <Link to='/reports'>
                <div className="habitCard">
                    <p>habit name:{habit.title}</p>
                    <p>habit reps:{habit.reps}</p>           
                    <p>Habit id:{habit.id}</p>          
                </div>
            </Link>
           
       
     );
}
 
export default HabitsList;
