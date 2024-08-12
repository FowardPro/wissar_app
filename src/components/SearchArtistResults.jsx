
import Header from './Header';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './SearchArtistResults.css';
import sjava from '../assets/photos/sjava.png'

const SearchArtistResults = () => {

    return (
        <div className='search-artist-results-container'>
            <div><h2 className="search-artist-title"> |  Search Artist</h2></div>
            
            <div className = 'search-artist-body'>
                <div className="search-artist-search-bar">
                    <input type="text" placeholder="Search the artist of your choice" />
                </div>

                <div className='search-artist-suggested-artists-container'>
                     <h2 className="search-artist-suggested-title">Suggested Artists</h2>
                </div>

                <div className="search-artist-suggested-artists">
                     {Array.from({ length: 15 }).map((_, index) => (
                        <div key={index} className="artist-card">
                            <img src={sjava} alt="Artist" />
                            <div>
                                <h3>Sjava</h3>
                                <p>Artist</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="search-artist-searchButton-div">
                    <button className="search-button">SEARCH</button>
                 </div>
            </div>

        </div>
    );
}
export default SearchArtistResults;