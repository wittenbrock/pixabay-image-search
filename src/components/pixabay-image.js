import React from 'react';
import PropTypes from 'prop-types';

const PixabayImage = props => {
  const { webformatURL, tags, webformatWidth, webformatHeight } = props;
  return (
    <div>
      <img
        src={webformatURL}
        alt={tags}
        width={webformatWidth}
        height={webformatHeight}
      />
    </div>
  );
};

PixabayImage.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  webformatWidth: PropTypes.number.isRequired,
  webformatHeight: PropTypes.number.isRequired,
};

export default PixabayImage;
