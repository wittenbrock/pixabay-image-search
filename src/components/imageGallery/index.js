import React from 'react';
import PropTypes from 'prop-types';
import PixabayImage from '../image';
import { ScreenReaderOnly } from '../helper-styles';
import { StyledFigure, ImageContainer, Padding, StyledSpan } from './style';

const ImageGallery = props => {
  const {
    pixabayImages,
    handleImagesLoaded,
    imagesAreLoading,
    handleActivatingModal,
    imageGalleryRef,
  } = props;
  return (
    <StyledFigure imagesAreLoading={imagesAreLoading} ref={imageGalleryRef}>
      <ScreenReaderOnly as="h1">Search Results</ScreenReaderOnly>
      {pixabayImages.map(imageData => {
        const {
          id,
          tags,
          webformatURL,
          webformatHeight,
          webformatWidth,
          imageWidth,
          imageHeight,
        } = imageData;
        return (
          <ImageContainer
            type="button"
            key={id}
            id={id}
            width={webformatWidth}
            height={webformatHeight}
            onClick={() => handleActivatingModal(id)}
          >
            <ScreenReaderOnly>View fullscreen image</ScreenReaderOnly>
            <Padding width={webformatWidth} height={webformatHeight} />
            <PixabayImage
              id={id}
              webformatURL={webformatURL}
              tags={tags}
              handleImagesLoaded={handleImagesLoaded}
            />
            <StyledSpan aria-hidden="true">
              {imageWidth} x {imageHeight}
            </StyledSpan>
          </ImageContainer>
        );
      })}
    </StyledFigure>
  );
};

// TODO: Add PropTypes.shape() validation once passed props are finally determined
ImageGallery.propTypes = {
  pixabayImages: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleImagesLoaded: PropTypes.func.isRequired,
  imagesAreLoading: PropTypes.bool.isRequired,
  handleActivatingModal: PropTypes.func.isRequired,
  imageGalleryRef: PropTypes.object.isRequired,
};

export default ImageGallery;
