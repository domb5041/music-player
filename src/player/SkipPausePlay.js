import React from 'react';
import styled from 'styled-components'
import _ from 'lodash'
import axios from '../common/axios'

const StyledSkipPausePlay = styled.div`
	display: flex;
	justify-content: center;
	margin: 20px 0;
	color: ${({theme}) => theme.color.base[4]};
	& > i {
		font-size: 25px;
		padding: 20px;
		cursor: pointer;
	}
`

export default function SkipPausePlay({isPlaying}) {
	const togglePlayback = () => {
		axios
		.put(`player/${isPlaying ? 'pause' : 'play'}`)
		.catch(err => {console.log(err, err.response)})
	}

	const skipTrack = (direction) => {
		axios
		.post(`player/${direction === 'forward' ? 'next' : 'previous'}`)
		.catch(err => {console.log(err, err.response)})
	}

	return (
        <StyledSkipPausePlay>
            <i
                className="fas fa-backward"
                onClick={() => skipTrack('backward')}
            />
            <i
                className={isPlaying ? "fas fa-pause" : "fas fa-play"}
                onClick={togglePlayback}
            />
            <i
                className="fas fa-forward"
                onClick={() => skipTrack('forward')}
            />
        </StyledSkipPausePlay>
	);
}
