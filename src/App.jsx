import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Pricing from './components/Pricing';
import LogIn from './components/Login';
import SignUp from './components/SignUp';
import Blog from './components/Blog';
import { AuthContextProvider } from './context/AuthContext';
import TodoList from './components/TodoList';
import CreateTodo from './components/CreateTodo';
import TodoDetails from './components/TodoDetails';

function App() {
  return (
    <>
    <AuthContextProvider>
            <CssBaseline enableColorScheme />

      <Header />

    <Container component="main" maxWidth="xs">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/pricing' element={<Pricing />}/>
          <Route path='/login' element={<LogIn />}/>
          <Route path='/todo' element={<TodoList />}/>
          <Route path='/register' element={<SignUp />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/todos/add' element={<CreateTodo />}/>
          <Route path='/todos/:todoId' element={<TodoDetails />}/>
        </Routes>
      </Container>

    </AuthContextProvider>
    </>
  )
}

export default App