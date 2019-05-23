import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PixabayImage from '../image';
import {
  FigureStyles,
  ImageContainerStyles,
  PaddingStyles,
  StyledSpan,
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
    handleActivatingModal,
    imageGalleryRef,
    imageContainerRef,
  } = props;
  return (
    <StyledFigure imagesAreLoading={imagesAreLoading} ref={imageGalleryRef}>
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
            ref={imageContainerRef}
          >
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
  imageContainerRef: PropTypes.object,
};

export default ImageGallery;
