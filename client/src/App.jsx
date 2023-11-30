import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header'
import Home from './components/home/Home'
import { Routes, Route } from 'react-router-dom'
import Register from './components/register/Register'

function App() {
  return (
    <>
      
      <Header /> {/* renders the Header component. */}
        <Routes>
          <Route path='/' element={<Home />} /> {/* renders the Home component when we go to http://localhost:5173/. */}
          <Route path='/register' element={<Register />} /> 
           {/* renders the Register component when we navigate to http://localhost:5173/register */}
          {/*  connects the register page frim components to the "/register" path , that is when we go to that link , <Register/> page will get rendered */}
        </Routes>
    </>
  )
}

export default App