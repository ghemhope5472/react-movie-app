import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';

// http://www.omdbapi.com/?i=tt3896198&apikey=5a025b54

function App() {

  const [ searchKeyWord, setsearchKeyWord ] = useState({
    title: ''
  })

  const [ movies, setMovies ] = useState([])

 
  
  const searchMovies = async (title) => {
    const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=5a025b54"
    const response = await fetch(`${API_URL}&s=${title}}`)
    const data = await response.json()
    setMovies(data.Search)
  
  }

  // http://www.omdbapi.com/?y=2021

  useEffect( async () =>  {
    const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=5a025b54"
    const response = await fetch(`${API_URL}&s=avengers`)
    const data = await response.json()
    setMovies(data.Search)
  } , [])


  function handleSearch(e){
       const { name, value } = e.target
      setsearchKeyWord( prevState => {
        return {
          ...prevState, [name] : value
        }
      }) 
  }
  
const moviesElements = movies.map( (movie,index) => {
  return <Movies 
            key={index}
            movies={movie}
  />
})


  return (
    <div className="App">
      {/* <Navbar /> */}
      <TopBar 
        handleSearch={handleSearch}
        searchKeyWord={searchKeyWord}
        setsearchKeyWord={setsearchKeyWord}
        searchMovies={searchMovies}
      />
      <div className="movies-container">
          {moviesElements}
        </div>

        <Footer />
    </div>
  );
}

export default App;
