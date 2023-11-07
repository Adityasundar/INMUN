/** @format */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const DropDown = ({ dropDown, dropUp }) => {
	return (
		<div className='dropDown text-center'>
			<ul
				onMouseEnter={dropDown}
				onMouseLeave={dropUp}>
				<li>
					<a href={`/committees/general-assemblies`}>General Assemblies</a>
				</li>
				<hr />
				<li>
					<a href={`/committees/regional-bodies`}>Regional Bodies</a>
				</li>
				<hr />
				<li>
					<a
						href={`/committees/crisis-committees`}
						style={{ borderBottom: 'none' }}>
						Crisis Committees
					</a>
				</li>
			</ul>
		</div>
	);
};

export default DropDown;
