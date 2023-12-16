import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/Landingpage';
import Navbar from './components/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Homepage from './pages/Homepage';
import { AddTask } from './components/task/AddTasks';
import { UpdateTask } from './components/task/UpdateTask';

function App() {

  const isUserLogin = localStorage.getItem('token')

  return (
    <div className='App'>
      {/* hiii */}
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        {
          isUserLogin &&
          <>
            <Route path='/homepage' element={<Homepage />} />
            <Route path='/addtask' element={<AddTask />} />
            <Route path='/task/:id' element={<UpdateTask />} />
          </>
        }
      </Routes>

    </div>
  );
}

export default App;
