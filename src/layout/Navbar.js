/** @format */

import React, { Component, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import logo from '../inv-logo.png';
import '../App.css';
import DropDown from './DropDown';
import Logo from '../invLogo.png';
import PropTypes from 'prop-types';

const Navbar = ({ dropDown, drop, height, name, classname, show }) => {
	const Down = () => {
		dropDown(true);
	};
	const Up = () => {
		dropDown(false);
	};
	const Height = (h) => {
		height(h);
	};
	const CommName = (n) => {
		name(n);
	};

	// Menu drop down for mobile layout
	const [menuShow, setMenu] = useState(true);
	const menuDropDown = () => {
		setMenu(!menuShow);
	};

	if (isMobile) {
		return (
			<div className='nav-mobile'>
				<button
					style={{ display: 'inline-block' }}
					className={menuShow ? 'menuBar' : 'menuCross'}
					onClick={menuDropDown}>
					<div className={menuShow ? 'bar' : 'cross1'} />
					<div className={menuShow ? 'bar' : 'cross2'} />
					<div className={menuShow ? 'bar' : 'nothing'} />
				</button>

				<h1 className='INMUN2023'>INMUN 2023</h1>

				<div
					className={!menuShow ? 'hideMenu mobileMenu' : 'showMenu mobileMenu'}>
					<ul>
						<li>
							<a href='/'>Home</a>
						</li>
						<li>
							<a href='/committees'>Committees</a>
						</li>
						<li>
							<a href='/conference-details'>Conference Details</a>
						</li>
						<li>
							<a href='/executive-board'>Executive Board</a>
						</li>
						<li>
							<a href='https://forms.gle/P4GTFMBo2qVGtdAF6'>Register</a>
						</li>
						<li>
							<a href='/about-us'>About Us</a>
						</li>
					</ul>
				</div>
			</div>
		);
	} else {
		return (
			<div>
				<nav
					className={`navbar ${classname} ${show ? 'showNavbar' : 'hideNavbar'} 
					}`}>
					<img
						src={classname != null ? logo : Logo}
						alt=''
						className='inv-logo'
					/>
					<div className='navbar-text'>
						<a href='/'>Home</a>
						<div className='comms-div'>
							<a
								href='/committees'
								onMouseEnter={Down}
								onMouseLeave={Up}>
								Committees
							</a>
							<div>
								{drop && (
									<DropDown
										dropDown={Down}
										dropUp={Up}
										Height={Height}
										CommName={CommName}
									/>
								)}
							</div>
						</div>
						<a href='/conference-details'>Conference Details</a>
						<a href='/executive-board'>Executive Board</a>

						<a href='https://forms.gle/P4GTFMBo2qVGtdAF6' target='_blank'>Register</a>
						<a href='about-us'>About Us</a>
					</div>
				</nav>
			</div>
		);
	}
};

export default Navbar;
