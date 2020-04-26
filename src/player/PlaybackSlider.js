import React from 'react';
import {StyledSlider} from '../common/common'
import axios from '../common/axios'
import _ from 'lodash'

export default function PlaybackSlider({currentTime, maxTime}) {

    const formatTime = (ms) => {
		const seconds = Math.round(ms / 1000)
		const minutes = Math.floor(seconds / 60);
		const remainderSeconds = seconds % 60;
		const zero = remainderSeconds < 10 ? '0' : '';
		const time = minutes + ':' + zero + remainderSeconds
		return time;
    }

    const seekPlayback = (e) => {
		axios
		.put('player/seek', {position_ms: e.target.value})
		.catch(err => {console.log(err, err.response)})
	}

	return (
        <StyledSlider>
            <div className='labels'>
                <span>{formatTime(currentTime)}</span>
                <span>-{formatTime(maxTime - currentTime)}</span>
            </div>
            <input
                type="range"
                min={0}
                value={currentTime}
                max={maxTime}
                step={100}
                onChange={seekPlayback}
            />
        </StyledSlider>
	);
}

PlaybackSlider.defaultProps={
    currentTime: 0,
    maxTime: 0
}
