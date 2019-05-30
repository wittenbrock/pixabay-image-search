![pixabay-image-search](https://user-images.githubusercontent.com/41911653/58650130-6a1af880-82fd-11e9-9b58-b547b19b6605.png)

# [Pixabay Image Search](https://dazzling-montalcini-88ef0f.netlify.com)

Pixabay Image Search is a React application that allows users to search the [Pixabay database](https://pixabay.com/) for images. This project is currently being on hosted on [Netlify](https://dazzling-montalcini-88ef0f.netlify.com).

## Features
* Displays up to 20 images with each search query
* Generates a responsive image gallery
* Allows users to download low and high resolution versions of each image 
* Is keyboard accessible on Chrome and Firebox
* Is mobile and desktop friendly

## Installation

This application was build using Node version 10.15.1 and NPM version 6.9.0. For best results, install this project with these versions or greater.

1. Clone this repository to your computer.
```bash
git clone https://github.com/wittenbrock/pixabay-image-search.git 
```

2. On the master branch, install the NPM dependencies.
```bash
npm install
```

3. This project requires a Pixabay API key. Create an account at [pixabay.com](https://pixabay.com/api/docs/) to get your key.

4. Create a .env file in your root directory.
```bash
touch .env
```

5. Inside your .env file, create a variable called PIXABAY_API_KEY and set it to your unique API key.
```bash
PIXABAY_API_KEY = yourUniqueApiKey
```

6. Open the project on a development server.
```bash
npm start
```

7. View the project in your internet browser at [http://localhost:9000](http://localhost:9000).


## Tools

This project:

* was built with **Webpack 4** and **React**.
* uses **React Router** for client side routing.
* uses **AWS Lambda Functions** and the **Fetch API** for database queries
* is styled with **Styled Components**.
* [is hosted here on **Netlify**](https://dazzling-montalcini-88ef0f.netlify.com).
