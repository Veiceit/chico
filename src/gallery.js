import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

let masonryOptions = {
    transitionDuration: 0
};

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: [
                {
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

    render() {
        const childElements = this.state.elements.map(function(element){
            return (
                <li className="image-element-class">
                    <img src={element.src} />
                </li>
            );
        });

        return (
            <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            >
                {childElements}
            </Masonry>
        );
    }
}

export default Gallery;