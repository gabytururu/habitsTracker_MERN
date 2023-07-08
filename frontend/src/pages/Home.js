import {useState, useEffect} from 'react'
import HabitsList from '../components/HabitsList'

const Home = () => {
    const [habits, setHabits] = useState([])
   
        useEffect(()=>{
            const fetchData = async() =>{

                try{
                const fetchedObject = await fetch('http://localhost:4000/api/habits')
                const fetchedJsonData = await fetchedObject.json()
                
                if(fetchedObject.ok){
                    console.log(fetchedObject)
                    console.log(fetchedJsonData)
                    setHabits(fetchedJsonData)
                }  

                }catch(err){
                    console.log(err)
                }

                            
            }
            fetchData()
            
            
            // const habitsList = [
            //     {
            //         title:'one habit', 
            //         trackingMethod: '3x per week', 
            //         reps:'50',
            //         id:1
            //     }, 
            //     {
            //         title:'two habit',
            //         trackingMethod: '3x per week', reps:'50',
            //         id:2
            //     }, 
            //     {
            //         title:'three habit', trackingMethod: '3x per week', reps:'50',
            //         id:3
            //     }, 
            //     {
            //         title:'...n habit',
            //         trackingMethod: '3x per week', reps:'50',
            //         id:4
            //     }]      
           
            // setHabits(habitsList)
            // console.log(habits)
        },[])
       
        
    return ( 
        <div className="home">  
          <div className="habitsList-container">
            <h1>Here's your Habits Bucket</h1>
                {habits&&habits.map((habit) => (               
                    <HabitsList key={habit.id} habit={habit}/>                
                ))}      
          </div>
        </div>
     );
}
 
export default Home;