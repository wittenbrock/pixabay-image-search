import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PixabayImage from './pixabay-image';

const Row = styled.div`
  display: ${props => (props.imagesAreLoading ? 'none' : 'flex')};
`;

const ImageGallery = props => {
  const { pixabayImages, handleImagesLoaded, imagesAreLoading } = props;
  return (
    <Row imagesAreLoading={imagesAreLoading}>
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
            webformatURL={webformatURL}
            tags={tags}
            webformatWidth={webformatWidth}
            webformatHeight={webformatHeight}
            handleImagesLoaded={handleImagesLoaded}
          />
        );
      })}
    </Row>
  );
};

// TODO: Add PropTypes.shape() validation once passed props are finally determined
ImageGallery.propTypes = {
  pixabayImages: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleImagesLoaded: PropTypes.func.isRequired,
  imagesAreLoading: PropTypes.bool.isRequired,
};

export default ImageGallery;
