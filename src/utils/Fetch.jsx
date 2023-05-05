import axios from "axios";

export const searchMovies = () => {
  return axios
    .get(
      "https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher"
    )
    .then((res) => res.data.results)
    .catch((err) => console.log("error =>", err));
};
