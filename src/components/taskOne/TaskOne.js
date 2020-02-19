import React from 'react';
import styles from './TaskOne.module.css';
import shortId from 'shortid';

function TaskOne() {
  let columnOne = [];
  let columnTwo = [];
  let columnThree = [];
  let columnFour = [];

  for (let i = 0; i < 20; i++) {
    columnOne.push(1);
    columnTwo.push(2);
    columnThree.push(3);
    columnFour.push(4);
  }

  let columnOneUI = columnOne.map(el => <div key={shortId.generate()} className={styles.cell}>{el}</div>);
  let columnTwoUI = columnTwo.map(el => <div key={shortId.generate()} className={styles.cell}>{el}</div>);
  let columnThreeUI = columnThree.map(el => <div key={shortId.generate()} className={styles.cell}>{el}</div>);
  let columnFourUI = columnFour.map(el => <div key={shortId.generate()} className={styles.cell}>{el}</div>);

  return (
    <div className={styles.grid}>
      <div className={styles.col}>
        {columnOneUI}
      </div>
      <div className={styles.col}>
        {columnTwoUI}
      </div>
      <div className={styles.col}>
        {columnThreeUI}
      </div>
      <div className={styles.col}>
        {columnFourUI}
      </div>
    </div>
  );
}

export default TaskOne;
