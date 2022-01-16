const API_KEY = "2c4e627dfa7f8e9e95eaeda275c7925a";

const requests = {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchAction: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchThriller: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=53`,
  fetchScienceFiction: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchDrama: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=18`,
  fetchAdventure: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=12`,
};

export default requests;
