import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryPixabay from '../utilities/pixabay-api';
import LoadingScreen from './loading-screen';
import ImageGrid from './image-grid';

class DisplaySearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pixabayImages: [],
      pixabayApiLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    console.log('component did mount');
    const { searchQuery } = this.props;
    queryPixabay(searchQuery).then(pixabayImages => {
      if (pixabayImages === null) {
        return this.setState(() => ({
          error: `I'm sorry, there was an error. Please refresh the page and try your search again.`,
          pixabayApiLoading: false,
        }));
      }
      return this.setState(() => ({
        pixabayImages,
        pixabayApiLoading: false,
      }));
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component did update');
    const { searchQuery: prevSearchQuery } = prevProps;
    const { searchQuery } = this.props;

    if (searchQuery !== prevSearchQuery) {
      queryPixabay(searchQuery).then(pixabayImages => {
        if (pixabayImages === null) {
          return this.setState(() => ({
            error: `I'm sorry, there was an error. Please refresh the page and try your search again.`,
            pixabayApiLoading: false,
          }));
        }
        return this.setState(() => ({
          pixabayImages,
          pixabayApiLoading: false,
        }));
      });
    }
  }

  render() {
    console.log('.............RENDER.............');
    const { pixabayImages, error, pixabayApiLoading } = this.state;

    if (pixabayApiLoading) {
      return <LoadingScreen />;
    }

    if (error) {
      return (
        <div>
          <p>{error}</p>
        </div>
      );
    }

    return <ImageGrid pixabayImages={pixabayImages} />;
  }
}

DisplaySearchResults.propTypes = {
  searchQuery: PropTypes.string,
};

export default DisplaySearchResults;
