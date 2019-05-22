import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CenteredColumn } from '../helper-styles';
import SearchBar from '../searchBar/index';

const ErrorMessage = styled.p`
  max-width: 50rem;
`;

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
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </CenteredColumn>
  );
};

Error.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  setImagesAreLoadingTo: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default Error;
