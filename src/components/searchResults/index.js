import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FadeLoader } from 'react-spinners';
import queryPixabay from '../../utilities/pixabay-api';
import ImageGallery from '../imageGallery';
import Modal from '../modal/index';
import SearchBar from '../searchBar/index';
import Error from '../error/index';
import { StyledAnchor, SearchResultsContainer, Centered } from './style';
import './grid-styles.css';

// Check if all the images have loaded to the DOM
// input: HTML DOM node | output: true or false boolean
function areImagesStillLoading(htmlImageGallery) {
  const htmlImageElements = [...htmlImageGallery.querySelectorAll('img')];
  return !htmlImageElements.every(image => image.complete);
}

class SearchResults extends Component {
  static propTypes = {
    searchQuery: PropTypes.string.isRequired,
    setImagesAreLoadingTo: PropTypes.func.isRequired,
    imagesAreLoading: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  state = {
    pixabayImages: [],
    pixabayConnectionError: null,
    noImagesWereReturned: null,
    isModalVisible: null,
    idOfClickedImage: null,
  };

  // Calls the Pixabay database API with the user's search
  // then sets the state depending on what Pixabay returns
  performPixabaySearch = userSearch => {
    const { setImagesAreLoadingTo } = this.props;
    queryPixabay(userSearch)
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

    if (searchQuery !== undefined && searchQuery !== '') {
      this.performPixabaySearch(searchQuery);
    }
  };

  // after a new search is inputted, reset the state, then query Pixabay
  componentDidUpdate = prevProps => {
    const { searchQuery } = this.props;
    const { searchQuery: prevSearchQuery } = prevProps;

    if (searchQuery !== prevSearchQuery) {
      // reset the state before starting a new search
      this.setState(() => ({
        pixabayImages: [],
        pixabayConnectionError: null,
        noImagesWereReturned: null,
        isModalVisible: null,
        idOfClickedImage: null,
      }));
      // start a new search
      this.performPixabaySearch(searchQuery);
    }
  };

  // loops through all the images in the gallery and add a css grid class
  buildCssGrid = htmlImageGallery => {
    const htmlImageElements = [...htmlImageGallery.querySelectorAll('img')];

    htmlImageElements.forEach((image, number) =>
      image.classList.add(`img${number}`)
    );
  };

  // after all the images have loaded to the DOM, set imagesAreLoading to false
  handleImagesLoaded = () => {
    const { setImagesAreLoadingTo } = this.props;
    const result = areImagesStillLoading(this.imageGalleryRef);
    this.buildCssGrid(this.imageGalleryRef);
    setImagesAreLoadingTo(result);
  };

  // display the loading animation as the images are loading to the DOM
  renderLoadingAnimation = () => {
    const { imagesAreLoading } = this.props;
    return imagesAreLoading ? (
      <Centered>
        <FadeLoader />
      </Centered>
    ) : null;
  };

  showModal = id => {
    this.setState(() => ({
      idOfClickedImage: id,
      isModalVisible: true,
    }));
  };

  hideModal = () => {
    this.setState(() => ({
      isModalVisible: false,
    }));
  };

  renderModalImage = () => {
    const { pixabayImages, isModalVisible, idOfClickedImage } = this.state;
    const clickedImage = pixabayImages.find(
      imgData => imgData.id === idOfClickedImage
    );
    return isModalVisible ? (
      <Modal
        tags={clickedImage.tags}
        smallImageUrl={clickedImage.webformatURL}
        smallImageWidth={clickedImage.webformatWidth}
        smallImageHeight={clickedImage.webformatHeight}
        largeImageUrl={clickedImage.largeImageURL}
        largeImageWidth={clickedImage.imageWidth}
        largeImageHeight={clickedImage.imageHeight}
        handleClosingModal={this.hideModal}
      />
    ) : null;
  };

  setImageGalleryRef = htmlElement => {
    this.imageGalleryRef = htmlElement;
  };

  render() {
    const { searchQuery } = this.props;
    const {
      imagesAreLoading,
      handleSubmit,
      setImagesAreLoadingTo,
    } = this.props;
    const {
      pixabayImages,
      pixabayConnectionError,
      noImagesWereReturned,
    } = this.state;

    if (pixabayConnectionError) {
      return (
        <Error
          handleSubmit={handleSubmit}
          setImagesAreLoadingTo={setImagesAreLoadingTo}
          errorMessage={[
            `There was an error connecting to Pixabay's database. If this error persists, please check if `,
            <StyledAnchor href="https://www.pixabay.com/">
              pixabay.com
            </StyledAnchor>,
            ` is down for maintenance.`,
          ]}
        />
      );
    }

    if (noImagesWereReturned) {
      return (
        <Error
          handleSubmit={handleSubmit}
          setImagesAreLoadingTo={setImagesAreLoadingTo}
          errorMessage={[
            `Your search `,
            <strong>{searchQuery}</strong>,
            ` did not match any images.`,
          ]}
        />
      );
    }

    return (
      <SearchResultsContainer>
        <header>
          <SearchBar
            onSubmit={handleSubmit}
            setImagesAreLoadingTo={setImagesAreLoadingTo}
            placeholderText="Search images"
          />
          <p>
            You searched for: <strong>{searchQuery}</strong>
          </p>
        </header>
        {this.renderLoadingAnimation()}
        {this.renderModalImage()}
        <div ref={this.setImageGalleryRef}>
          <ImageGallery
            pixabayImages={pixabayImages}
            handleImagesLoaded={this.handleImagesLoaded}
            imagesAreLoading={imagesAreLoading}
            handleShowingModal={this.showModal}
          />
        </div>
      </SearchResultsContainer>
    );
  }
}

export default SearchResults;
