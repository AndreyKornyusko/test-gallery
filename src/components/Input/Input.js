import React from 'react';
import styles from './Input.module.scss';

const Input = ({ handleInputSubmit }) => (
  <form className={styles.form} onSubmit={handleInputSubmit}>
    <div className={styles.inputWrap}>
      <input
        className={styles.input}
        type="text"
        name="searchInput"
        placeholder="What are you searching for?" />
      <button className={styles.button} type="submit" >find</button>
    </div>
  </form>
)

export default Input;