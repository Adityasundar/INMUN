/** @format */

import React from 'react';
import { isMobile } from 'react-device-detect';

const committee = ({ commDetail }) => {
	return (
		<a
			href={`/${commDetail.commName}`}
			className={isMobile && 'mobileCommittee'}>
			<div className='boxcool all-center'>
				<img
					className='img round-img stylex'
					src={commDetail.commIcon}
					alt='Inshallah'
				/>
				<br />
				<div>
					<h2
						className='generalfont text-center'
						style={{ color: 'black', fontWeight: 'bold', padding: '0px 5px' }}>
						{commDetail.commDisplay}
					</h2>
					<br />
					<h3
						className='generalfont'
						style={{ color: 'black' }}>
						{commDetail.commAgenda}
					</h3>
				</div>
			</div>
		</a>
	);
};

export default committee;
