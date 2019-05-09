import React from 'react';
import PropTypes from 'prop-types';
import PixabayImage from './pixabay-image';

const ImageGrid = props => {
  const { pixabayImages } = props;
  return (
    <div>
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
          />
        );
      })}
    </div>
  );
};

// TODO: Add PropTypes.shape() validation once passed props are finally determined
ImageGrid.propTypes = {
  pixabayImages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImageGrid;
