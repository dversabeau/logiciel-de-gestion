import cb from 'classnames';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from "./dashboard.module.css"

export default function DashboardPage() {
  const {operation, isError, isLoading, message} =  useSelector((state) => state.operation)

  useEffect(() => {
    if(isError) {
      console.log(message);
    }

  },[isError, message])

  if (isLoading) {
    return <div>LOADING</div>
  }
  return (
    <section className={cb(styles.page)}>HELLO</section>
  )
}
