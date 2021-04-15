import React from 'react';
import NavBar from '../components/NavBar';
import MusicCard from '../components/MusicCard';

function MyMusics() {
    return (
        <>
            <NavBar />
                <div className="container">
                    <div className="filter">
                        <button className="btn-green right">Adicionar</button>
                    </div>
                </div>
                <div className="container">
                    <div className="music-boxes">
                        <MusicCard musicName="Dear Marie" genre="Folk Music" releaseYear="2013"/>
                        <MusicCard musicName="Mel limão" genre="MPB" releaseYear="2019"/>
                        <MusicCard musicName="B.Y.O.B." genre="ROCK" releaseYear="2010"/>
                        <MusicCard musicName="Melhor eu ir" genre="Pagode" releaseYear="2018"/>
                    </div>

                </div>
        </>
    );
}

export default MyMusics;