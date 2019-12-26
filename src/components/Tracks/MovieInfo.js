import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import Moment from "react-moment";

const MovieInfo = props => {
  const [movie, setMovie] = useState({});
  // const genres = this.state.movie.movie.genres;


  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          props.match.params.id
        }?api_key=${process.env.REACT_APP_MM_KEY}&language=en-US`
      )
      .then(res => {
        let movie = res.data;
        setMovie({ movie });
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }, [props.match.params.id]);

  if (
    movie === undefined || Object.keys(movie).length === 0 
  ) {
    return <Spinner />;
  } else {
    return (
      <>
        <Link to="/" className="btn btn-dark btn-sm mb-4">
          Go Back
        </Link>
        <div className="card mb-3">
        <img src={`https://image.tmdb.org/t/p/w500${movie.movie.poster_path}`} classNmae="card-img-top" alt="..." />
          <div className="card-body">
          <h5 className="card-title"> 
           {movie.movie.title}
          </h5>
            <p className="card-text"> 
            {movie.movie.overview}</p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item fas fa-star-half-alt">   Rate: {movie.movie.vote_average}</li>
              <li class="list-group-item">Release date: {movie.movie.release_date}</li>
              <li class="list-group-item ">Genres:{ 
                movie.movie.genres.map(item => item.name).join('-')
              //  (!movie.moive.genres[movie.moive.genres-1] ? movie.moive.genres.map(item => item.name +" ," ) ))
              } 
               </li>
              <li class="list-group-item">Budget: ${movie.movie.budget}</li>
            </ul>
          </div>
        </div>
          {console.log(movie)}

      </>
    );
  }
};

export default MovieInfo;
