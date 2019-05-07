import React, { Component } from 'react';

async function getPictures(searchQuery) {
  console.log('2. getPictures runs');
  // const urlString = searchQuery.replace(' ', '+');
  const urlString = 'cats';
  const fetchResponse = await fetch(
    `https://pixabay.com/api/?key=${
      process.env.PIXABAY_API_KEY
    }&q=${urlString}&image_type=photo`
  );
  const searchResultObj = await fetchResponse.json();
  // console.log('getPictures searchResult', searchResult);
  const { hits: searchResultArray } = searchResultObj;
  console.log('searchResultArray', searchResultArray);
  return searchResultArray;
  // console.log('processedData:', processedData);
}

function processSearchResults(resultsArray) {
  console.log('4. processSearchResults runs');
  return resultsArray.map(pictureObj => {
    const {
      id,
      tags,
      largeImageURL,
      imageWidth,
      imageHeight,
      webformatURL,
      webformatWidth,
      webformatHeight,
    } = pictureObj;
    return {
      id,
      tags,
      largeImageURL,
      imageWidth,
      imageHeight,
      webformatURL,
      webformatWidth,
      webformatHeight,
    };
  });
}

function handleError(error) {
  console.warn(error);
  return null;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    console.log('1. handleClick runs');
    const fetchResult = await getPictures().catch(handleError);
    console.log('3. handleClick getPictures', fetchResult);
    const searchResult = await processSearchResults(fetchResult);
    console.log('5. handleClick processResults', searchResult);
    this.setState({ searchResult });
  }

  render() {
    const { searchResult } = this.state;
    return (
      <div>
        <button type="button" onClick={this.handleClick}>
          Search
        </button>
        <div>
          {searchResult.map(pictureObj => {
            const {
              id,
              tags,
              webformatURL,
              webformatWidth,
              webformatHeight,
            } = pictureObj;
            return (
              <div key={id}>
                <img
                  src={webformatURL}
                  alt={tags}
                  width={webformatWidth}
                  height={webformatHeight}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
