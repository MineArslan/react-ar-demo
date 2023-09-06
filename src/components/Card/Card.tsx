import React from 'react'
import styles from "./Card.module.css"
import Model from "../Model/Model"

const Card = () => {
  return (
    <div className={styles["card"]}>
        <Model/>
    </div>
  )
}

export default Card