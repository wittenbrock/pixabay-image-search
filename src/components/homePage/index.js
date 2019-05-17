import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { HomeContainer } from './style';
import '../../assets/icon-pixabay.svg';

import SearchBar from '../searchBar/index';

class HomePage extends Component {
  state = {
    toSearchResults: false,
  };

  handleRedirect = () => {
    console.log('handleRedirect called');
    this.setState(() => ({
      toSearchResults: true,
    }));
  };

  render() {
    const { handleSubmit, setImagesAreLoadingTo } = this.props;
    const { toSearchResults } = this.state;
    if (toSearchResults === true) {
      return <Redirect to="/search-results" />;
    }

    return (
      <HomeContainer>
        <Link
          to="https://pixabay.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1>
            <img
              src="/assets/icon-pixabay.svg"
              alt="Pixabay"
              height="35px"
              width="100px"
            />
          </h1>
        </Link>
        <SearchBar
          onSubmit={handleSubmit}
          setImagesAreLoadingTo={setImagesAreLoadingTo}
          handleRedirect={this.handleRedirect}
        />
      </HomeContainer>
    );
  }
}

HomePage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  setImagesAreLoadingTo: PropTypes.func.isRequired,
};

export default HomePage;
