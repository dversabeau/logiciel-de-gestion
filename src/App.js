import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AppLayout from './layouts/AppLayout';
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


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<MainRoutes/>}/>
      <Route exact path='/' element ={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
