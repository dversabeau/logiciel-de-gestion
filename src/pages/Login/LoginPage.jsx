import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import LoginForm from '../../components/LoginForm/LoginForm'

export default function LoginPage() {
  const {user} = useSelector((state)=> state.user)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)

    if (user) {
      navigate('/admin')
    }
  }, [pathname, user, navigate])
  
  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm/>
    </div>
  )
}
