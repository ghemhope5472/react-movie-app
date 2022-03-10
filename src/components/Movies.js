import React from 'react'

function Movies(props) {

    

  return (
    <div className='movie-container'>
        <p> {props.movies.Year }</p>
        <h4> {props.movies.Title }  <br /> <span className={props.movies.Type === "movie" ? "movie" : "series"}> { props.movies.Type } </span> </h4>

        <img src={props.movies.Poster ? props.movies.Poster : 'https://via.placeholder.com/300'}  alt={props.movies.Title} />
        
    </div>
  )
}

export default Movies;