import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledImage = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  vertical-align: bottom;
`;

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
