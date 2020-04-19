import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Album from './Album';
import axios from '../common/axios'

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
		axios
			.get('/albums')
			.then(res => setAlbums(res.data.items))
			.catch(err => {console.log(err, err.response)})
	}, [])

	return (
		<StyledBrowser>
			{albums &&
				<StyledAlbums>
					{albums.map((album, i) =>
						<Album key={i} album={album.album}/>
					)}
				</StyledAlbums>
			}
		</StyledBrowser>
	);
}

export default Browser;
