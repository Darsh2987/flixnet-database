// API KEY
const apiKey = "f5a07de26f8d5c4478107c654093e6e1";

// Base URL of API requests
const baseURL = "https://api.themoviedb.org/3";

// Object containing all API URL endpoints
const apiRequests = {
  flixnetOriginals: `${baseURL}/discover/tv?api_key=${apiKey}&with_networks=213`,
  trending: `${baseURL}/trending/all/week?api_key=${apiKey}&language=en-US`,
  popularMovies: `${baseURL}/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
  upcomingMovies: `${baseURL}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
  popularTV: `${baseURL}/tv/popular?api_key=${apiKey}&language=en-US&page=1`,
  actionMovies: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=28`,
  comedyMovies: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=35`,
  horrorMovies: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=27`,
  romanceMovies: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=10749`,
  documentaries: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=99`,
};

export default apiRequests;
