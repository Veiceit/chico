import React, { Component } from 'react'
import { withMediaProps } from 'react-media-player'

class CustomPlayPause extends Component {
    shouldComponentUpdate({ media }) {
        return this.props.media.isPlaying !== media.isPlaying
    }

    _handlePlayPause = () => {
        this.props.media.playPause();
        // this.props.media.stop();
    };

    render() {
        const { className, style, media } = this.props;
        let FontAwesome = require('react-fontawesome');
        return (
            <button
                type="button"
                id="customPlay"
                className={className}
                style={style}
                onClick={this._handlePlayPause}
            >
                { media.isPlaying ? <FontAwesome name='pause' /> : <FontAwesome name='play' /> }
            </button>
        )
    }
}

export default withMediaProps(CustomPlayPause)