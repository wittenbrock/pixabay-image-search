const fetch = require('node-fetch');

// Takes the Pixabay API response and returns an array of objects with relevant properties
function processResponse(resultsArray) {
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

exports.handler = async function(event) {
  const searchParameters = event.queryStringParameters.search;
  // Environmental variables stored on Netlify
  const { API_TOKEN, API_URL } = process.env;
  const URL = `${API_URL}?key=${API_TOKEN}&q=${searchParameters}&image_type=photo`;

  try {
    // Perform the Pixabay API call.
    const response = await fetch(URL, {
      headers: { Accept: 'application/json' },
    });

    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText };
    }

    const data = await response.json();

    const result = processResponse(data.hits);

    // Send the image data to the front end.
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: null, // error messages are handled by the front end
    };
  }
};
