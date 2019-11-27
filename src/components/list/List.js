import React from 'react';
import styles from './list.module.scss';

import Backdrop from './Backdrop/Backdrop';


const List = ({ items, imageHeiht, elemId, handleIButtonClick, handleBackdropClick }) => (
  <ul
    id="gallery"
    className={styles.list}>
    {
      items.map((item) => (
        <li
          id={item.id}
          key={item.id}
          className={styles.listItem}
        >
          <div className={styles.imgWrap}>
            <img
              width="300"
              height="200"
              className={styles.image}
              src={item.images.preview_gif.url}
              alt=" gif-image" />
          </div>
          <div className={styles.nameWrap}>
            <div className={styles.imgName}>
              {item.title}
            </div>
            <button
              data-attribute={item.id}
              className={styles.iButton}
              onClick={handleIButtonClick}
            >
              i
            </button>
          </div>

          {(elemId === item.id) &&

            <Backdrop
              onClose={handleBackdropClick}
              width={item.images.original.width}
              height={item.images.original.height}
              url={item.url}
            />
          }

        </li>
      ))
    }
  </ul>
)

export default List;