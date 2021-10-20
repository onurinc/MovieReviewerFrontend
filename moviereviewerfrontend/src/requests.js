const API_KEY = "2c4e627dfa7f8e9e95eaeda275c7925a";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchThriller: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  fetchScienceFiction: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchDrama: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  fetchAdventure: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
};

export default requests;
