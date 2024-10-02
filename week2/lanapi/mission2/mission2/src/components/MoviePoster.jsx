// components/MovieCard.jsx
import React from "react";
import styled from "styled-components";

// Styled components
const MovieCard = styled.div`
  background-color: darkslateblue;
  box-sizing: border-box;
  width: 200px;
  height: 380px;
  border-radius: 4px;
  position: relative; 
  overflow: hidden;
`;

const MoviePoster = styled.img`
  width: 100%; 
  height: auto;
`;

const MovieData = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

const Text = styled.p`
  font-size: 12px;
  color: white;
`;

const MovieCardHover = styled(MovieCard)`
  &:hover ${MovieDescription} {
    opacity: 1;
    visibility: visible;
  }
`;

const MovieCardComponent = ({ movie }) => {
  return (
    <MovieCardHover key={movie.id}>
      <MovieDescription>{movie.overview}</MovieDescription>
      <MoviePoster
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <MovieData>
        <Text>{movie.title}</Text>
        <Text>{movie.vote_average}</Text>
      </MovieData>
    </MovieCardHover>
  );
};

export default MovieCardComponent
