import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { HomeContainer, PixabayLogo } from './style';
import '../../assets/icon-pixabay.svg';

import SearchBar from '../searchBar/index';

class HomePage extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    setImagesAreLoadingTo: PropTypes.func.isRequired,
  };

  state = {
    toSearchResults: false,
  };

  handleRedirect = () => {
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
        <a
          href="https://www.pixabay.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1>
            <PixabayLogo src="/assets/icon-pixabay.svg" alt="Pixabay" />
          </h1>
        </a>
        <SearchBar
          onSubmit={handleSubmit}
          setImagesAreLoadingTo={setImagesAreLoadingTo}
          handleRedirect={this.handleRedirect}
          placeholderText="Search over 1 million images"
        />
      </HomeContainer>
    );
  }
}

export default HomePage;
