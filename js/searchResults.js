// js file for search-results.html

import { getSearchResults } from "./moduler/apiFunctions.js";
import { displayMovieResults, displayPeopleResults } from "./moduler/displayFunctions.js";
import { moviesBtn, showsBtn, peopleBtn, pageTitle } from "./moduler/variables.js";
import { displayError, networkListener } from "./moduler/errorHandling.js";
// Imported Underscore.js library: https://underscorejs.org/#where
import _ from "https://cdn.jsdelivr.net/npm/underscore@1.13.7/underscore-esm-min.js ";

let searchArr = [];

networkListener();
moviesBtn.classList.add('selected-button');

// Get the search term from the URL
const url = new URLSearchParams(window.location.search);
const search = url.get('query');

// save the fetched array to be reused & filter it to display only movies
getSearchResults(search)
    .then( data => {
        searchArr = data;

        const onlyMovies = _.where(searchArr, { media_type: "movie" });
        displayMovieResults(onlyMovies);
        pageTitle.innerText = `${search.toUpperCase()}`;
    })
    .catch(error => {
        displayError(error);
    });

// DISPLAY MOVIES BUTTON
moviesBtn.addEventListener('click', event => {
    event.preventDefault();
    pageTitle.innerText = 'MOVIES';

    moviesBtn.classList.add('selected-button');
    showsBtn.classList.remove('selected-button');
    peopleBtn.classList.remove('selected-button');
  
    const onlyMovies = _.where(searchArr, {media_type: "movie" });
    displayMovieResults(onlyMovies);
})

// DISPLAY TV SHOW BUTTON
showsBtn.addEventListener('click', (event) => {
  event.preventDefault();
  pageTitle.innerText = 'SHOWS';

    moviesBtn.classList.remove('selected-button');
    showsBtn.classList.add('selected-button');
    peopleBtn.classList.remove('selected-button');

    const onlyShows = _.where(searchArr, {media_type: "tv" });
    displayMovieResults(onlyShows);

});

// DISPLAY PEOPLE BUTTON
peopleBtn.addEventListener('click', (event) => {
  event.preventDefault();
  pageTitle.innerText = 'PEOPLE';

    moviesBtn.classList.remove('selected-button');
    showsBtn.classList.remove('selected-button');
    peopleBtn.classList.add('selected-button');

    const onlyPeople = _.where(searchArr, {media_type: "person" });
    displayPeopleResults(onlyPeople);
});