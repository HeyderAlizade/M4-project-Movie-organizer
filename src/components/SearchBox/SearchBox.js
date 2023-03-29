import axios from 'axios';
import React, { Component, useState } from 'react';
import './SearchBox.css';
import { save, setCheckSearch, setSearchLoading } from '../../redux/slices/movieSlice';
import { useSelector, useDispatch } from 'react-redux';


export default function SearchBox () {
    const movies = useSelector(state => state.movieSlice.value);
    const checkSearch = useSelector(state => state.movieSlice.checkSearch);
    const searchLoading = useSelector(state => state.movieSlice.searchLoading);

    const dispatch = useDispatch();


    const [searchLine, setSearchLine] = useState('')
    const searchLineChangeHandler = (e) => {
        setSearchLine(e.target.value)
    }
    
    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(setSearchLoading(true))

        try{
            axios.get(`http://www.omdbapi.com/?s=${searchLine}&apikey=8b77ab3b`).then(resp => {
                if(resp.data.Search != undefined){
                    dispatch(setCheckSearch(true))
                    dispatch(save(resp.data.Search))
                } else {
                    dispatch(setCheckSearch(false))
                }
                    dispatch(setSearchLoading(false))
            })
        }
        catch{
            alert('Some error')
        }
    }

    return (
        <div className="search-box">
            <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                <label className="search-box__form-label">
                    Искать фильм по названию:
                    <input
                        value={searchLine}
                        type="text"
                        className="search-box__form-input"
                        placeholder="Например, Interstellar"
                        onChange={searchLineChangeHandler}
                    />
                </label>
                <button
                    type="submit"
                    className="search-box__form-submit"
                    disabled={!searchLine}
                >
                    Искать
                </button>
            </form>
        </div>
    );
    
}
 