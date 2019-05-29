import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { HomeContainer, PixabayLogo } from './style';
import '../../assets/icon-pixabay.svg';

import SearchBar from '../searchBar/index';

// Redirects to "/search-results" when the user submits their search.
class HomePage extends Component {
  static propTypes = {
    handleSubmittedSearch: PropTypes.func.isRequired,
    setImagesAreLoadingTo: PropTypes.func.isRequired,
  };

  state = {
    toSearchResults: false,
  };

  handleHomePageRedirect = () => {
    this.setState(() => ({
      toSearchResults: true,
    }));
  };

  render() {
    const { handleSubmittedSearch, setImagesAreLoadingTo } = this.props;
    const { toSearchResults } = this.state;

    if (toSearchResults === true) {
      return <Redirect push to="/search-results/" />;
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
          onSubmit={handleSubmittedSearch}
          setImagesAreLoadingTo={setImagesAreLoadingTo}
          handleHomePageRedirect={this.handleHomePageRedirect}
          placeholderText="Search over 1 million images"
        />
      </HomeContainer>
    );
  }
}

export default HomePage;
