import React from 'react';
import styles from './list.module.scss';

const List = ({items}) => (
  <ul className={styles.list}>
    {
      items.map((item) => (
        <li
          id={item.id}
          key={item.id}
          className={styles.listItem}
        >
            <div className={styles.imgWrap}>
              <img className={styles.image} src={item.images.preview_gif.url} alt=" gif-image" />
            </div>
        </li>
      ))
    }
  </ul>
)

export default List;