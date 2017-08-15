import React, {Component} from 'react';
// import Isotope from 'isotope-layout';
// import Masonry from 'react-masonry-infinite';
import Masonry from "masonry-layout";
import shortid from 'shortid';
import {Media, Player, controls} from 'react-media-player';
import './App.css';

let tracks = [
    {
        key: shortid.generate(),
        title: "Lorem 1",
        trackTime: "1.08.2017",
        image: 'url(' + require('./images/beach_houses.jpg') + ')',
        trackUrl: 'http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3',
        tempo: 'slow',
        intensity: 'soft',
        feel: 'intimate',
        instrumental: 'accustic',
        height: 600
    },
    {
        key: shortid.generate(),
        title: "Lorem 2",
        trackTime: "2.08.2017",
        image: 'url(' + require('./images/beach_ocean.jpg') + ')',
        trackUrl: 'http://jplayer.org/audio/m4a/Miaow-07-Bubble.m4a',
        tempo: 'fast',
        intensity: 'hard',
        feel: 'epic',
        instrumental: 'electronic',
        height: 300
    },
    {
        key: shortid.generate(),
        title: "Lorem 3",
        trackTime: "3.08.2017",
        image: 'url(' + require('./images/beach_sea.jpg') + ')',
        trackUrl: 'http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3',
        tempo: 'slow',
        intensity: 'soft',
        feel: 'intimate',
        instrumental: 'accustic',
        height: 600
    },
    {
        key: shortid.generate(),
        title: "Lorem 4",
        trackTime: "4.08.2017",
        image: 'url(' + require('./images/beach_water.jpg') + ')',
        trackUrl: 'http://jplayer.org/audio/m4a/Miaow-07-Bubble.m4a',
        tempo: 'fast',
        intensity: 'hard',
        feel: 'epic',
        instrumental: 'electronic',
        height: 300
    },
    {
        key: shortid.generate(),
        title: "Lorem 5",
        trackTime: "5.08.2017",
        image: 'url(' + require('./images/blurry_beach.jpg') + ')',
        trackUrl: 'http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3',
        tempo: 'slow',
        intensity: 'soft',
        feel: 'intimate',
        instrumental: 'accustic',
        height: 600
    },
    {
        key: shortid.generate(),
        title: "Lorem 6",
        trackTime: "6.08.2017",
        image: 'url(' + require('./images/city_smoke.jpg') + ')',
        trackUrl: 'http://jplayer.org/audio/m4a/Miaow-07-Bubble.m4a',
        tempo: 'fast',
        intensity: 'hard',
        feel: 'epic',
        instrumental: 'electronic',
        height: 300
    },
    {
        key: shortid.generate(),
        title: "Lorem 7",
        trackTime: "7.08.2017",
        image: 'url(' + require('./images/concert_people.jpg') + ')',
        trackUrl: 'http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3',
        tempo: 'slow',
        intensity: 'soft',
        feel: 'intimate',
        instrumental: 'accustic',
        height: 600
    },
    {
        key: shortid.generate(),
        title: "Lorem 8",
        trackTime: "8.08.2017",
        image: 'url(' + require('./images/cool_guy.jpg') + ')',
        trackUrl: 'http://jplayer.org/audio/m4a/Miaow-07-Bubble.m4a',
        tempo: 'fast',
        intensity: 'hard',
        feel: 'epic',
        instrumental: 'electronic',
        height: 300
    }
];

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasMore: false,
            elementSelector: '.grid',
            elements: tracks,
            sizes: [
                {columns: 3, gutter: 0},
                {mq: '768px', columns: 3, gutter: 0},
                {mq: '1024px', columns: 3, gutter: 0}
            ]
        };

    }

    componentDidMount() {
        this.initMasonry();
    }

    initMasonry() {
        this.elem = document.querySelector('.masonry-grid');
        this.msnry = new Masonry(this.elem, {
            // options
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            horizontalOrder: true,
            percentPosition: true,
            fitWidth: true
        });
    }

    filterTitle() {
        console.log(this.state.elements);
        // this.state.elements.splice(1,1);
        // this.state.elements.sort((a, b) => a.title.localeCompare(b.title));
        let sort = this.state.elements.sort(function (a, b) {
            return (a.tempo > b.tempo) ? 1 : ((b.tempo > a.tempo) ? -1 : 0);
        });
        this.state.elements = sort;
        this.forceUpdate();
        setTimeout(() => {
          this.msnry.reloadItems();
          this.msnry.layout();
        }, 200);
    }

    render() {
        const {PlayPause, CurrentTime, SeekBar, Duration} = controls;

        return (
            <div className="App">
                <div className="container">
                    <div className="sortPan">
                        <div id="sorts" className="button-group sort-by-button-group">
                            <button className="button byTitle" data-sort-by="title" value="title"
                                    onClick={this.filterTitle.bind(this)}>title
                            </button>
                            <button className="button byTempo" data-sort-by="tempo" value="tempo"
                                    onClick={this.filterTitle.bind(this)}>slow</button>
                            <button className="button byIntensity" data-sort-by="intensity" value="intensity">soft
                            </button>
                            <button className="button byFeel" data-sort-by="feel" value="feel">intimate</button>
                            <button className="button byInstrumental" data-sort-by="instrumental" value="instrumental">
                                accustic
                            </button>
                        </div>
                    </div>
                    <div className="masonry-grid">
                        <div className="grid-sizer" />
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
                                     className="card grid-item"
                                     style={{
                                         backgroundImage: image,
                                         height
                                     }}>
                                    <span type="hidden" className="tempo">{tempo}</span>
                                    <span type="hidden" className="intensity">{intensity}</span>
                                    <span type="hidden" className="feel">{feel}</span>
                                    <span type="hidden" className="instrumental">{instrumental}</span>
                                    <h4 className="title">{title}</h4>
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
                    </div>
                </div>
            </div>
        );
    }
}

export default Grid;
