import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PixabayImage from '../image';
import {
  FigureStyles,
  ImageContainerStyles,
  PaddingStyles,
  StyledParagraph,
} from './style';

const StyledFigure = styled.figure`
  ${FigureStyles};
`;

const ImageContainer = styled.button`
  ${ImageContainerStyles};
`;

const Padding = styled.i`
  ${PaddingStyles};
`;

const ImageGallery = props => {
  const {
    pixabayImages,
    handleImagesLoaded,
    imagesAreLoading,
    handleShowingModal,
  } = props;
  return (
    <StyledFigure imagesAreLoading={imagesAreLoading}>
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
            onClick={() => handleShowingModal(id)}
          >
            <Padding width={webformatWidth} height={webformatHeight} />
            <PixabayImage
              id={id}
              webformatURL={webformatURL}
              tags={tags}
              handleImagesLoaded={handleImagesLoaded}
            />
            <StyledParagraph aria-hidden="true">
              {imageWidth} x {imageHeight}
            </StyledParagraph>
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
  handleShowingModal: PropTypes.func.isRequired,
};

export default ImageGallery;
