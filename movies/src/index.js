import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import UpcomingPage from "./pages/upcomingPage"
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'

const App = () => {
  return (
    <BrowserRouter>
      <SiteHeader />
      <Routes>
        <Route exact path="/movies/favorites" element={<FavoriteMoviesPage />} />
        <Route exact path="/movies/upcoming" element={<UpcomingPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={ <Navigate to="/" /> } />
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));