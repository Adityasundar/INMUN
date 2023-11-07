/** @format */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../layout/Navbar';
import '../App.css';
import Committee from './Comittee.js';
import { isMobile } from 'react-device-detect';
import Footer from '../layout/Footer';

const Committees = ({ commStuff, dropDown, drop, height, name }) => {
	const gas = [];
	const regs = [];
	const cris = [];
	gas.push(commStuff.UNEP);
	gas.push(commStuff.UNHCR);
	gas.push(commStuff.ECOSOC);
	regs.push(commStuff.LOK);
	regs.push(commStuff.RAJYA);
	regs.push(commStuff.BBMP);
	cris.push(commStuff.JCC);
	cris.push(commStuff.X);
	cris.push(commStuff.UNION);

	const Down = (comms) => {
		dropDown(comms);
	};

	const heightfunc = (comms) => {
		height(comms);
	};

	const namefunc = (comms) => {
		name(comms);
	};

	// Scrolling Navbar
	const [show, setShow] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(0);
	const controlNavbar = () => {
		if (window.scrollY > lastScrollY && window.scrollY > 300) {
			setShow(false);
		} else {
			setShow(true);
		}

		setLastScrollY(window.scrollY);
	};
	useEffect(() => {
		setShow(true);
	}, []);
	useEffect(() => {
		window.addEventListener('scroll', controlNavbar);
		return () => {
			window.removeEventListener('scroll', controlNavbar);
		};
	}, [lastScrollY]);

	if (isMobile) {
		return (
			<div>
				<Navbar
					dropDown={Down}
					drop={drop}
					height={heightfunc}
					name={namefunc}
					classname='navbarpage'
					show={show}
				/>
				<div
					style={{
						backgroundColor: 'white',
						color: '#ff8500',
						position: 'relative',
						top: '120px',
					}}>
					<div className={isMobile ? 'mobileCommittees' : 'container'}>
						<div
							className='x-large headfont general-assesmbly'
							style={{
								paddingBottom: '0px',
								paddingTop: '50px',
								textAlign: 'center',
								color: '#ff8500',
							}}>
							GENERAL ASSEMBLIES
						</div>
						<div
							style={userStyle3}
							className='commMap'>
							{gas.map((ga) => (
								<div className={isMobile && 'committeeDivMobile'}>
									<Committee
										commDetail={ga}
										key={ga.commName}
									/>
								</div>
							))}
						</div>
						<br />
						<br />
						<hr style={stylehr} />
						<br />
						<div
							className='x-large headfont'
							style={{
								paddingBottom: '0px',
								paddingTop: '0px',
								textAlign: 'center',
							}}>
							REGIONAL BODIES
						</div>
						<div
							style={userStyle3}
							className='commMap'>
							{regs.map((reg) => (
								<div className={isMobile && 'committeeDivMobile'}>
									<Committee
										commDetail={reg}
										key={reg.commName}
									/>
								</div>
							))}
						</div>
						<br />
						<br />
						<hr style={stylehr} />
						<br />
						<div
							className='x-large headfont'
							style={{
								paddingBottom: '0px',
								paddingTop: '0px',
								textAlign: 'center',
							}}>
							CRISIS
						</div>
						<div
							style={userStyle3B}
							className='commMap'>
							{cris.map((cri) => (
								<div className={isMobile && 'committeeDivMobile'}>
									<Committee
										commDetail={cri}
										key={cri.commName}
									/>
								</div>
							))}
						</div>
						<br />
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div>
				<Navbar
					dropDown={Down}
					drop={drop}
					height={heightfunc}
					name={namefunc}
					classname='navbarpage'
					show={show}
				/>
				<div
					style={{
						backgroundColor: 'white',
						color: '#ff8500',
						position: 'relative',
						top: '120px',
					}}>
					<div className={isMobile ? 'mobileCommittees' : 'container'}>
						<div
							className='x-large headfont general-assesmbly'
							style={{
								paddingBottom: '0px',
								paddingTop: '50px',
								textAlign: 'center',
								color: '#ff8500',
							}}>
							GENERAL ASSEMBLIES
						</div>
						<div
							style={userStyle3}
							className='commMap'>
							{gas.map((ga) => (
								<div className={isMobile && 'committeeDivMobile'}>
									<Committee
										commDetail={ga}
										key={ga.commName}
									/>
								</div>
							))}
						</div>
						<br />
						<br />
						<hr style={stylehr} />
						<br />
						<div
							className='x-large headfont'
							style={{
								paddingBottom: '0px',
								paddingTop: '0px',
								textAlign: 'center',
							}}>
							REGIONAL BODIES
						</div>
						<div
							style={userStyle3}
							className='commMap'>
							{regs.map((reg) => (
								<div className={isMobile && 'committeeDivMobile'}>
									<Committee
										commDetail={reg}
										key={reg.commName}
									/>
								</div>
							))}
						</div>
						<br />
						<br />
						<hr style={stylehr} />
						<br />
						<div
							className='x-large headfont'
							style={{
								paddingBottom: '0px',
								paddingTop: '0px',
								textAlign: 'center',
							}}>
							CRISIS
						</div>
						<div
							style={userStyle3B}
							className='commMap'>
							{cris.map((cri) => (
								<div className={isMobile && 'committeeDivMobile'}>
									<Committee
										commDetail={cri}
										key={cri.commName}
									/>
								</div>
							))}
						</div>
						<br />
					</div>
				</div>
				<div style={{ position: 'relative', top: '50px' }}>
					<Footer />
				</div>
			</div>
		);
	}
};

const userStyle2 = {
	display: 'grid',
	gridTemplateColumns: 'repeat(2, 1fr)',
	gridGap: '2rem',
	paddingTop: '0px',
	marginTop: '0px',
};

const userStyle3 = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '2rem',
};

const userStyle3B = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '2rem',
	paddingBottom: '100px',
};

const stylehr = {
	display: 'block',
	marginTop: '0.5em',
	marginBottom: '0.5em',
	marginLeft: 'auto',
	marginRight: 'auto',
	borderStyle: 'inset',
	borderWidth: '1px',
	borderColor: '#0035a0',
};

Committees.propTypes = {
	commDetails: PropTypes.object,
};

export default Committees;

