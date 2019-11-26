import React from 'react';
import styles from './list.module.scss';

const List = ({ items, imageHeiht, elemId, iclicked }) => (
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
              id="galleryImg"
              style={{ height: imageHeiht }}
              className={styles.image}
              src={item.images.preview_gif.url}
              alt=" gif-image" />
          </div>
          <div className={styles.nameWrap}>
            <div className={styles.imgName}>{item.title}</div>
            <button
              className={styles.iButton}
            >i</button>
          </div>

          {(iclicked && (elemId === item.id)) &&

            <div className={styles.backdrop}>
              <div className={styles.imgSize}>{item.images.original.width} x {item.images.original.height}</div>
              <div className={styles.imgUrl}>{item.url}</div>
            </div>
          }

        </li>
      ))
    }
  </ul>
)

export default List;