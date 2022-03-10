import React from 'react'

function TopBar(props) {

  console.log( props.searchKeyWord.title )
  return (
    <div className='topbar-container'>
            <input 
            className='search-input' 
            type='text' 
            name='title' 
            placeholder='Enter movie title' 
            value={props.searchKeyWord.title }
            onChange={ (e) => props.setsearchKeyWord( e.target.value ) } 
            /> 
            <button className='search-btn' onClick={ () => props.searchMovies(props.searchKeyWord)}> Search </button>
    </div>
  )
}

export default TopBar