import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PixabayImage from '../image';
import { FigureStyles } from './style';

const StyledFigure = styled.figure`
  ${FigureStyles};
`;

const ImageGallery = props => {
  const {
    pixabayImages,
    handleImagesLoaded,
    imagesAreLoading,
    handleTogglingModalImage,
  } = props;
  return (
    <StyledFigure imagesAreLoading={imagesAreLoading}>
      {pixabayImages.map(imageData => {
        const {
          id,
          tags,
          webformatURL,
          webformatWidth,
          webformatHeight,
        } = imageData;
        return (
          <PixabayImage
            key={id}
            id={id}
            webformatURL={webformatURL}
            tags={tags}
            webformatWidth={webformatWidth}
            webformatHeight={webformatHeight}
            handleImagesLoaded={handleImagesLoaded}
            handleTogglingModalImage={handleTogglingModalImage}
          />
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
  handleTogglingModalImage: PropTypes.func.isRequired,
};

export default ImageGallery;
