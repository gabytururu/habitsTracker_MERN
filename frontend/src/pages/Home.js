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
        },[])
       
        
    return ( 
        <div className="home">  
          <div className="habitsList-container">
            <h1>Here's your Habits Bucket</h1>
                {habits&&habits.map((habit) => (               
                    <HabitsList key={habit._id} habit={habit}/>                
                ))}      
          </div>
        </div>
     );
}
 
export default Home;