// js file for index.html

import { displayMovies } from "./moduler/displayFunctions.js";
import { getTrendingMovies, getTopRatedMovies, getPopularMovies } from "./moduler/apiFunctions.js";
import { topRatedBtn, popularBtn, trendingBtn, pageTitle, form } from "./moduler/variables.js";
import { displayError, networkListener } from "./moduler/errorHandling.js";

networkListener();

// display only 10 movies using slice
const displayLimitedMovies = (movies) => {
    const maxMovies = 10;
    const limitedMovies = movies.slice(0, maxMovies);
    displayMovies(limitedMovies);
};

// display trending movies when th esite loads
getTrendingMovies()
  .then( displayLimitedMovies )
  .catch( error => {
        displayError(error);
    });

trendingBtn.classList.add('selected-button');

// DISPLAY TOP RATED MOVIES BUTTON
topRatedBtn.addEventListener('click', event => {
  event.preventDefault();
  pageTitle.innerText = 'TOP RATED';

  topRatedBtn.classList.add('selected-button');
  popularBtn.classList.remove('selected-button');
  trendingBtn.classList.remove('selected-button');
  
  getTopRatedMovies()
    .then( displayLimitedMovies )
    .catch( error => {
        displayError(error);
    });
})

// DISPLAY POPULAR MOVIES BUTTON
popularBtn.addEventListener('click', (event) => {
  event.preventDefault();
  pageTitle.innerText = 'POPULAR';

  topRatedBtn.classList.remove('selected-button');
  popularBtn.classList.add('selected-button');
  trendingBtn.classList.remove('selected-button');

  getPopularMovies()
    .then( displayLimitedMovies)
    .catch( error => {
        displayError(error);
    });
});

// DISPLAY TRENDING MOVIES BUTTON
trendingBtn.addEventListener('click', (event) => {
  event.preventDefault();
  pageTitle.innerText = 'TRENDING';

  topRatedBtn.classList.remove('selected-button');
  popularBtn.classList.remove('selected-button');
  trendingBtn.classList.add('selected-button');

  getTrendingMovies()
    .then( displayLimitedMovies)
    .catch( error => {
        displayError(error);
    });
});

// SEARCH BAR
form.addEventListener('submit', event => {
    event.preventDefault();
    const searchInput = document.querySelector('#search-input').value.trim();

    if (searchInput === "") {
        alert("Please enter a name or a title!");
        return;
    }
    window.location.href = `./html/search-results.html?query=${encodeURIComponent(searchInput)}`;
    form.reset();
});