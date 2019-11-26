import React from 'react';
import styles from './HeadBar.module.scss';

import Input from '../Input/Input';

const HeadBar = ({ handleRefreshButtonClick, handleInputSubmit }) => (
  <div className={styles.wrapper}>
    <Input
      handleInputSubmit={handleInputSubmit}
       />
    <button
      className={styles.button}
      onClick={handleRefreshButtonClick}>
      refresh
    </button>
  </div>
)

export default HeadBar;