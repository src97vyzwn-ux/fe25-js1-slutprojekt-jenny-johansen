import { displayDetails, displayPeopleDetails } from "./moduler/displayFunctions.js";
import { getMoreMovieDetails, getMoreShowDetails, getMorePeopleDetails } from "./moduler/apiFunctions.js";
import { displayError, networkListener } from "./moduler/errorHandling.js";

// makes it possible to work with the query string
const url = new URLSearchParams(window.location.search);
const movieId = url.get('id');
const type = url.get('type');

networkListener();

// run the fetch request for more details & display according to appointed displayFunctions
if (movieId && type === 'movie') {
    getMoreMovieDetails(movieId)
        .then( data => displayDetails(data))
        .catch( error => {
                displayError(error);
        });
}
else if (movieId && type === 'tv') {
    getMoreShowDetails(movieId)
        .then( data => displayDetails(data))
        .catch( error => {
                displayError(error);
        });
} 
else if (movieId && type === 'person') {
    getMorePeopleDetails(movieId)
        .then( data => displayPeopleDetails(data))
        .catch( error => {
                displayError(error);
        });
}