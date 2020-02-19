import React from 'react';
import styles from './TaskTwo.module.css';


function TaskTwo() {

  return (
    <div>
      <h1>Menu</h1>
      <div className={styles.containerOne}>
        <ul className={styles.ul}>
          <li className={styles.li}>item</li>
          <li className={styles.li}>item</li>
          <li className={styles.li}>item</li>
          <li className={styles.li}>item</li>
          <li className={styles.li}>item</li>
        </ul>
      </div>
      <h1>Flex</h1>
      <div className={styles.containerTwo}>
        <div className={styles.smallBlock}>item</div>
        <div className={styles.bigBlock}>item</div>
      </div>
    </div>
  );
}

export default TaskTwo;
