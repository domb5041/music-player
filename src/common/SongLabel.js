import React from 'react';
import styled, {css} from 'styled-components'

const StyledSongLabel = styled.div`
	${({theme}) => css`
		width: 100%;
		& .primary {
			text-transform: capitalize;
			font-size: ${theme.fontSize.body};
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow-x: hidden;
			color: ${theme.color.base[4]}
		}
		& .secondary {
			text-transform: uppercase;
			font-size: ${theme.fontSize.minor};
			white-space: nowrap;
			font-weight: bold;
			opacity: 0.7;
			text-overflow: ellipsis;
			overflow-x: hidden;
			color: ${theme.color.base[2]}
		}
	`}
`

function SongLabel({style, labels}) {
	return (
        <StyledSongLabel style={style}>
            <div className='primary'>{labels[0]}</div>
            <div className='secondary'>{labels[1]}</div>
        </StyledSongLabel>
	);
}

SongLabel.defaultProps = {
	labels: ['primary', 'secondary']
}

export default SongLabel;
