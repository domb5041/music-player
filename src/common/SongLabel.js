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

function SongLabel({style, labels}) {
	return (
        <StyledSongLabel style={style}>
            <div className='song'>{labels[0]}</div>
            <div className='artist'>{labels[1]}</div>
        </StyledSongLabel>
	);
}

SongLabel.defaultProps = {
	labels: ['label1', 'label2']
}

export default SongLabel;
