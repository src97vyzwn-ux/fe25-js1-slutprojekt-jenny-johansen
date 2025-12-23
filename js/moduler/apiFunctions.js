// js file for all fetch requests to the api TMDB: https://developer.themoviedb.org/reference/getting-started

// Api-key for access to the endpoints
const API_KEY = "6500e58ec2fa8c0ef8b47dbbd7091490";

// fetching Top Rated from api TMDB: https://developer.themoviedb.org/reference/movie-top-rated-list
export async function getTopRatedMovies() {
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
        throw "Something went wrong on our end. Please try again later.";
    }
    const value = await response.json();
    return value.results;
  }
  catch (error) {
    throw error;
  }
}

// fetch Popular Movies from api TMDB: https://developer.themoviedb.org/reference/movie-popular-list
export async function getPopularMovies() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
        throw "Something went wrong on our end. Please try again later.";
    }
    const value = await response.json();
    return value.results;
  }
  catch (error) {
    throw error;
  }
}

// fetch Trending Movies from api TMDB: https://developer.themoviedb.org/reference/movie-now-playing-list
export async function getTrendingMovies() {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
        throw "Something went wrong on our end. Please try again later.";
    }
    const value = await response.json();
    return value.results;
  } catch (error) {
    throw error;
  }
}

// fetch Popular TV Show from api TMDB: https://developer.themoviedb.org/reference/tv-series-popular-list
export async function getPopularShows() {
  const url = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
        throw "Something went wrong on our end. Please try again later.";
    }
    const value = await response.json();
    return value;
  } catch (error) {
    throw error;
  }
}

// fetch info abt movie/show/person from search input using multi search from api TMDB: https://developer.themoviedb.org/reference/search-multi
export async function getSearchResults(search) {
  const url = `https://api.themoviedb.org/3/search/multi?query=${search}&api_key=${API_KEY}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
        throw "Something went wrong on our end. Please try again later.";
    }
    const value = await response.json();
    if(value.results.length === 0) {
      throw (`We couldn't find anything matching "${search}". Maybe check your spelling!`);
    }
    return value.results;
  } catch (error) {
    throw error;
  }
}

// fetch more details about selected movies from api TMDB: https://developer.themoviedb.org/reference/movie-details
export async function getMoreMovieDetails(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
        throw "Something went wrong on our end. Please try again later.";
    }
    const value = await response.json();
    return value;
  } catch (error) {
    throw error;
  }
}

// fetch more details about selected shows from api TMDB: https://developer.themoviedb.org/reference/tv-series-details
export async function getMoreShowDetails(showId) {
  const url = `https://api.themoviedb.org/3/tv/${showId}?api_key=${API_KEY}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
        throw "Something went wrong on our end. Please try again later.";
    }
    const value = await response.json();
    return value;
  }
  catch (error) {
    throw error;
  }
}

// fetch more details about selected people from api TMDB: https://developer.themoviedb.org/reference/person-details
export async function getMorePeopleDetails(personId) {
  const url = `https://api.themoviedb.org/3/person/${personId}?api_key=${API_KEY}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
        throw "Something went wrong on our end. Please try again later.";
    }
    const value = await response.json();
    return value;
  }
  catch (error) {
    throw error;
  }
}