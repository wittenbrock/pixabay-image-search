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
    handleShowingModal,
  } = props;
  return (
    <StyledFigure imagesAreLoading={imagesAreLoading}>
      {pixabayImages.map(imageData => {
        const { id, tags, webformatURL } = imageData;
        return (
          <PixabayImage
            key={id}
            id={id}
            webformatURL={webformatURL}
            tags={tags}
            handleImagesLoaded={handleImagesLoaded}
            handleShowingModal={handleShowingModal}
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
  handleShowingModal: PropTypes.func.isRequired,
};

export default ImageGallery;
