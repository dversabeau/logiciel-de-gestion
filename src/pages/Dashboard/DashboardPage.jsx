import cb from 'classnames';
import { useSelector } from 'react-redux';
import styles from "./dashboard.module.css"

export default function DashboardPage() {
  const {username} = useSelector((state)=> state.user.user)
  return (
    <div>tu es {username}</div>
  )
}
