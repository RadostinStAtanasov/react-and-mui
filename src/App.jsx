import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Pricing from './components/Pricing';
import LogIn from './components/Login';
import SignUp from './components/SignUp';
import Blog from './components/Blog';
import { AuthContextProvider } from './context/AuthContext';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
    <AuthContextProvider>

      <Header />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/pricing' element={<Pricing />}/>
        <Route path='/login' element={<LogIn />}/>
        <Route path='/todo' element={<TodoList />}/>
        <Route path='/register' element={<SignUp />}/>
        <Route path='/blog' element={<Blog />}/>
      </Routes>
    </AuthContextProvider>
    </>
  )
}

export default App
