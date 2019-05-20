import React from 'react';
import PropTypes from 'prop-types';
import { CenteredColumn } from '../helper-styles';
import SearchBar from '../searchBar/index';

const Error = props => {
  const { handleSubmit, setImagesAreLoadingTo, errorMessage } = props;
  return (
    <CenteredColumn>
      <header>
        <SearchBar
          onSubmit={handleSubmit}
          setImagesAreLoadingTo={setImagesAreLoadingTo}
          placeholderText="Search images"
        />
      </header>
      <p>{errorMessage}</p>
    </CenteredColumn>
  );
};

Error.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  setImagesAreLoadingTo: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default Error;
