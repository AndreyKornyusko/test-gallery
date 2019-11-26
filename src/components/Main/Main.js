import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './Main.module.scss';
import * as API from '../../services/api';

import HeadBar from '../HeadBar/HeadBar';

import List from '../list/List';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      loading: false,
      searchQuery: '',
      imgHeight: ''
    }
  }

  componentDidMount() {

    // const list = document.querySelector("#gallery");
    
    // const listWidth = list.offsetWidth;
    // console.log('listWidth', listWidth);

    // const imgHeight = listWidth * 0.25;
    // console.log('imgHeight', imgHeight);

    // const { searchQuery } = this.state;
    // API.getImages(searchQuery)
    //   .then(images => {
    //     console.log('images', images);
    //     this.setState({
    //       images,
    //       loading: false
    //     });
    //   })
    //   .catch(error => {
    //     this.setState({ error, loading: false });
    //   });
  }


  componentDidUpdate(prevProps, prevState) {

    // const {imgHeight}= this.state;

    // const prevImgHeight = prevState.imgHeight
    // const nextImgHeight = this.state.imgHeight;

    // if (prevImgHeight !== nextImgHeight) {
    //   this.setState({ imgHeight: imgHeight })
    //   console.log('imgHeight componentDidUpdate', imgHeight);
    // }



    const prevStateQuery = prevState.searchQuery;
    const nextStateQuery = this.state.searchQuery;

    if (prevStateQuery !== nextStateQuery) {

      const { searchQuery } = this.state;
      console.log('searchQuery', searchQuery);

      API.getImages(searchQuery)
        .then(images => {
          console.log('images', images);
          this.setState({
            images,
            loading: false
          });
        })
        .catch(error => {
          this.setState({ error, loading: false });
        });
    }
  }

  handleRefreshButtonClick = () => {
  }


  handleInputSubmit = (e) => {
    e.preventDefault();

    const searchInput = document.querySelector('input[name=searchInput]');
    const inputValue = searchInput.value.trim();
    this.setState({ searchQuery: inputValue })

  }

  render() {
    const { images, imgHeight } = this.state;

    console.log('imgHeight', imgHeight);

    return (
      <div className={styles.mainWrap}>
        <HeadBar
          handleRefreshButtonClick={this.handleRefreshButtonClick}
          handleInputSubmit={this.handleInputSubmit}
        />
        <List items={images} imageHeiht={imgHeight} />
      </div>
    )
  }
}

export default withRouter(Main);