
import Header from './Header';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SearchArtistResults.css';
import sjava from '../assets/photos/sjava.png'
import Elaine from '../assets/photos/Elain.jpg'
import Focalistic from '../assets/photos/Focalistic.jpg'
import Shekinah from '../assets/photos/Shekinah.jpg'
import Maphorisa from '../assets/photos/Dj Maphorisa.jpg'
import Cassper from '../assets/photos/Cassper Nyovest.png'
import MusaKeys from '../assets/photos/Musa Keys.jpg'
import DjTira from '../assets/photos/Dj Tira.png'

const SearchArtistResults = ({ setIsMenuOpen }) => {

    const artists = [
        { name: "Sjava", role: "Artist", imageUrl: sjava },
        { name: "Elaine", role: "Singer", imageUrl: Elaine },
        { name: "Focalistic", role: "Rapper & singer", imageUrl: Focalistic },
        { name: "Shekinah", role: "Singer & Song Writer", imageUrl: Shekinah },
        { name: "Dj Maphorisa", role: "Producer & Dj", imageUrl: Maphorisa },
        { name: "Cassper Nyovest", role: "Rapper & Song Writer", imageUrl: Cassper },
        { name: "Musa Keys", role: "Record Producer", imageUrl: MusaKeys },
        { name: "Dj Tira", role: "Record Producer", imageUrl: DjTira },
    ]
    const [query, setQuery] = useState('');
    const [filteredArtists, setFilteredArtists] = useState(artists);
    const handleSearch = () => {
        const results = artists.filter(artist =>
            artist.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredArtists(results);
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };
    const gridItems = [...filteredArtists, ...Array(25 - filteredArtists.length).fill(null)];
    return (
        <div className='search-artist-results-container'>
            <div className='event-org-title-container'> 
                <div><h2 className="search-artist-title"> |  Search Artist</h2></div>
            </div>
            <div className = 'search-artist-body'>
                <div className="search-artist-search-bar">
                    <input type="text" value = {query} onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyDown} placeholder="Search the artist of your choice" />
                </div>

                <div className='search-artist-suggested-artists-container'>
                     <h2 className="search-artist-suggested-title">Suggested Artists</h2>
                </div>

                <div className="search-artist-suggested-artists">
                  {filteredArtists.length > 0 ? (
                        filteredArtists.map((artist, index) => (
                             <div key={index} className="artist-card">
                                 <img src={artist.imageUrl} alt={artist.name} />
                                <div>
                                    <h3>{artist.name}</h3>
                                    <p>{artist.role}</p>
                                </div>
                            </div>
                         ))
                    ) : (
                        <p className='empty-slot'>Artist not found!</p>
                    )}
                </div>

                <div className="search-artist-searchButton-div">
                    <button className="search-button" onClick={handleSearch} >SEARCH</button>
                </div>
            </div>
        </div>
    );
}
export default SearchArtistResults;