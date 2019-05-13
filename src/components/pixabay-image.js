import React from 'react';
import PropTypes from 'prop-types';

const imgStyle = {
  height: '30px',
  width: '30px',
};

const PixabayImage = props => {
  // const { webformatURL, tags, webformatWidth, webformatHeight } = props;
  const { webformatURL, tags, handleImagesLoaded } = props;
  return (
    <div>
      <img
        style={imgStyle}
        src={webformatURL}
        alt={tags}
        onLoad={() => handleImagesLoaded()}
        onError={() => handleImagesLoaded()}
        // width={webformatWidth}
        // height={webformatHeight}
      />
    </div>
  );
};

PixabayImage.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  handleImagesLoaded: PropTypes.func.isRequired,
  // webformatWidth: PropTypes.number.isRequired,
  // webformatHeight: PropTypes.number.isRequired,
};

export default PixabayImage;
