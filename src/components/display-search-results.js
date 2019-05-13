import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FadeLoader } from 'react-spinners';
import queryPixabay from '../utilities/pixabay-api';
import ImageGallery from './image-gallery';

// Check if all the images have loaded to the DOM
// input: HTML DOM node | output: true or false boolean
function areImagesStillLoading(htmlImageGallery) {
  const htmlImageElements = [...htmlImageGallery.querySelectorAll('img')];
  return !htmlImageElements.every(image => image.complete);
}

class DisplaySearchResults extends Component {
  static propTypes = {
    searchQuery: PropTypes.string,
    setImagesAreLoadingTo: PropTypes.func,
    imagesAreLoading: PropTypes.bool,
  };

  state = {
    pixabayImages: [],
    pixabayConnectionError: null,
    noImagesWereReturned: null,
  };

  // Calls the Pixabay database API with the user's search
  // then sets the state depending on what Pixabay returns
  performPixabaySearch = searchQuery => {
    const { setImagesAreLoadingTo } = this.props;
    queryPixabay(searchQuery)
      // if a connection error occurred
      .catch(() => {
        setImagesAreLoadingTo(false);
        this.setState(() => ({
          pixabayConnectionError: true,
        }));
      })
      // if the search didn't match any images
      .then(pixabayImages => {
        if (pixabayImages.length === 0) {
          setImagesAreLoadingTo(false);
          return this.setState(() => ({
            noImagesWereReturned: true,
          }));
        }
        // if the search was successful
        return this.setState(() => ({
          pixabayImages,
        }));
      });
  };

  // after the component mounts query Pixabay
  componentDidMount = () => {
    const { searchQuery } = this.props;
    this.performPixabaySearch(searchQuery);
  };

  // after a new search is inputted, reset the state, then query Pixabay
  componentDidUpdate = prevProps => {
    const { searchQuery: prevSearchQuery } = prevProps;
    const { searchQuery } = this.props;

    if (searchQuery !== prevSearchQuery) {
      // reset the state before starting a new search
      this.setState(() => ({
        pixabayImages: [],
        pixabayConnectionError: null,
        noImagesWereReturned: null,
      }));
      // start a new search
      this.performPixabaySearch(searchQuery);
    }
  };

  // After all the images have loaded to the DOM, set imagesAreLoading to false
  handleImagesLoaded = () => {
    const { setImagesAreLoadingTo } = this.props;
    const result = areImagesStillLoading(this.galleryElement);
    setImagesAreLoadingTo(result);
  };

  // display the loading animation as the images are loading to the DOM
  renderLoadingAnimation() {
    const { imagesAreLoading } = this.props;
    return imagesAreLoading ? <FadeLoader /> : null;
  }

  render() {
    const { searchQuery, imagesAreLoading } = this.props;
    const {
      pixabayImages,
      pixabayConnectionError,
      noImagesWereReturned,
    } = this.state;

    if (pixabayConnectionError) {
      return (
        <div>
          <p>
            There was an error connecting to Pixabay's database. Please refresh
            the page and try your search again. If this error persists, please
            check if <a href="https://pixabay.com/">pixabay.com</a> is down for
            maintenance.
          </p>
        </div>
      );
    }

    if (noImagesWereReturned) {
      return (
        <div>
          <p>
            Your search <b>{searchQuery}</b> did not match any images. Please
            try a different search.
          </p>
        </div>
      );
    }

    return (
      <div
        ref={element => {
          this.galleryElement = element;
        }}
      >
        {this.renderLoadingAnimation()}
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
