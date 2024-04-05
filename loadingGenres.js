$(document).ready(function () {
  apiKey = localStorage.getItem("apiKey");
  if (apiKey === null) {
    alert("Add the api key in local storage and reload");
  }
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://advanced-movie-search.p.rapidapi.com/genre/movie/list",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "advanced-movie-search.p.rapidapi.com",
    },
  };
  $.ajax(settings).done(function (response) {
    let genresArr = response.genres;
    let genreLeftCol = "";
    let genreRightCol = "";

    // loop for generating the html code for the genres on the left column
    for (let index = 0; index < 5; index++) {
      const genre = genresArr[index];
      genreLeftCol += `<button type="button" class="btn btn-outline-secondary text-white genre mt-4" onclick="filterGenreMovies(${genre.id}, '${genre.name}')">${genre.name}</button>`;
    }

    // loop for generating the html code for the genres on the right column

    for (let index = 6; index < 11; index++) {
      const genre = genresArr[index];
      genreRightCol += `<button type="button" class="btn btn-outline-secondary text-white genre mt-4" onclick="filterGenreMovies(${genre.id}, '${genre.name}')">${genre.name}</button>`;
    }
    $("#genres-left-col").append(genreLeftCol);
    $("#genres-right-col").append(genreRightCol);
  });
});
