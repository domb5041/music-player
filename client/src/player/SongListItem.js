import React from 'react';
import styled from 'styled-components'
import CoverArt from '../common/CoverArt'
import SongLabel from '../common/SongLabel'

const StyledSongListItem = styled.div`
	display: grid;
	grid-template-columns: 40px 1fr auto;
	column-gap: 10px;
	align-items: center;
	padding: 5px 0;
	color: ${({theme}) => theme.color.dark};
`

function SongListItem() {
	return (
		<StyledSongListItem>
			<CoverArt/>
			<SongLabel/>
			<i className="fas fa-grip-lines"></i>
		</StyledSongListItem>
	);
}

export default SongListItem;
