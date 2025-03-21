import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Pricing from './components/Pricing';
import LogIn from './components/Login';
import SignUp from './components/SignUp';


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/pricing' element={<Pricing />}/>
        <Route path='/login' element={<LogIn />}/>
        <Route path='/register' element={<SignUp />}/>
      </Routes>
    </>
  )
}

export default App
