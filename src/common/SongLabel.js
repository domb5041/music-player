import React from 'react';
import styled from 'styled-components'

const StyledSongLabel = styled.div`
	color: ${({theme}) => theme.color.dark};
	& .song {
		text-transform: capitalize;
		font-size: ${({theme}) => theme.fontSize.body};
	}
	& .artist {
		text-transform: capitalize;
		font-size: ${({theme}) => theme.fontSize.minor};
	}
`

function SongLabel({style}) {
	return (
        <StyledSongLabel style={style}>
            <div className='song'>song</div>
            <div className='artist'>song</div>
        </StyledSongLabel>
	);
}

export default SongLabel;
