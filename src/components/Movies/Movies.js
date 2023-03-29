import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';
import { useSelector, useDispatch } from 'react-redux';
import { save } from '../../redux/slices/movieSlice';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Movies (){

    const [infoText, setInfoText] = useState('Введите название фильма в поиске')

    const movies = useSelector(state => state.movieSlice.value);
    const checkSearch = useSelector(state => state.movieSlice.checkSearch);
    const searchLoading = useSelector(state => state.movieSlice.searchLoading);

    
    const dispatch = useDispatch();

    useEffect(()=> {
        if(checkSearch === false){
            setInfoText('Нет данных по запросу')
        } else if(checkSearch === true) {
            setInfoText('')
        }
    }, [checkSearch])
  

    return ( 
        <>
        {searchLoading? <h2>Loading...</h2>:<h2>{infoText}</h2>}

        {checkSearch &&
        <ul className="movies">
            {movies.map((movie) => (
                <li className="movies__item" key={movie.imdbID}>
                    <MovieItem {...movie} />
                </li>
        
            ))}
        </ul>}
        
        </>
    );

}
