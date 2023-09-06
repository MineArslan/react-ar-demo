import React from 'react'
import styles from "./Home.module.css"
import Card from '../../components/Card/Card'

const Home = () => {
  return (
    <div className={styles["container"]}>
        <div className={styles["wrapper"]}>
            <div className={styles["title"]}>
                <h1>DEMO TABLE</h1>
            </div>
            <Card/>
        </div>
        <div className={styles["footer"]}>
        <h6>Designed & Developed by Rakunzel</h6>
        </div>
    </div>
  )
}

export default Home