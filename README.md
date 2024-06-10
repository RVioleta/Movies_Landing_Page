# Movie Landing Page

This repository is for the code for the practical project from Fledgeworks.

I have used API I found on the Internet so I can load all of the movies, genres from API. The filtering also is done by sending API request to get specific movies

## Starting the project
After you clone the project, you need to save the api key in local storage because we can't use .env file to save secrets when working with jQuery. The API key key be provied upon a request.

1. Set the api key in the local storage in your browser
2. Or run the following code in the console
```js
localStorage.setItem("apiKey", "<THE_API_KEY>")
```
3. Or create an api key here https://rapidapi.com/jakash1997/api/advanced-movie-search
4. Refresh the page
