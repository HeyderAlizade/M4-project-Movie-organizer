import axios from 'axios';
import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Favorites.css';
import { deleteFavoriteState, clearFavoriteState,  } from '../../redux/slices/movieSlice';
import { useState } from 'react';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';



export default function Favorites(props) {
    const [savedListId, setSavedListId] = useState(null);

    const favorites = useSelector(state => state.movieSlice.favorite);
    const dispatch = useDispatch();

    const [favoriteSaveLine, setFavoriteSaveLine] = useState('');
    const [loading, setLoading] = useState(false);

    const favoriteLineChangeHandler = (e) => {
        setFavoriteSaveLine(e.target.value)
    }
    const deleteFavorite = (e) => {
        dispatch(deleteFavoriteState(e.target.id))
    }

    const buttonText = useMemo(() => {
        if (loading) return 'Идет сохранение...';

        return 'Сохранить список';
    }, [loading]);

    const saveFavorite = (e) => {
        if (savedListId) {

            return
        }
        setLoading(true)
        const data = {
            name: favoriteSaveLine, 
            movies: favorites,
        }

        axios.post('https://6422ae86001cb9fc202ce8af.mockapi.io/movies/favorites', data)
        .then((res)=> {
            dispatch(clearFavoriteState());
            setFavoriteSaveLine('');
            if (res.data.id) setSavedListId(res.data.id)
        }).finally(() => setLoading(false));
    }

    return (
        <div className="favorites">
            <input placeholder="Новый список" disabled={favorites.length==0} className="favorites__name" onChange={favoriteLineChangeHandler} />
            <ul className="favorites__list">
                {favorites.map((item) => {
                    return <li key={item.imdbID}>{item.Title} ({item.Year}) <button id={item.imdbID} onClick={deleteFavorite} className='favorit__delete'>❌</button> </li>;
                })}
            </ul>
            {savedListId
                ? <Link to={`/list/${savedListId}`}>Перейти к списку</Link>
                : (
                    <button
                        type="button"
                        disabled={!favoriteSaveLine || favorites.length==0}
                        onClick={saveFavorite}
                        className="favorites__save">
                        {buttonText}
                    </button>
                )}
        </div>
    );

}
 
