// js file for tvshows.html

import { displayMovies } from "./moduler/displayFunctions.js";
import { getPopularShows } from "./moduler/apiFunctions.js";
import { form} from "./moduler/variables.js";
import { displayError, networkListener } from "./moduler/errorHandling.js";

networkListener();

// display popular tv shows when page loads
getPopularShows()
  .then( data => displayMovies(data.results))
  .catch( error => {
        displayError(error);
    });

// SEARCH BAR
form.addEventListener('submit', event => {
    event.preventDefault();
    const searchInput = document.querySelector('#search-input').value.trim();

    if (searchInput === "") {
        alert("Please enter a name or a title!");
        return;
    }
    window.location.href = `./search-results.html?query=${encodeURIComponent(searchInput)}`;
    form.reset();
});