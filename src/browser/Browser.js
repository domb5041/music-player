import React from 'react';
import styled from 'styled-components';
import Album from './Album';

const StyledBrowser = styled.div`
	flex: 1;
      padding: 20px;
      overflow-y: auto;
`

const StyledAlbums = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: auto;
	column-gap: 20px;
  	row-gap: 20px;
`

function Browser() {
	return (
		<StyledBrowser>
			<StyledAlbums>
				<Album/>
				<Album/>
				<Album/>
				<Album/>
				<Album/>
				<Album/>
				<Album/>
				<Album/>
				<Album/>
			</StyledAlbums>
		</StyledBrowser>
	);
}

export default Browser;
