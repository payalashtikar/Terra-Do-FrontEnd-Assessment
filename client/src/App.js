import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/Landingpage';
import Navbar from './components/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Homepage from './pages/Homepage';

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
          </>
        }
      </Routes>

    </div>
  );
}

export default App;
