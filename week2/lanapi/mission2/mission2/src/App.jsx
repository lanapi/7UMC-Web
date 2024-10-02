// App.jsx
import React from "react";
import { MOVIES } from "./mocks/movies";
import styled, { createGlobalStyle } from "styled-components";

import MovieCardComponent from "./components/MoviePoster";

const Div = styled.div`
  background-color: rgb(1, 1, 95);
  margin: 0;
  padding: 100px;
`;

const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: auto; 
`;

const App = () => {
  return (
    <Div>
      <MovieList>
        {MOVIES.results.map((movie) => (
          <MovieCardComponent movie={movie} key={movie.id} />
        ))}
      </MovieList>
    </Div>
  );
};

export default App;
