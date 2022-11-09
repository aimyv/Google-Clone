# Google Clone - Lap 1 Code Challenge

## Description

This application is an imitation of the Google Search Console. Users can search 'turtle', 'tiger' or 'koala' in the console to get 10 relevant results.

## Deployed

- <a href="https://google-clone-code-challenge.netlify.app/" target="_blank">Frontend</a> on Netlify.
- <a href="https://google-clone-99dk.onrender.com/" target="_blank">Backend</a> on Render.

## Usage

- Console filters out non-letter characters e.g. 'turtle', 'TURTLE', 'TU24r!&l78e' will all retrieve the same results.
- If the console is empty, and you click 'Get Lucky', it will retrieve a random result. Else, it will retrieve a random result that is relevant to the query.
- If your search doesn't match any search query, an alert is displayed instructing you to search for either 'turtle', 'tiger' or 'koala'.

## Technologies

### HTML/CSS

We used HTML to structure the application and CSS to style it.

### JavaScript/Express.js

JavaScript was used in the client folder to fetch data from the API. It was used to create a REST API with `get` routes for various queries. This allowed the application to:

- fetch all results,
- fetch a specific result,
- fetch a random result,
- and fetch a random result that is relevant to the query in the console.

---

## Local Host (deprecated)

### Installation

- Clone or download this repository.
- Open your terminal.
- Make sure you are in the `lap1-code-challenge` directory.
- Install the node modules with `npm install`.

### Usage

- Run `npm run dev` to launch the server.
- <a href="http://localhost:3000/" target="_blank">Access</a> the backend.
- <a href="http://localhost:3000/google" target="_blank">All results.</a>
- http://localhost:3000/google followed by a number between 1 and 30 gives you a specific result e.g. <a href="http://localhost:3000/google/7" target="_blank">7th google search result</a>.
- A <a href="http://localhost:3000/google/random" target="_blank">random result.</a>
- A <a href="http://localhost:3000/google/random/turtle" target="_blank">random 'turtle'</a> result.
- A <a href="http://localhost:3000/google/random/tiger" target="_blank">random 'tiger'</a> result.
- A <a href="http://localhost:3000/google/random/koala" target="_blank">random 'koala'</a> result.
- Navigate to the client folder, right-click `index.html` and select `Go Live`.
