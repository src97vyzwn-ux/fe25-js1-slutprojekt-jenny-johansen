// js file for all the functions that display something except for errors

const cardsContainer = document.querySelector('#cards-box');

const backdrop = document.querySelector('#backdrop-box');
const posterImg = document.querySelector('#poster-img')
const titleH1 = document.querySelector('#title');
const description = document.querySelector('#description');
const country = document.querySelector('#country');
const language = document.querySelector('#language');
const rating = document.querySelector('#rating');
const releaseDate = document.querySelector('#release-date');

// display Movies
export function displayMovies(movies){
    cardsContainer.innerHTML = '';
  
    const movieH2 = document.createElement('h2');
    movieH2.innerText = 'Movies';

    for (const movie of movies) {
        const movieCard = document.createElement('article');
        movieCard.classList.add('movie-card');

        const star = document.createElement('div');
        star.classList.add('star');

        const ratingScore = Math.round(movie.vote_average * 10)/10;

        let starColor;
        if (ratingScore >= 7) {
            starColor = "#4CAF50";
        } else if (ratingScore >= 4) {
            starColor = "#fcb303";
        } else {
            starColor = "#f44336";
        }
        
        star.innerHTML = `<svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" style="width: 60%; height: 60%;">
                <path fill="${starColor}" stroke="#ffffff" stroke-width="20" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                <text 
                    x="50%" 
                    y="58%" 
                    text-anchor="middle" 
                    dominant-baseline="middle" 
                    fill="black" 
                    font-size="200" 
                    font-weight="800" 
                    font-family="Arial, sans-serif">
                    ${ratingScore}
                </text></svg>`;;

        const movieTitle = document.createElement('h3');
        if (movie.title){
            movieTitle.innerText = movie.title;
        }
        else if(movie.name){
            movieTitle.innerText = movie.name;
        }
        else{
            movieTitle.innerText = 'Title is missing';
        }

        const releaseDate = document.createElement('p');
        if(movie.release_date){
            releaseDate.innerText = 'Released: ' + movie.release_date;
        }
        else if(movie.first_air_date){
            releaseDate.innerText = 'Aired: ' + movie.first_air_date;
        }
        else{
            releaseDate.innerText = 'Release date Unknown';
        }
        
        const moviePoster = document.createElement('img');
        if (movie.poster_path){
            moviePoster.src = `https://image.tmdb.org/t/p/w342${movie.poster_path}`;
            moviePoster.alt = `${movie.title} Poster`;
        }
        else {
            moviePoster.src = '../css/missing_poster.png';
            moviePoster.alt = `Missing Poster`;
        }
        moviePoster.classList.add('movie-img');

        let path = '';
        const type = movie.title ? 'movie' : 'tv';
        
        if(window.location.pathname.includes('/html/')){
            path = './details.html';
        }
        else{
            path = './html/details.html';
        }
        movieCard.addEventListener('click', () => {
            window.location.href = `${path}?id=${movie.id}&type=${type}`;
        })

        movieCard.append(star, moviePoster, movieTitle, releaseDate);
        cardsContainer.appendChild(movieCard);
      }
}

// display movie cards for searchresults
export function displayMovieResults(results){
    cardsContainer.innerHTML = '';

    for (const result of results){
        const resultsArt = document.createElement('article');
        resultsArt.classList.add('movie-card');

        const star = document.createElement('div');
        star.classList.add('star');
        const ratingScore = Math.round(result.vote_average * 10)/10;

        let starColor;
        if (ratingScore >= 7) {
            starColor = "#4CAF50";
        } else if (ratingScore >= 4) {
            starColor = "#fcb303";
        } else {
            starColor = "#f44336";
        }
        
        star.innerHTML = `<svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" style="width: 60%; height: 60%;">
                <path fill="${starColor}" stroke="#ffffff" stroke-width="20" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                <text 
                    x="50%" 
                    y="58%" 
                    text-anchor="middle" 
                    dominant-baseline="middle" 
                    fill="black" 
                    font-size="200" 
                    font-weight="800" 
                    font-family="Arial, sans-serif">
                    ${ratingScore}
                </text></svg>`;;

        const img = document.createElement('img');

        if (result.poster_path){
            img.src = `https://image.tmdb.org/t/p/w342${result.poster_path}`;
            img.alt = `${result.title} Poster`;
        }
        else {
            img.src = '../img/missing_poster.png';
            img.alt = `Missing Poster`;
        }
            img.classList.add('movie-img');

        const releaseDate = document.createElement('p');
        if(result.release_date){
            releaseDate.innerText = 'Released: ' + result.release_date;
        }
        else if(result.first_air_date){
            releaseDate.innerText = 'Aired: ' + result.first_air_date;
        }
        else{
            releaseDate.innerText = 'Release date Unknown';
        }

        const title = document.createElement('h3');
        if(result.title){
            title.innerText = result.title;
        }
        else if(result.name){
            title.innerText = result.name;
        }
        else{
            title.innerText = 'Title is missing';
        }

        const movieDescription = document.createElement('p');
        const limit = 90;
        if (result.overview && result.overview.length > limit) {
        movieDescription.innerText = result.overview.slice(0, limit) + "...";
        }
        else {
        movieDescription.innerText = result.overview || "No description available";
        }

        let path = '';
        const type = result.title ? 'movie' : 'tv';
        
        if(window.location.pathname.includes('/html/')){
            path = './details.html';
        }
        else{
            path = './html/details.html';
        }
        resultsArt.addEventListener('click', () => {
            window.location.href = `${path}?id=${result.id}&type=${type}`;
        })

        resultsArt.append(star, img, title, releaseDate, movieDescription);
        cardsContainer.appendChild(resultsArt);
    }
}

// display cards for people result
export function displayPeopleResults(results){
    cardsContainer.innerHTML = '';

    for (const result of results){
        const resultsArt = document.createElement('article');
        resultsArt.classList.add('movie-card');

        const img = document.createElement('img');
        img.classList.add('movie-img');
        if (result.profile_path){
             img.src = `https://image.tmdb.org/t/p/w342${result.profile_path}`;
             img.alt = `${result.name} Picture`;
        }
        else {
            img.src = '../img/missing_poster.png';
            img.alt = `Picture is missing`;
        };

        const nameH3 = document.createElement('h3');
        nameH3.innerText = result.name;

        const knownDepartment = document.createElement('p');
        knownDepartment.innerText = 'Known for: ' + result.known_for_department;

        const knownForList = document.createElement('div');
        knownForList.classList.add('known-for-container');

    if (result.known_for) {
        result.known_for.slice(0, 3).forEach(item => {
            const itemP = document.createElement('p');
            
            const type = item.media_type === 'movie' ? 'Movie' : 'Series';
            const title = item.title || item.name;
            itemP.innerText = `${type}: ${title} `;
            knownForList.appendChild(itemP);
        });

        let path = '';
        const type = result.name ? 'person' : 'tv';
        
        if(window.location.pathname.includes('/html/')){
            path = './details.html';
        }
        else{
            path = './html/details.html';
        }
        resultsArt.addEventListener('click', () => {
            window.location.href = `${path}?id=${result.id}&type=${type}`;
        })

        resultsArt.append(img, nameH3, knownDepartment, knownForList);
        cardsContainer.appendChild(resultsArt);
    }
    }}

// display more details from movies & shows
export function displayDetails(details){
const backdropPath = `https://image.tmdb.org/t/p/w1280${details.backdrop_path}`;
    backdrop.style.backgroundImage = `url(${backdropPath})`;
    posterImg.src = `https://image.tmdb.org/t/p/w342${details.poster_path}`;
    description.innerText = details.overview;
    country.innerText = 'Country: ' + details.origin_country;
    language.innerText = 'Language: ' + details.original_language;
    rating.innerText = 'Rating: ' + Math.round(details.vote_average * 10)/10;

    if(details.title){
        titleH1.innerText = details.title;
        releaseDate.innerText = 'Released: ' + details.release_date;
    }
    else if(details.name){
        titleH1.innerText = details.name;
        releaseDate.innerText = 'Released: ' + details.first_air_date;
    }
    if (details.poster_path){
             posterImg.src = `https://image.tmdb.org/t/p/w342${details.poster_path}`;
             posterImg.alt = `${details.name} Picture`;
        }
        else {
            posterImg.src = '../img/missing_poster.png';
            posterImg.alt = `Picture is missing`;
        }
}

// display more details about people
export function displayPeopleDetails(details){
    backdrop.classList.add('hidden')
    titleH1.innerText = details.name;
    description.innerText = details.biography;
    country.innerText = 'Place of birth: ' + details.place_of_birth;
    language.innerText = 'Known for: ' + details.known_for_department;
    rating.innerText = 'Birthday: ' + details.birthday;
    if (details.profile_path){
             posterImg.src = `https://image.tmdb.org/t/p/w342${details.profile_path}`;
             posterImg.alt = `${details.name} Picture`;
        }
        else {
            posterImg.src = '../img/missing_poster.png';
            posterImg.alt = `Picture is missing`;
        }
}