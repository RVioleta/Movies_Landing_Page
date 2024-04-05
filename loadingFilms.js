//array with genre ids to shown on webpage
// optimized for adding new genres if needed
const genreIds = [
 { genreId: 28,    genreName: "Action",    genreHtmlId: "movie-list-action"},
 { genreId: 12,    genreName: "Adventure", genreHtmlId: "movie-list-adventure"},
 { genreId: 16,    genreName: "Animation", genreHtmlId: "movie-list-animation"},
 { genreId: 35,    genreName: "Comedy",    genreHtmlId: "movie-list-comedy"},
 { genreId: 80,    genreName: "Crime",     genreHtmlId: "movie-list-crime"},
 { genreId: 18,    genreName: "Drama",     genreHtmlId: "movie-list-drama"},
 { genreId: 10751, genreName: "Family",    genreHtmlId: "movie-list-family"},
 ];

$(document).ready(function () {
    apiKey = localStorage.getItem("apiKey")
    if (apiKey===null){
        alert("Add the api key in local storage and reload")
    }
    //iterate through genres
  for (let index = 0; index < genreIds.length; index++) {
    const element = genreIds[index];
    let genreMovies = ""

    const settings = {
      async: true,
      crossDomain: true,
      url: `https://advanced-movie-search.p.rapidapi.com/discover/movie?with_genres=${element.genreId}`,
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "advanced-movie-search.p.rapidapi.com",
      },
    };

    // generating the parent div for all genre
    genreMovies+= `<div id="${element.genreHtmlId}"><h3 class="genre-header">${element.genreName}</h3><div class="row row-cols-1 row-cols-1 row-cols-md-3 row-cols-lg-6 g-3 m-0">`
    $.ajax(settings).done(function (response) {
        for (let movieIndex = 0; movieIndex < 6; movieIndex++) {
            const movie = response.results[movieIndex];
            genreMovies+=`<div class="col">
            <div class="card big" onclick="console.log(123)">
              <img src="${movie.backdrop_path}" class="card-img-top" id="img2" alt="..." width=100px>
              <div class="card-body two">
                <h4 class="card-title">${movie.title}</h4>
                <p>${movie.release_date}</p>
                <p class="card-text">${movie.overview.substring(0, 75)}...</p>
              </div>
            </div>
          </div> 
            `
        }
        genreMovies+="</div></div>"
        $("#movies-list").append(genreMovies)
    })
  }
});
