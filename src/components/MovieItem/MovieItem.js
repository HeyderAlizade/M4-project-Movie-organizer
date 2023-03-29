import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteState } from '../../redux/slices/movieSlice';

import './MovieItem.css';

export default function MovieItem(props) {
    const { Title: title, Year: year, Poster: poster, imdbID } = props;

    let dispatch = useDispatch();
    let favorite = useSelector(state => state.movieSlice.favorite);
    const isFavorite = favorite.find(item => item.imdbID === imdbID);

    const onFavorit = (event) => {
        if(favorite.filter(item => item.imdbID.includes(imdbID) ).length === 0){
        dispatch(addFavoriteState(props))}        
    }

    return (
        <article className="movie-item">
            <img className="movie-item__poster" src={poster} alt={title} />
            <div className="movie-item__info">
                <h3 className="movie-item__title">{title}&nbsp;({year})</h3>
                <button
                    type="button"
                    className="movie-item__add-button"
                    disabled={isFavorite}
                    style={{ backgroundColor: isFavorite ? '#349558' : '#496DDB' }}
                    onClick={onFavorit} >
                    {isFavorite ? 'Добавлено' : 'Добавить в список'}
                </button>
            </div>
        </article>
    );

}
