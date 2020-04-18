import React from 'react';
import CoverArt from '../common/CoverArt';
import SongLabel from '../common/SongLabel';

function Album({album}) {
	return (
		<div>
			<CoverArt image={album.images[1].url} style={{marginBottom: '10px'}}/>
			<SongLabel labels={[album.name, album.artists[0].name]}/>
		</div>
	);
}

export default Album;
