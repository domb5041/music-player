import React from 'react';
import styled from 'styled-components'
import PlayControls from './PlayControls'
import PlayingNext from './PlayingNext'
import CoverArt from '../common/CoverArt'
import SongLabel from '../common/SongLabel'

const StyledPlayer = styled.div`
	border-left: 1px solid ${props => props.theme.color.base[0]};
	padding: 20px;
	overflow-y: auto;
`

function Player({nowPlaying}) {
	return (
		<StyledPlayer>
			{nowPlaying &&
				<>
					<CoverArt image={nowPlaying.item.album.images[1].url} style={{marginBottom: 10}}/>
					<SongLabel labels={[nowPlaying.item.name, nowPlaying.item.artists[0].name]}/>
					<PlayControls nowPlaying={nowPlaying}/>
					<PlayingNext/>
				</>
			}
		</StyledPlayer>
	);
}

export default Player;
