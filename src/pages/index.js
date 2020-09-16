import React from "react"
import styles from "../pages/styles/index.module.css"

export default function Home() {
  return (
    <>
      <div className={styles.navbar}>
        <div>
          <a href="https://github.com/drockchow112">
            <img
              src="https://i.imgur.com/ZN8rzvI.png"
              className={styles.image}
            />
          </a>
          <a href="https://www.linkedin.com/in/derrick-chow-0a32/">
            <img
              src="https://i.imgur.com/BbPwWPN.png"
              className={styles.image}
            />
          </a>
        </div>
      </div>

      <div className={styles.firstCont}>
        <h1 className={styles.font}>Hi!</h1>
        <h1 className={styles.font}>I'm Derrick.</h1>
        <h1 className={styles.secondFont}>Welcome to my site.</h1>
      </div>

      <div className={styles.secondCont}>
        <div className={styles.imageCropper}>
          <img
            src="https://i.imgur.com/2m0FJrh.jpg"
            alt="W"
            className={styles.profilePic}
          />
        </div>
        <p className={styles.pFont}>
          I'm an aspiring web developer at the College of Staten Island always
          looking to try out and build new things.
        </p>
      </div>
    </>
  )
}
