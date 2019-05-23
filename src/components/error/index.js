import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CenteredColumn } from '../helper-styles';
import SearchBar from '../searchBar/index';

const ErrorMessage = styled.p`
  max-width: 50rem;
`;

// Displays when there is a pixabay connection error or
// when the search query doesn't match any images.
const Error = props => {
  const { handleSubmittedSearch, setImagesAreLoadingTo, errorMessage } = props;
  return (
    <CenteredColumn>
      <header>
        <SearchBar
          onSubmit={handleSubmittedSearch}
          setImagesAreLoadingTo={setImagesAreLoadingTo}
          placeholderText="Search images"
        />
      </header>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </CenteredColumn>
  );
};

Error.propTypes = {
  handleSubmittedSearch: PropTypes.func.isRequired,
  setImagesAreLoadingTo: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default Error;
