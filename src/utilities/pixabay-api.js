// Fetches image data from Pixabay database
// input: string | output: array of objects
async function getPictures(searchQuery) {
  const urlString = searchQuery.replace(' ', '+');
  const fetchResponse = await fetch(
    `https://pixabay.com/api/?key=${
      process.env.PIXABAY_API_KEY
    }&q=${urlString}&image_type=photo`
  );
  const searchResultObj = await fetchResponse.json();
  const { hits: searchResultArray } = searchResultObj;

  return searchResultArray;
}

// Filters through fetched image data making new objects with relevant properties
// input: array of objects | output: array of objects
function processSearchResult(resultsArray) {
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

// Combines getPictures and processSearchResult functions into one function
// input: array of objects | output: array of objects
async function queryPixabay(searchQuery) {
  const fetchedResult = await getPictures(searchQuery).catch(handleError);
  const searchResult = await processSearchResult(fetchedResult);
  console.log('Pixabay API was queried successfully.');
  console.log('Pixabay result:', searchResult);
  return searchResult;
}

export default queryPixabay;
