import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from '../src/components/Navbar'
import Home from '../src/pages/Home'
import Footer from '../src/components/Footer'
import CreateHabits from '../src/pages/CreateHabits'
import Reports from '../src/pages/Reports'
import HabitDetails from '../src/pages/HabitDetails'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<CreateHabits/>}/>
          <Route path="/reports" element={<Reports/>}/>
          <Route path="/:id" element={<HabitDetails/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
        </div>
  );
}

export default App;
