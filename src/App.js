import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import AppLayout from './layouts/AppLayout';
import DashboardPage from './pages/Dashboard/DashboardPage';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';

function MainRoutes () {
  return(
    <AppLayout>
    <Routes>
      <Route path='register' element={<RegisterPage/>} />
      <Route path='login' element={<LoginPage/>} />
    </Routes>
  </AppLayout>
)
}

function AdminRoutes() {
  const {username} = useSelector((state)=> state.user.user)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)

    if (!username) {
      navigate('/connexion')
    }
  }, [pathname, username, navigate])

  return (
    <AppLayout>
    <Routes>
      <Route path='/' element={<DashboardPage/>} />
    </Routes>
  </AppLayout>
  )
}

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<MainRoutes/>}/>
      <Route path='/admin/*' element={<AdminRoutes/>}/>
      <Route exact path='/' element ={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
