import cb from 'classnames';
import styles from "./login.module.css"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, registerUser } from '../../app/features/users/usersSlice';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {

  const [formData, setFormDate] = useState({
    usermail: "",
    password: "",
  })

  const { usermail, password} = formData
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
    const loginData = {usermail,password}
    dispatch(loginUser(loginData))
    navigate('/admin')
  }

  return (
    <form className={cb(styles.form)} onSubmit={handleSubmit}>
      <input placeholder='Username ou email' type="text" value={usermail} onChange={onChange} name="usermail"/>

      <input placeholder='Password' type="password" value={password} onChange={onChange} name="password" />
      <input type="submit" value="submit" />
    </form>
  )
}
