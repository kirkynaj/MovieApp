import { Routes, Route } from "react-router-dom";
import Navigation from "./pages/Navigation";
import Home from "./pages/Home";
import TrendingArchive from "./pages/TrendingArchive";
import TopRatedArchive from "./pages/TopRatedArchive";
import PopularArchive from "./pages/PopularArchive";
import Upcoming from "./pages/UpcomingArchive";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";

const App = () => {
  
  return (
   <Routes>
    <Route path="/" element={<Navigation/>}>
      <Route index element={<Home/>} />
      <Route path="trending" element={<TrendingArchive />} />
      <Route path="top-rated" element={<TopRatedArchive />} />
      <Route path="most-popular" element={<PopularArchive />} />
      <Route path="upcoming" element={<Upcoming />} />
      <Route path="movies" element={<Movies />} />
      <Route path="/movie/:id" element={<Movie/>} />
    </Route>
   </Routes>
  );
}

export default App;
