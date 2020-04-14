import React from 'react';
import styled from 'styled-components'
import PlayControls from './PlayControls'
import PlayingNext from './PlayingNext'
import CoverArt from '../common/CoverArt'
import SongLabel from '../common/SongLabel'

const StyledPlayer = styled.div`
	border-left: 1px solid ${props => props.theme.color.dark};
	padding: 20px;
	overflow-y: auto;
`

function Player() {
	return (
		<StyledPlayer>
			<CoverArt style={{marginBottom: 10}}/>
			<SongLabel/>
			<PlayControls/>
			<PlayingNext/>
		</StyledPlayer>
	);
}

export default Player;
