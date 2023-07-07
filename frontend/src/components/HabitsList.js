// import {useState} from 'react'
const HabitsList = ({habit}) => {
    
    //const {title, reps} = habits
    //const [habits,setHabits] = useState(habits)
    return ( 
       
            <div className="habitCard">
                <p>habit name:{habit.title}</p>
                <p>habit reps:{habit.reps}</p>           
                <p>Habit id:{habit.id}</p>          
            </div>
           
       
     );
}
 
export default HabitsList;
