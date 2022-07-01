import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import RegisterForm from '../../components/RegisterForm/RegisterForm'

export default function RegisterPage() {
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
      <h1>Register Page</h1>
      <RegisterForm/>
    </div>
  )
}
