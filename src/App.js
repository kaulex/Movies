import "./App.css";
import Header from "./components/header/Header";
import MovieDetails from "./components/movie-details/MovieDetails";
import MovieList from "./components/movie-list/MovieList";

function App() {
  return (
    <div className="App d-flex flex-column">
      <Header />
      <div className="d-flex flex-row flex-fill pt-4 p-2">
        <MovieList />
        <MovieDetails />
      </div>
    </div>
  );
}

export default App;
