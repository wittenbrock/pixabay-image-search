import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryPixabay from '../utilities/pixabay-api';
import LoadingScreen from './loading-screen';
import ImageGallery from './image-gallery';

// Checks if all the images in the image gallery have been loaded to the DOM
// returns true if all the images have not been loaded yet
// returns false if all the images have loaded
// input: HTML DOM node | output: true or false boolean
function areImagesStillLoading(htmlParentNode) {
  const htmlImageElements = [...htmlParentNode.querySelectorAll('img')];

  return !htmlImageElements.every(image => image.complete);
}

class DisplaySearchResults extends Component {
  static propTypes = {
    searchQuery: PropTypes.string,
  };

  state = {
    pixabayImages: [],
    pixabayResponseError: null,
    imagesAreLoading: true,
  };

  componentDidMount = () => {
    const { searchQuery } = this.props;
    queryPixabay(searchQuery).then(pixabayImages => {
      if (pixabayImages === null) {
        return this.setState(() => ({
          pixabayResponseError: `I'm sorry, there was an error connecting to the Pixabay database. Please refresh the page and try your search again.`,
          imagesAreLoading: false,
        }));
      }
      return this.setState(() => ({
        pixabayImages,
      }));
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { searchQuery: prevSearchQuery } = prevProps;
    const { searchQuery } = this.props;

    if (searchQuery !== prevSearchQuery) {
      queryPixabay(searchQuery).then(pixabayImages => {
        if (pixabayImages === null) {
          return this.setState(() => ({
            pixabayResponseError: `I'm sorry, there was an error connecting to the Pixabay database. Please refresh the page and try your search again.`,
            imagesAreLoading: false,
          }));
        }
        if (pixabayImages.length === 0) {
          return this.setState(() => ({
            pixabayResponseError: `I'm sorry, your search did not produce any results.`,
            imagesAreLoading: false,
          }));
        }
        return this.setState(() => ({
          pixabayImages,
          imagesAreLoading: true,
        }));
      });
    }
  };

  // when imagesAreLoading = true, <LoadingScreen /> is visible
  handleImagesLoaded = () => {
    this.setState({
      imagesAreLoading: areImagesStillLoading(this.galleryElement),
    });
  };

  renderLoadingScreen() {
    const { imagesAreLoading } = this.state;
    return imagesAreLoading ? <LoadingScreen /> : null;
  }

  render() {
    console.log('............. DisplaySearchResults RENDERED.............');
    const {
      pixabayImages,
      pixabayResponseError,
      imagesAreLoading,
    } = this.state;

    if (pixabayResponseError) {
      return (
        <div>
          <p>{pixabayResponseError}</p>
        </div>
      );
    }

    // if (pixabayImages === []) {
    //   console.log('pixabayImage is an empty array.');
    // }

    return (
      <div
        ref={element => {
          this.galleryElement = element;
        }}
      >
        {this.renderLoadingScreen()}
        <ImageGallery
          pixabayImages={pixabayImages}
          handleImagesLoaded={this.handleImagesLoaded}
          imagesAreLoading={imagesAreLoading}
        />
      </div>
    );
  }
}

export default DisplaySearchResults;
