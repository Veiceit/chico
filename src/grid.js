import React, { Component } from 'react';
// import Isotope from 'isotope-layout';
// import Masonry from 'react-masonry-infinite';
import Masonry from "react-responsive-masonry"
import shortid from 'shortid';
import {Media, Player, controls} from 'react-media-player';
import './App.css';

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasMore: false,
            elementSelector: '.grid',
            elements: [
                {
                    key: shortid.generate(),
                    "title": "Lorem 1",
                    "trackTime": "1.08.2017",
                    'image': 'url(' + require('./images/beach_houses.jpg') + ')',
                    'trackUrl': 'http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3',
                    'tempo': 'slow',
                    'intensity': 'soft',
                    'feel': 'intimate',
                    'instrumental': 'accustic',
                    'height': 600
                },
                {
                    key: shortid.generate(),
                    "title": "Lorem 2",
                    "trackTime": "2.08.2017",
                    'image': 'url(' + require('./images/beach_ocean.jpg') + ')',
                    'trackUrl': 'http://jplayer.org/audio/m4a/Miaow-07-Bubble.m4a',
                    'tempo': 'fast',
                    'intensity': 'hard',
                    'feel': 'epic',
                    'instrumental': 'electronic',
                    'height': 300
                },
                {
                    key: shortid.generate(),
                    "title": "Lorem 3",
                    "trackTime": "3.08.2017",
                    'image': 'url(' + require('./images/beach_sea.jpg') + ')',
                    'trackUrl': 'http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3',
                    'tempo': 'slow',
                    'intensity': 'soft',
                    'feel': 'intimate',
                    'instrumental': 'accustic',
                    'height': 600
                },
                {
                    key: shortid.generate(),
                    "title": "Lorem 4",
                    "trackTime": "4.08.2017",
                    'image': 'url(' + require('./images/beach_water.jpg') + ')',
                    'trackUrl': 'http://jplayer.org/audio/m4a/Miaow-07-Bubble.m4a',
                    'tempo': 'fast',
                    'intensity': 'hard',
                    'feel': 'epic',
                    'instrumental': 'electronic',
                    'height': 300
                },
                {
                    key: shortid.generate(),
                    "title": "Lorem 5",
                    "trackTime": "5.08.2017",
                    'image': 'url(' + require('./images/blurry_beach.jpg') + ')',
                    'trackUrl': 'http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3',
                    'tempo': 'slow',
                    'intensity': 'soft',
                    'feel': 'intimate',
                    'instrumental': 'accustic',
                    'height': 600
                },
                {
                    key: shortid.generate(),
                    "title": "Lorem 6",
                    "trackTime": "6.08.2017",
                    'image': 'url(' + require('./images/city_smoke.jpg') + ')',
                    'trackUrl': 'http://jplayer.org/audio/m4a/Miaow-07-Bubble.m4a',
                    'tempo': 'fast',
                    'intensity': 'hard',
                    'feel': 'epic',
                    'instrumental': 'electronic',
                    'height': 300
                },
                {
                    key: shortid.generate(),
                    "title": "Lorem 7",
                    "trackTime": "7.08.2017",
                    'image': 'url(' + require('./images/concert_people.jpg') + ')',
                    'trackUrl': 'http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3',
                    'tempo': 'slow',
                    'intensity': 'soft',
                    'feel': 'intimate',
                    'instrumental': 'accustic',
                    'height': 600
                },
                {
                    key: shortid.generate(),
                    "title": "Lorem 8",
                    "trackTime": "8.08.2017",
                    'image': 'url(' + require('./images/cool_guy.jpg') + ')',
                    'trackUrl': 'http://jplayer.org/audio/m4a/Miaow-07-Bubble.m4a',
                    'tempo': 'fast',
                    'intensity': 'hard',
                    'feel': 'epic',
                    'instrumental': 'electronic',
                    'height': 300
                }
            ],
            sizes: [
                {columns: 3, gutter: 0},
                {mq: '768px', columns: 3, gutter: 0},
                {mq: '1024px', columns: 3, gutter: 0}
            ]
        };
    }

    // generateElements = () => [...Array(5).keys()].map(() => ({
    //     key: this.state.elements.key,
    //     title: this.state.elements.title,
    //     trackTime: this.state.elements.trackTime,
    //     trackUrl: this.state.elements.trackUrl,
    //     image: this.state.elements.image,
    //     height: `${this.state.elements.height}px`
    // }));
    //
    // // // Load more
    // loadMore = () => setTimeout(() => this.setState(state => ({
    //     elements: state.elements.concat(this.generateElements())
    // })), 1500);

    componentDidMount () {
        this.invokeIsotope()
    }

    invokeIsotope () {
        let Isotope = require('isotope-layout');
        let matches = require('matches-selector');

        let elem = document.querySelector('.grid');
        let iso = new Isotope( elem, {
            itemSelector: '.card',
            layoutMode: 'fitRows',
            getSortData: {
                title: '.title',
                tempo: '.tempo',
                intensity: '.intensity',
                feel: '.feel',
                instrumental: '.instrumental'
            }
        });

        var sortByGroup = document.querySelector('.sort-by-button-group');

        sortByGroup.addEventListener( 'click', function( event ) {
            if ( !matches( event.target, '.button' ) ) {
                return;
            }
            var sortValue = event.target.getAttribute('data-sort-value');
            iso.arrange({ sortBy: sortValue });
        });

        let buttonGroups = document.querySelectorAll('.button-group');

        for ( var i=0; i < buttonGroups.length; i++ ) {
            buttonGroups[i].addEventListener( 'click', onButtonGroupClick );
        }

        function onButtonGroupClick( event ) {
            if ( !matches( event.target, '.button' ) ) {
                return;
            }
            let button = event.target;
            button.parentNode.querySelector('.is-checked').classList.remove('is-checked');
            button.classList.add('is-checked');
        }
        console.log(elem);
    }

    render() {
        const {PlayPause, CurrentTime, SeekBar, Duration} = controls;

        return (
            <div className="App">
                <div className="container">
                    <div className="sortPan">
                        <div id="sorts" className="button-group sort-by-button-group">
                            <button className="button byTitle" data-sort-by="title" value="title">title</button>
                            <button className="button byTempo" data-sort-by="tempo" value="tempo">slow</button>
                            <button className="button byIntensity" data-sort-by="intensity" value="intensity">soft</button>
                            <button className="button byFeel" data-sort-by="feel" value="feel">intimate</button>
                            <button className="button byInstrumental" data-sort-by="instrumental" value="instrumental">accustic</button>
                        </div>
                    </div>
                    <Masonry
                        columnsCount={3}
                        className="masonry grid"
                        hasMore={this.state.hasMore}
                        sizes={this.state.sizes}
                        percentPosition={true}
                        loader={
                            <div className="sk-folding-cube">
                                <div className="sk-cube1 sv cube"/>
                                <div className="sk-cube2 sk-cube"/>
                                <div className="sk-cube4 sk-cube"/>
                                <div className="sk-cube3 sk-cube"/>
                            </div>
                        }
                        loadMore={this.loadMore}
                    >
                        {
                            this.state.elements.map(({
                                                         key,
                                                         title,
                                                         trackTime,
                                                         image,
                                                         height,
                                                         trackUrl,
                                                         tempo,
                                                         intensity,
                                                         feel,
                                                         instrumental
                                                     }) => (
                                <div key={key}
                                     className="card element-item"
                                     style={{
                                         backgroundImage: image,
                                         height
                                     }}>
                                    <span type="hidden" className="tempo">{tempo}</span>
                                    <span type="hidden" className="intensity">{intensity}</span>
                                    <span type="hidden" className="feel">{feel}</span>
                                    <span type="hidden" className="instrumental">{instrumental}</span>
                                    <h4>{title}</h4>
                                    <span className="trackTime">{trackTime}</span>
                                    <div className="playerWrapp">
                                        <Media>
                                            <div className="media">
                                                <div className="media-player">
                                                    <Player src={trackUrl}/>
                                                </div>
                                                <div className="media-controls">
                                                    <div className="controlBtn">
                                                        <PlayPause className="media-control--play-pause"/>
                                                        <CurrentTime/>
                                                        <SeekBar/>
                                                        <Duration/>
                                                    </div>
                                                    <div className="serviceBtn">
                                                        <a href={trackUrl} download={trackUrl}><i
                                                            className="fa fa-download"/> Download</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Media>
                                    </div>
                                </div>
                            ))
                        }
                    </Masonry>
                </div>
            </div>
        );
    }
}

export default Grid;