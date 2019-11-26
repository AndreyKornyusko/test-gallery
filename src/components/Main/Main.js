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
      searchQuery: ''
    }
  }

  componentDidMount() {

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


  componentDidUpdate(prevProps, prevState) {
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
    const { images } = this.state

    const { query } = this.props

    return (
      <div className={styles.mainWrap}>
        <HeadBar
          handleRefreshButtonClick={this.handleRefreshButtonClick}
          handleInputSubmit={this.handleInputSubmit}
        />
        <List items={images} />
      </div>
    )
  }
}

export default withRouter(Main);