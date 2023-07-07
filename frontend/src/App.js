import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from '../src/components/Navbar'
import Home from '../src/pages/Home'
import Footer from '../src/components/Footer'
import CreateHabits from '../src/pages/CreateHabits'
import Reports from '../src/pages/Reports'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<CreateHabits/>}/>
          <Route path="/reports" element={<Reports/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
        </div>
  );
}

export default App;
