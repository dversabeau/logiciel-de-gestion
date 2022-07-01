import cb from 'classnames';
import { useSelector } from 'react-redux';
import styles from "./dashboard.module.css"

export default function DashboardPage() {
  const {username} = useSelector((state)=> state.user.user)
  return (
    <section className={cb(styles.page)}>tu es {username}</section>
  )
}
