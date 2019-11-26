import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './Main.module.scss';
import * as API from '../../services/api';

import HeadBar from '../HeadBar/HeadBar';

import List from '../list/List';

import Loader from '../loader/loader'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      loading: true,
      searchQuery: '',
      imgHeight: '',
      buttonAttribute: '',
      offset: 0
    }
  }

  componentDidMount() {

    // console.log('componentDidMount');

    // const { searchQuery, offset } = this.state;
    // API.getImages(searchQuery, offset)
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
    const prevStateQuery = prevState.searchQuery;
    const nextStateQuery = this.state.searchQuery;

    if (prevStateQuery !== nextStateQuery) {

      const { searchQuery, offset } = this.state;
      // console.log('searchQuery', searchQuery);

      API.getImages(searchQuery, offset)
        .then(images => {
          // console.log('images', images);
          this.setState({
            images,
            loading: false
          });
          // this.setState(prevState => ({ offset: prevState.offset + 8 }))
        })
        .catch(error => {
          this.setState({ error, loading: false });
        });
    }
  }

  handleRefreshButtonClick = () => {

    const { searchQuery, offset } = this.state;
    this.setState(prevState => ({ offset: prevState.offset + 8 }))


    API.getImages(searchQuery, offset)
      .then(images => {
        // console.log('images', images);
        this.setState({
          images,
          loading: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });

  }


  handleInputSubmit = (e) => {
    e.preventDefault();

    const searchInput = document.querySelector('input[name=searchInput]');
    const inputValue = searchInput.value.trim();
    this.setState({ searchQuery: inputValue })
  }


  handleIButtonClick = (e) => {
    const target = e.target;
    var dataId = target.getAttribute("data-attribute");

    this.setState({ buttonAttribute: dataId })
  }


  handleBackdropClick = (e) => {
    this.setState({ buttonAttribute: '' })
  }


  render() {
    const {
      images,
      imgHeight,
      buttonAttribute,
      loading
    } = this.state;

    return (
      <div className={styles.mainWrap}>
        <HeadBar
          handleRefreshButtonClick={this.handleRefreshButtonClick}
          handleInputSubmit={this.handleInputSubmit}
        />
        {loading && <Loader />}

        <List
          items={images}
          imageHeiht={imgHeight}
          handleIButtonClick={this.handleIButtonClick}
          handleBackdropClick={this.handleBackdropClick}
          elemId={buttonAttribute} />
      </div>
    )
  }
}

export default withRouter(Main);