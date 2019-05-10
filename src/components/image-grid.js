import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PixabayImage from './pixabay-image';

class ImageGrid extends Component {
  render() {
    const { pixabayImages } = this.props;
    return (
      <div
        ref={element => {
          this.galleryElement = element;
        }}
      >
        >
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
  }
}

// TODO: Add PropTypes.shape() validation once passed props are finally determined
ImageGrid.propTypes = {
  pixabayImages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImageGrid;
