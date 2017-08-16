import React, {Component} from 'react';
// import Isotope from 'isotope-layout';
// import Masonry from 'react-masonry-infinite';
import Masonry from "masonry-layout";
import shortid from 'shortid';
import {Media, Player, controls} from 'react-media-player';
import CustomPlayPause from './handleplaypause'
import './App.css';

// Tracks src
import a_good_day from './audio/a_good_day.wav';
import a_new_day from './audio/a_new_day.wav';
import a_new_perspective from './audio/a_new_perspective.wav';
import amazing from './audio/amazing.mp3';
import dive_into_the_night from './audio/dive_into_the_night.wav';
import everything_is_just_fine from './audio/everything_is_just_fine.wav';
import faces from './audio/faces.mp3';
import feel_my_energy from './audio/feel_my_energy.wav'
import flying_home from './audio/flying_home.wav'
import follow_your_lead from './audio/follow_your_lead.wav'

// Image src
import aGoodDay from './images/a_good_day.jpg';

let tracks = [
    {
        key: shortid.generate(),
        title: "A Good Day",
        trackTime: "1.08.2017",
        image: 'url(' + require('./images/a_good_day.jpg') + ')',
        trackUrl: a_good_day,
        tempo: '80',
        intensity: '24',
        feel: '60',
        instrumental: '15',
        height: 300
    },
    {
        key: shortid.generate(),
        title: "A New Day",
        trackTime: "2.08.2017",
        image: 'url(' + require('./images/a_new_day.jpg') + ')',
        trackUrl: a_new_day,
        tempo: '75',
        intensity: '40',
        feel: '30',
        instrumental: '14',
        height: 600
    },
    {
        key: shortid.generate(),
        title: "A New Perspective",
        trackTime: "3.08.2017",
        image: 'url(' + require('./images/a_new_perspective.jpg') + ')',
        trackUrl: a_new_perspective,
        tempo: '91',
        intensity: '74',
        feel: '40',
        instrumental: '25',
        height: 600
    },
    {
        key: shortid.generate(),
        title: "Amazing",
        trackTime: "4.08.2017",
        image: 'url(' + require('./images/amazing.jpg') + ')',
        trackUrl: amazing,
        tempo: '45',
        intensity: '35',
        feel: '15',
        instrumental: '3',
        height: 600
    },
    {
        key: shortid.generate(),
        title: "Dive Into The Night",
        trackTime: "5.08.2017",
        image: 'url(' + require('./images/dive_into_the_night.jpg') + ')',
        trackUrl: dive_into_the_night,
        tempo: '38',
        intensity: '52',
        feel: '22',
        instrumental: '10',
        height: 600
    },
    {
        key: shortid.generate(),
        title: "Everything Is Just Fine",
        trackTime: "6.08.2017",
        image: 'url(' + require('./images/everything_is_just_fine.jpg') + ')',
        trackUrl: everything_is_just_fine,
        tempo: '20',
        intensity: '21',
        feel: '61',
        instrumental: '3',
        height: 600
    },
    {
        key: shortid.generate(),
        title: "Faces",
        trackTime: "7.08.2017",
        image: 'url(' + require('./images/faces.jpg') + ')',
        trackUrl: faces,
        tempo: '56',
        intensity: '65',
        feel: '54',
        instrumental: '29',
        height: 300
    },
    {
        key: shortid.generate(),
        title: "Feel My Energy",
        trackTime: "8.08.2017",
        image: 'url(' + require('./images/feel_my_energy.jpg') + ')',
        trackUrl: feel_my_energy,
        tempo: '29',
        intensity: '92',
        feel: '25',
        instrumental: '8',
        height: 300
    },
    {
        key: shortid.generate(),
        title: "Flying Home",
        trackTime: "9.08.2017",
        image: 'url(' + require('./images/flying_home.jpg') + ')',
        trackUrl: flying_home,
        tempo: '11',
        intensity: '11',
        feel: '11',
        instrumental: '11',
        height: 600
    },
    {
        key: shortid.generate(),
        title: "Follow Your Lead",
        trackTime: "10.08.2017",
        image: 'url(' + require('./images/follow_your_lead.jpg') + ')',
        trackUrl: follow_your_lead,
        tempo: '32',
        intensity: '35',
        feel: '34',
        instrumental: '12',
        height: 300
    }
];

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: tracks
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
            transitionDuration: '0.8s'
        });
    }

    filterTitle(e) {
        // console.log(this.state.elements);
        let filter = e.currentTarget.getAttribute('data-sort-by');
        let sort = this.state.elements.sort(function (a, b) {
            if (filter === 'titleAsc') {
                return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0);
            }
            if (filter === 'titleDesc') {
                return (a.title < b.title) ? 1 : ((b.title < a.title) ? -1 : 0);
            }
            if (filter === 'tempoSlow') {
                return (a.tempo > b.tempo) ? 1 : ((b.tempo > a.tempo) ? -1 : 0);
            }
            if (filter === 'tempoFast') {
                return (a.tempo < b.tempo) ? 1 : ((b.tempo < a.tempo) ? -1 : 0);
            }
            if (filter === 'intensitySoft') {
                return (a.intensity > b.intensity) ? 1 : ((b.intensity > a.intensity) ? -1 : 0);
            }
            if (filter === 'intensityHard') {
                return (a.intensity < b.intensity) ? 1 : ((b.intensity < a.intensity) ? -1 : 0);
            }
            if (filter === 'feelIntimate') {
                return (a.feel > b.feel) ? 1 : ((b.feel > a.feel) ? -1 : 0);
            }
            if (filter === 'feelEpic') {
                return (a.feel < b.feel) ? 1 : ((b.feel < a.feel) ? -1 : 0);
            }
            if (filter === 'instrumentalAcc') {
                return (a.instrumental > b.instrumental) ? 1 : ((b.instrumental > a.instrumental) ? -1 : 0);
            }
            if (filter === 'instrumentalEle') {
                return (a.instrumental < b.instrumental) ? 1 : ((b.instrumental < a.instrumental) ? -1 : 0);
            }
        });
        this.state.elements = sort;
        this.forceUpdate();
        setTimeout(() => {
            this.msnry.reloadItems();
            this.msnry.layout();
        }, 200);
    }



    render() {
        const {CurrentTime, SeekBar, Duration} = controls;

        return (
            <div className="App">
                <div className="container">
                    <div className="sortPan">
                        <div id="sorts" className="button-group sort-by-button-group">

                            <div className="btnWrapp">
                                <span>Title</span>
                                <button className="button byTitle" data-sort-by="titleAsc" value="ascending"
                                        onClick={this.filterTitle.bind(this)}>Ascending
                                </button>
                                <button className="button byTitle" data-sort-by="titleDesc" value="descending"
                                        onClick={this.filterTitle.bind(this)}>Descending
                                </button>
                            </div>

                            <div className="btnWrapp">
                                <span>Tempo</span>
                                <button className="button byTempo" data-sort-by="tempoSlow" value="slow"
                                        onClick={this.filterTitle.bind(this)}>slow
                                </button>
                                <button className="button byTempo" data-sort-by="tempoFast" value="fast"
                                        onClick={this.filterTitle.bind(this)}>fast
                                </button>
                            </div>

                            <div className="btnWrapp">
                                <span>Intensity</span>
                                <button className="button byIntensity" data-sort-by="intensitySoft" value="soft"
                                        onClick={this.filterTitle.bind(this)}>soft
                                </button>
                                <button className="button byIntensity" data-sort-by="intensityHard" value="hard"
                                        onClick={this.filterTitle.bind(this)}>hard
                                </button>
                            </div>

                            <div className="btnWrapp">
                                <span>Feel</span>
                                <button className="button byFeel" data-sort-by="feelIntimate" value="intimate"
                                        onClick={this.filterTitle.bind(this)}>intimate
                                </button>
                                <button className="button byFeel" data-sort-by="feelEpic" value="epic"
                                        onClick={this.filterTitle.bind(this)}>epic
                                </button>
                            </div>

                            <div className="btnWrapp">
                                <span>Instrumental</span>
                                <button className="button byInstrumental" data-sort-by="instrumentalAcc"
                                        value="accustic"
                                        onClick={this.filterTitle.bind(this)}>accustic
                                </button>
                                <button className="button byInstrumental" data-sort-by="instrumentalEle"
                                        value="electronic"
                                        onClick={this.filterTitle.bind(this)}>electronic
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="masonry-grid">
                        <div className="grid-sizer"/>
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
                                    <div className="filterVal">
                                        <span className="tempo">{tempo}</span>
                                        <span className="intensity">{intensity}</span>
                                        <span className="feel">{feel}</span>
                                        <span className="instrumental">{instrumental}</span>
                                    </div>
                                    <h4 className="title">{title}</h4>
                                    <span className="trackTime">{trackTime}</span>
                                    <div className="playerWrapp">
                                        <Media id="mediaPlayer">
                                            <div className="media">
                                                <div className="media-player">
                                                    <Player src={trackUrl}/>
                                                </div>
                                                <div className="media-controls">
                                                    <div className="controlBtn">
                                                        <CustomPlayPause className="media-control--play-pause"/>
                                                        <CurrentTime/>
                                                        <SeekBar/>
                                                        <Duration/>
                                                    </div>
                                                    <div className="serviceBtn">
                                                        <a href={trackUrl} download={trackUrl}>
                                                            <i className="fa fa-star"/>
                                                            Save</a>
                                                        <a href={trackUrl} download={trackUrl}>
                                                            <i className="fa fa-share-alt"/>
                                                            Share</a>
                                                        <a href={trackUrl} download={trackUrl}>
                                                            <i className="fa fa-download"/>
                                                            Download</a>
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

                <div className="footerPlayer">
                    <Media>
                        <div className="media">
                            <div className="media-player">
                                <Player src={a_good_day} onPlay/>
                            </div>
                            <div className="media-controls">
                                <div className="controlBtn">
                                    <CustomPlayPause className="media-control--play-pause"/>
                                    <CurrentTime/>
                                    <SeekBar/>
                                    <Duration/>
                                    <div className="thumbn">
                                        <img src={aGoodDay} alt=""/>
                                    </div>
                                    <div className="trackTitle">
                                        <span>Now playing</span>
                                        <span className="nowPlayingTitle">{this.title}</span>
                                    </div>
                                </div>
                                <div className="serviceBtn">
                                    <a href="/"><i className="fa fa-star"/></a>
                                    <a href="/"><i className="fa fa-share-alt"/></a>
                                    <a href="/"><i className="fa fa-download"/></a>
                                </div>
                            </div>
                        </div>
                    </Media>
                </div>
            </div>
        );
    }
}

export default Grid;
