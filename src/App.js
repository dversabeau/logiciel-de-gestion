// Modules
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

// Styles
import './App.css';

// Layout
import AppLayout from './layouts/AppLayout';

// Pages
import DashboardPage from './pages/Dashboard/DashboardPage';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';

// Pages Private
function AdminRoutes() {
  const {user} = useSelector((state)=> state.user)
  const navigate = useNavigate()
  useEffect(() => {
    
    window.scrollTo(0, 0)
    if (user === null) {
      navigate('/login')
    }
  }, [navigate, user])

  return (
    <AppLayout>
      <Routes>
        <Route path='/' element={<DashboardPage />} />
      </Routes>
    </AppLayout>
  )
}
// Pages Public
function MainRoutes() {
  const {user} = useSelector((state)=> state.user)
  const navigate = useNavigate()
    
  useEffect(() => {
    window.scrollTo(0, 0)

    if (user !== null) {
      navigate('/admin')
    }
  }, [navigate, user])
  return (
    <AppLayout>
      <Routes>
        <Route path='register' element={<RegisterPage />} />
        <Route path='login' element={<LoginPage />} />
      </Routes>
    </AppLayout>
  )
}


// Main Function
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<MainRoutes />} />
        <Route path='/admin/*' element={<AdminRoutes />} />
        <Route exact path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
