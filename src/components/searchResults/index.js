import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Circle } from 'styled-spinkit';
import queryPixabay from '../../utilities/pixabay-api';
import ImageGallery from '../imageGallery';
import Modal from '../modal/index';
import SearchBar from '../searchBar/index';
import Error from '../error/index';
import { ScreenReaderOnly } from '../helper-styles';
import { StyledAnchor, SearchResultsContainer, Centered } from './style';

// A container component responsible for calling the pixabay API
// then displaying error UI or the image gallery.
class SearchResults extends Component {
  static propTypes = {
    searchQuery: PropTypes.string.isRequired,
    setImagesAreLoadingTo: PropTypes.func.isRequired,
    imagesAreLoading: PropTypes.bool.isRequired,
    handleSubmittedSearch: PropTypes.func.isRequired,
  };

  state = {
    pixabayImages: [],
    pixabayConnectionError: null,
    noImagesWereReturned: null,
    isModalVisible: null,
    idOfClickedImage: null,
  };

  // Passed down through ImageGallery's props.
  imageGalleryRef = React.createRef();

  // Calls the Pixabay database API with the user's search,
  // then sets the state depending on Pixabay's response.
  // Used by componentDidMount and componentDidUpdate.
  performPixabaySearch = userSearch => {
    const { setImagesAreLoadingTo } = this.props;
    queryPixabay(userSearch)
      // If a connection error occurred.
      .catch(() => {
        setImagesAreLoadingTo(false);
        this.setState(() => ({
          pixabayConnectionError: true,
        }));
      })
      // If the search didn't match any images.
      .then(pixabayImages => {
        if (pixabayImages.length === 0) {
          setImagesAreLoadingTo(false);
          return this.setState(() => ({
            noImagesWereReturned: true,
          }));
        }
        // If the search was successful.
        return this.setState(() => ({
          pixabayImages,
        }));
      });
  };

  // Query Pixabay if the search is defined.
  componentDidMount = () => {
    const { searchQuery } = this.props;

    if (searchQuery !== undefined && searchQuery !== '') {
      this.performPixabaySearch(searchQuery);
    }
  };

  // After a new search is inputted, reset the state, then query Pixabay.
  componentDidUpdate = prevProps => {
    const { searchQuery } = this.props;
    const { searchQuery: prevSearchQuery } = prevProps;

    if (searchQuery !== prevSearchQuery) {
      // Reset the state.
      this.setState(() => ({
        pixabayImages: [],
        pixabayConnectionError: null,
        noImagesWereReturned: null,
        isModalVisible: null,
        idOfClickedImage: null,
      }));
      // Start a new search.
      this.performPixabaySearch(searchQuery);
    }
  };

  // Check if all the images in ImageGallery have finished loading to the DOM.
  checkIfImagesAreLoading = imageGalleryNode => {
    const htmlImageElements = [...imageGalleryNode.querySelectorAll('img')];
    return !htmlImageElements.every(image => image.complete);
  };

  // When all the images have loaded to the DOM, set imagesAreLoading to false.
  handleImagesLoaded = () => {
    const { setImagesAreLoadingTo } = this.props;
    const result = this.checkIfImagesAreLoading(this.imageGalleryRef.current);
    setImagesAreLoadingTo(result);
  };

  // Display the loading animation as the images are loading to the DOM.
  renderLoadingAnimation = () => {
    const { imagesAreLoading } = this.props;
    return imagesAreLoading ? (
      <Centered>
        <Circle color="hsl(0, 0%, 100%)" />
        <ScreenReaderOnly as="p">Loading Images</ScreenReaderOnly>
      </Centered>
    ) : null;
  };

  activateModal = id => {
    this.setState(() => ({
      idOfClickedImage: id,
      isModalVisible: true,
    }));
  };

  deactivateModal = () => {
    this.setState(() => ({
      isModalVisible: false,
    }));
  };

  // Find the id of the clicked image, then show that image in the modal.
  renderModal = () => {
    const { pixabayImages, isModalVisible, idOfClickedImage } = this.state;
    // Find the clicked image.
    const clickedImage = pixabayImages.find(
      imgData => imgData.id === idOfClickedImage
    );
    // Display the modal.
    return isModalVisible ? (
      <Modal
        tags={clickedImage.tags}
        smallImageUrl={clickedImage.webformatURL}
        largeImageUrl={clickedImage.largeImageURL}
        handleDeactivatingModal={this.deactivateModal}
      />
    ) : null;
  };

  render() {
    const {
      searchQuery,
      imagesAreLoading,
      handleSubmittedSearch,
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
          handleSubmittedSearch={handleSubmittedSearch}
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
          handleSubmittedSearch={handleSubmittedSearch}
          setImagesAreLoadingTo={setImagesAreLoadingTo}
          errorMessage={[
            `Your search "`,
            <strong>{searchQuery}</strong>,
            `" did not match any images.`,
          ]}
        />
      );
    }

    return (
      <SearchResultsContainer>
        <header>
          <SearchBar
            onSubmit={handleSubmittedSearch}
            setImagesAreLoadingTo={setImagesAreLoadingTo}
            placeholderText="Search images"
          />
        </header>
        {this.renderLoadingAnimation()}
        {this.renderModal()}
        <ImageGallery
          pixabayImages={pixabayImages}
          handleImagesLoaded={this.handleImagesLoaded}
          imagesAreLoading={imagesAreLoading}
          handleActivatingModal={this.activateModal}
          imageGalleryRef={this.imageGalleryRef}
        />
      </SearchResultsContainer>
    );
  }
}

export default SearchResults;
