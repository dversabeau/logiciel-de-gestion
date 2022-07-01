import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import RegisterForm from '../../components/RegisterForm/RegisterForm'

export default function RegisterPage() {
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
      <h1>Register Page</h1>
      <RegisterForm/>
    </div>
  )
}
