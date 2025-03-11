import CreateHabitForm from "../components/CreateHabitForm";

const CreateHabits = () => {
    return ( 
        <div className="habitsForm-container">           
                <CreateHabitForm/>         
            <div className="createHabit-list">
                HERE GOES THE HABITS ALREADY CREATED LIST
            </div>
        </div>
     );
}
 
export default CreateHabits;