// Helper functions

// Constants
const tmdbHost = 'https://api.themoviedb.org/3';
const tmdbImgHost = 'https://image.tmdb.org/t/p/w500';
const apiKey = 'api_key=0df33ec6cc42f2bb6fa4a59382f3f894';

// Sends GET request to TMDB
const sendTmdbRequest = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(JSON.parse(xhr.responseText));
    }
  };
  xhr.send();
};

// Gets list of shows in specified list order (first 5 pages)
const getShowlist = (showType, listType, callback) => {
  const url = `${tmdbHost}/${showType}/${listType}?${apiKey}&language=en-US&page=1`;
  sendTmdbRequest(url, callback);
};

// Search for a show
const getSearchResults = (showType, query, callback) => {
  const url = `${tmdbHost}/search/${showType}?${apiKey}&query=${query}`;
  sendTmdbRequest(url, callback);
};

// Gets details about a show
const getDetails = (showType, showID, callback) => {
  const url = `${tmdbHost}/${showType}/${showID}?${apiKey}`;
  sendTmdbRequest(url, callback);
};

// Gets recommendations from a show
const getRecommendations = (showType, showID, callback) => {
  const url = `${tmdbHost}/${showType}/${showID}/recommendations?${apiKey}`;
  sendTmdbRequest(url, callback);
};

// Gets credits about a show
const getCredits = (showType, showID, callback) => {
  const url = `${tmdbHost}/${showType}/${showID}/credits?${apiKey}`;
  sendTmdbRequest(url, callback);
};

// Object to be exported
const TMDB = {
  tmdbHost,
  apiKey,
  tmdbImgHost,
  sendTmdbRequest,
  getShowlist,
  getSearchResults,
  getDetails,
  getRecommendations,
  getCredits,
};

export default TMDB;
