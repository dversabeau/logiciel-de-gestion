import cb from 'classnames';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../app/features/users/usersSlice';
import styles from "./register.module.css"

export default function RegisterForm() {

  const [formData, setFormDate] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const { username, email, password, confirmPassword } = formData
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function onChange(e) {
    setFormDate((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const registerData = {username, email, password, confirmPassword}
    dispatch(registerUser(registerData))
    navigate('/admin')
  }

  return (
    <form className={cb(styles.form)} onSubmit={handleSubmit}>
      <input placeholder='Username' type="text" value={username} onChange={onChange} name="username" autoComplete='username' />
      <input placeholder='Email' type="email" value={email} onChange={onChange} name="email" autoComplete='email' />
      <input placeholder='Password' type="password" value={password} onChange={onChange} name="password" />
      <input placeholder='Confirm Password' type="password" value={confirmPassword} onChange={onChange} name="confirmPassword" />
      <input type="submit" value="submit" />
    </form>
  )
}
