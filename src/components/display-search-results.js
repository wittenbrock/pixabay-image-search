import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FadeLoader } from 'react-spinners';
import queryPixabay from '../utilities/pixabay-api';
// import LoadingScreen from './loading-screen';
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
    pixabayConnectionError: null,
    noImagesReturnedError: null,
    imagesAreLoading: true,
  };

  // Calls the Pixabay database API with the user's inputted search
  // then sets the state depending on what Pixabay returns
  performPixabaySearch = searchQuery => {
    queryPixabay(searchQuery)
      // if an error is returned
      .catch(() =>
        this.setState(() => ({
          pixabayConnectionError: true,
          noImagesReturnedError: false,
          imagesAreLoading: false,
        }))
      )
      // if the promise returns an empty array
      .then(pixabayImages => {
        if (pixabayImages.length === 0) {
          return this.setState(() => ({
            pixabayConnectionError: false,
            noImagesReturnedError: true,
            imagesAreLoading: false,
          }));
        }
        // if the promise returns an array of objects
        return this.setState(() => ({
          pixabayImages,
          pixabayConnectionError: false,
          noImagesReturnedError: false,
          imagesAreLoading: true,
        }));
      });
  };

  // query Pixabay when the component mounts
  componentDidMount = () => {
    const { searchQuery } = this.props;
    this.performPixabaySearch(searchQuery);
  };

  // query Pixabay when a new search is inputted
  componentDidUpdate = (prevProps, prevState) => {
    const { searchQuery: prevSearchQuery } = prevProps;
    const { searchQuery } = this.props;

    if (searchQuery !== prevSearchQuery) {
      this.performPixabaySearch(searchQuery);
    }
  };

  // calls areImagesStillLoading, which sets the state imagesAreLoading to true or false
  handleImagesLoaded = () => {
    this.setState({
      imagesAreLoading: areImagesStillLoading(this.galleryElement),
    });
  };

  // when imagesAreLoading = true, <FadeLoader /> is displayed on render
  renderLoadingScreen() {
    const { imagesAreLoading } = this.state;
    return imagesAreLoading ? <FadeLoader /> : null;
  }

  render() {
    const { searchQuery } = this.props;
    const {
      pixabayImages,
      pixabayConnectionError,
      noImagesReturnedError,
      imagesAreLoading,
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

    if (noImagesReturnedError) {
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
