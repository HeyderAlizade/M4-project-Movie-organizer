import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import './ListPage.css';

export default function ListPage (props) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [listName, setListName] = useState('');

    useEffect(()=>{
        const id = props.match.params.id
        setLoading(true);

        if (id) {
            axios.get(`https://6422ae86001cb9fc202ce8af.mockapi.io/movies/favorites/${id}`)
                .then(res => {
                    setMovies(res.data.movies);
                    setListName(res.data.name);
                })
                .catch(e => console.error(e))
                .finally(() => setLoading(false));
        }
    }, [])
 
    return (
        <div className="list-page">
            <h1 className="list-page__title">Мой список: {listName}</h1>
            <ul>
                {loading
                    ? <span>Loading...</span>
                    : movies.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <a href={`https://www.imdb.com/title/${item.imdbID}`} target="_blank">{item.Title} ({item.Year})</a>
                            </li>
                        );
                })}
            </ul>
        </div>
    );

}
 
