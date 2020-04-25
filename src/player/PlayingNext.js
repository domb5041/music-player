import React from 'react';
import styled from 'styled-components'
import SongListItem from './SongListItem'

const StyledPlayingNext = styled.div`
`

const StyledHeaderRow = styled.div`
	display: grid;
	grid-template-columns: 1fr auto auto;
	align-items: center;
	column-gap: 5px;
	margin-bottom: 10px;
	color: ${({theme}) => theme.color.base[4]};
	font-size: ${({theme}) => theme.fontSize.body};
	& > i {
		padding: 5px;
		background: ${({theme}) => theme.color.base[0]};
		color: ${({theme}) => theme.color.base[4]};
		border-radius: 5px;
	}
`

function Player() {
	return (
		<StyledPlayingNext>
			<StyledHeaderRow>
				Playing Next
				<i className="fas fa-random"></i>
				<i className="fas fa-sync-alt"></i>
			</StyledHeaderRow>
			<SongListItem/>
			<SongListItem/>
			<SongListItem/>
			<SongListItem/>
			<SongListItem/>
		</StyledPlayingNext>
	);
}

export default Player;
