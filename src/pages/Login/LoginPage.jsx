import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import LoginForm from '../../components/LoginForm/LoginForm'

export default function LoginPage() {
  const {username} = useSelector((state)=> state.user.user)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)

    if (username) {
      navigate('/admin')
    }
  }, [pathname, username, navigate])
  
  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm/>
    </div>
  )
}
