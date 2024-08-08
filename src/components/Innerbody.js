import React from 'react';
import './ArtistCard.css'; 
import ArtistCard from './ArtistCard';
import EventDetails from './EventDetails';
import Keys from './Keys';
import ArtistImage from './ArtistImage';
import BookArtist from './BookArtist';
import './InnerBody.css';

import uncleWafflesImage from '../assets/photos/Uncle Waffles.jpg';
import uncleWafflesImageL from '../assets/photos/Uncle Waffles1.jpg';
import anotherArtistImage from '../assets/photos/sjava.png';
import anotherArtistImageL from '../assets/photos/sjava1.jpg';
import uncleWafflesVideo from '../assets/video/waffels video.mp4';
import anotherArtistVideo from '../assets/video/sjava video.mp4';



const InnerBody = ({ isScrolled, menuOpen }) => {
    const artists = [
        {
            image: uncleWafflesImage,
            image1:  uncleWafflesImageL,
            name: 'Uncle Waffles',
            title: 'musician',
            video: uncleWafflesVideo,
            event: {
                host: 'Uncle Waffles',
                date: 'Saturday, August 10, 2024',
                time: '10:00 AM - 4:00 PM',
                location: 'Waffle Wonderland, 123 Maple Avenue, Sunnyvale',
                description: '🥳Dive into a world of crispy, golden waffles with Uncle Waffles! Whether you crave classic Belgian-style waffles or adventurous flavor combinations, our event promises.',
              },
        },
        {
            image: anotherArtistImage,
            image1: anotherArtistImageL,
            name: 'Sjava',
            title: 'musician',
            video: anotherArtistVideo,
            event: {
                host: 'Sjava',
                date: 'Saturday, September 26, 2024',
                time: '20:00 AM - 00:00 PM',
                location: 'ZTM Arena, 23 Matiza Avenue, Zimbabwe',
                description1: '🥳 Experience the Magic of Sjava Live! ✨ Join us for an unforgettable evening as Sjava takes the stage with his powerful blend of Afro-soul and hip-hop. ',
                description2: '✨ Discover the Rhythms of Sjava! 🎸 This event is a celebration of Sjava’s diverse musical talent, ',
                description3: ' 🥁  Journey with Sjava through Music! 🎶 As we celebrate Sjava’s musical journey, get ready to be swept away by his captivating voice and artistic charisma.  ',
              },
        }
    ];
    return (
        <div className={`content-area ${menuOpen ? 'menu-is-open' : ''}`}>
            <main>
                <div className="heading">Artists Booked</div>
                <div className='main-page'>
                    {artists.map((artist, index) => (
                        <div key={index} className='panel1'>
                            <div className="main-container">
                                
                                <div className="top-section">
                              
                                    <ArtistCard 
                                        image={artist.image}
                                        name={artist.name}
                                        title={artist.title}
                                       
                                    />
                                    <Keys />
                                    <BookArtist />
                                </div>
                                <div className="main-section">
                                    <EventDetails event={artist.event}/>
                                     <ArtistImage 
                                         image={artist.image1}
                                         video={artist.video}
                                     /> 
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default InnerBody;
