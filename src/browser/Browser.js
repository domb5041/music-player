import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Album from './Album';
import {params} from '../common/utilityFunctions'
import axios from 'axios'

const StyledBrowser = styled.div`
	flex: 1;
	padding: 20px;
	overflow-y: auto;
`

const StyledAlbums = styled.div`
	display: grid;
	grid-template-columns: repeat( auto-fit, minmax(170px, 1fr) );
	grid-template-rows: auto;
	column-gap: 20px;
  	row-gap: 20px;
`

function Browser() {
	const [albums, setAlbums] = useState(null)
	useEffect(() => {
		let config = {
			headers: {
				'Authorization': 'Bearer ' + params().access_token,
			}
		}
		axios.get('https://api.spotify.com/v1/me/albums', config)
		.then(response => {
			console.log(response);
			setAlbums(response.data.items);
		})
	}, [])

	return (
		albums &&
		<StyledBrowser>
			<StyledAlbums>
				{albums.map((album, i) =>
					<Album key={i} album={album.album}/>
				)}
			</StyledAlbums>
		</StyledBrowser>
	);
}

export default Browser;
