import React, { Component } from 'react';

async function getPictures(searchQuery) {
  console.log('2. getPictures runs');
  const urlString = searchQuery.replace(' ', '+');
  // const urlString = 'cats';
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

function processSearchResult(resultsArray) {
  console.log('4. processSearchResult runs');
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
      searchQuery: '',
      prevSearchQuery: '',
      searchResult: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleClick() {
    // event.preventDefault();
    const { searchQuery, prevSearchQuery } = this.state;
    if (searchQuery !== prevSearchQuery) {
      console.log('1. handleClick runs');
      const fetchedResult = await getPictures(searchQuery).catch(handleError);
      console.log('3. handleClick getPictures', fetchedResult);
      const searchResult = await processSearchResult(fetchedResult);
      console.log('5. handleClick processResults', searchResult);
      this.setState(() => ({ searchResult, prevSearchQuery: searchQuery }));
    }
  }

  handleChange(event) {
    const { value: searchQuery } = event.target;

    this.setState(() => ({ searchQuery }));
  }

  render() {
    const { searchResult } = this.state;
    return (
      <div>
        <label htmlFor="search-input">
          <input id="search-input" type="text" onChange={this.handleChange} />
        </label>
        <button type="button" onClick={this.handleClick}>
          Submit
        </button>
        {/* <button type="button" onClick={this.handleClick}>
          Search
        </button> */}
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
