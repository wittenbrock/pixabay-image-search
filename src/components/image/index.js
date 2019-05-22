import React from 'react';
import PropTypes from 'prop-types';
import { StyledImage } from './style';

const PixabayImage = props => {
  const { id, tags, webformatURL, handleImagesLoaded } = props;
  return (
    <StyledImage
      id={id}
      src={webformatURL}
      alt={tags}
      onLoad={() => handleImagesLoaded()}
      onError={() => handleImagesLoaded()}
    />
  );
};

PixabayImage.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  handleImagesLoaded: PropTypes.func.isRequired,
};

export default PixabayImage;
