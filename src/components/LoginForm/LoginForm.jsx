import cb from 'classnames';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, registerUser } from '../../app/features/users/usersSlice';
import styles from "./login.module.css"

export default function LoginForm() {

  const [formData, setFormDate] = useState({
    usermail: "",
    password: "",
  })

  const { usermail, password} = formData
  const dispatch = useDispatch()

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
  }

  return (
    <form className={cb(styles.form)} onSubmit={handleSubmit}>
      <input placeholder='Username ou email' type="text" value={usermail} onChange={onChange} name="usermail"/>

      <input placeholder='Password' type="password" value={password} onChange={onChange} name="password" />
      <input type="submit" value="submit" />
    </form>
  )
}
