const API_KEY = "63011553c85cb664dc14f65c91322662";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language =en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language =en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:  `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchFantasy: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
    fetchFamilyTV: `/discover/tv?api_key=${API_KEY}&with_genres=10762`,
    fetchSciFiTV: `/discover/tv?api_key=${API_KEY}&with_genres=10765`, 
    fetchAnimationTV: `/discover/tv?api_key=${API_KEY}&with_genres=16`, 
    fetchActionTV: `/discover/tv?api_key=${API_KEY}&with_genres=10759`, 
    fetchComedyTV: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchRealityTV: `/discover/tv?api_key=${API_KEY}&with_genres=10764`,
    fetchDramaTV: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
    fetchMusicMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,





};

export default requests;

// https://api.themoviedb.org/3/genre/movie/list?api_key=63011553c85cb664dc14f65c91322662

// /discover/movies?api_key=63011553c85cb664dc14f65c91322662&with_genres=99