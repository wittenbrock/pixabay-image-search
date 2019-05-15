import React from 'react';
import PropTypes from 'prop-types';

const PixabayImage = props => {
  // const { webformatURL, tags, webformatWidth, webformatHeight } = props;
  const {
    id,
    webformatURL,
    tags,
    handleImagesLoaded,
    handleTogglingModalImage,
  } = props;
  return (
    <img
      id={id}
      src={webformatURL}
      alt={tags}
      onLoad={() => handleImagesLoaded()}
      onError={() => handleImagesLoaded()}
      onClick={() => handleTogglingModalImage(id)}
      // width={webformatWidth}
      // height={webformatHeight}
    />
  );
};

PixabayImage.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  handleImagesLoaded: PropTypes.func.isRequired,
  handleTogglingModalImage: PropTypes.func.isRequired,
  // webformatWidth: PropTypes.number.isRequired,
  // webformatHeight: PropTypes.number.isRequired,
};

export default PixabayImage;
