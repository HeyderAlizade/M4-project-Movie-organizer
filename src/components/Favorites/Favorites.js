import React, { Component } from 'react';
import './Favorites.css';


export default function Favorites() {
    const [movies, setMovies] = React.useState([{ imdbID: 'tt0068646', title: 'The Godfather', year: 1972 }])
    return (
        <div className="favorites">
            <input defaultValue="Новый список" className="favorites__name" />
            <ul className="favorites__list">
                {movies.map((item) => {
                    return <li key={item.imdbID}>{item.title} ({item.year})</li>;
                })}
            </ul>
            <button type="button" className="favorites__save">Сохранить список</button>
        </div>
    );

}
 
