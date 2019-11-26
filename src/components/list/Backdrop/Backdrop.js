import React, { Component, createRef } from 'react';

import styles from './Backdrop.module.scss';


class Backdrop extends Component {

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    this.props.onClose();
  };

  handleBackdropClick = e => {
    if (e.target !== this.backdropRef.current) return;
    this.props.onClose();
  };

  render() {

    const { width, height, url } = this.props;

    return (
      <div className={styles.backdrop}
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
      >
        <div className={styles.linkWrap}>
          <div
            className={styles.imgSize}
          >
            {width} x {height}
          </div>
          <a className={styles.imgUrl} href={url} target="_blank">Оригинал</a>
        </div>
      </div>
    )
  }
}

export default Backdrop;