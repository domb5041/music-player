import React from 'react';
import CoverArt from '../common/CoverArt';
import SongLabel from '../common/SongLabel';

function Album() {
	return (
		<div>
			<CoverArt style={{marginBottom: '10px'}}/>
			<SongLabel/>
		</div>
	);
}

export default Album;
