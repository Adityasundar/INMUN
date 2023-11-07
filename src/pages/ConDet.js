/** @format */

import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';
import handbook from './confHandbook.jpeg';
import pdfhandbook from './confHandbook2.pdf';
import comingSoon from './comingSoon.jpeg';
import pdfConferenceSchedule from './conferenceScheduleUpdated.pdf';
import rop from './ropDoc.pdf';
import ropImage from './ropImage.png';
import conferenceSchedule from './conferenceSchedule.png';

const ConDet = ({ dropDown, drop, height, name }) => {
	// Drop Down Functions

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

	// JSX
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

			<div className={isMobile ? 'confMobile conf' : 'conf'}>
				<h1 className='pageTitle'>Conference Details</h1>
				<div
					className='grid-4 all-center'
					style={{
						margin: 'auto',
						width: '90%',
						placeItems: 'center',
						gridGap: '1rem',
					}}>
					<div
						style={{
							width: '150px',
							height: 'auto',
						}}>
						<a
							style={{
								width: '100%',
								height: '209px',
							}}
							className='detImages'
							href={pdfhandbook}
							target='_blank'>
							<img
								src={handbook}
								style={{
									border: 'solid',
									borderColor: 'black',
									borderWidth: 'auto',
								}}
							/>
						</a>
						<h2
							style={{
								maxWidth: '150px',
								color: 'black',
								margin: '0px auto',
							}}
							className='text-center'>
							Conference Handbook
						</h2>
					</div>
					<div
						style={{
							width: '150px',
							height: 'auto',
						}}>
						<img
							src={comingSoon}
							style={{
								border: 'solid',
								borderColor: '#ff8500',
								borderWidth: 'auto',
								height: '210.08px',
								width: '150px',
								objectFit: 'cover',
							}}
						/>
						<h2
							style={{
								maxWidth: '150px',
								color: 'black',
								margin: '0px auto',
							}}
							className='text-center'>
							Conference Policy
						</h2>
					</div>

					<div
						style={{
							width: '150px',
							height: 'auto',
						}}>
						<a
							style={{
								width: '100%',
								height: '209px',
							}}
							className='detImages'
							href={rop}
							target='_blank'>
							<img
								src={ropImage}
								style={{
									border: 'solid',
									borderColor: 'black',
									borderWidth: 'auto',
								}}
							/>
						</a>
						<h2
							style={{
								maxWidth: '150px',
								color: 'black',
								margin: '0px auto',
							}}
							className='text-center'>
							Rules of Procedure
						</h2>
					</div>
					<div
						style={{
							width: '150px',
							height: 'auto',
						}}>
						<a
							style={{
								width: '100%',
								height: '209px',
							}}
							className='detImages'
							href={pdfConferenceSchedule}
							target='_blank'>
							<img
								src={conferenceSchedule}
								style={{
									border: 'solid',
									borderColor: 'black',
									borderWidth: 'auto',
								}}
							/>
						</a>
						<h2
							style={{
								maxWidth: '150px',
								color: 'black',
								margin: '0px auto',
							}}
							className='text-center'>
							Conference Schedule
						</h2>
					</div>
				</div>
				<div
					className='linksMeetings'
					style={{ marginTop: '50px' }}>
					<h1 style={{ fontSize: '40px' }}>
						Links for pre-conferene training meetings
					</h1>
					<br />
					<ul className='all-center'>
						<li
							style={{ width: '280px', border: 'solid', borderColor: 'black' }}
							className='btn bg-primary'>
							<a
								style={{ fontSize: '25px', color: 'black' }}
								href='https://drive.google.com/file/d/19XhD1ygqwBojuzFCRrKq7IESKKtDdVsE/view?usp=sharing'>
								Joint Crisis Committee
							</a>
						</li>
						<br />
						<li
							style={{ width: '280px', border: 'solid', borderColor: 'black' }}
							className='btn bg-primary'>
							<a
								style={{ fontSize: '25px', color: 'black' }}
								href='https://drive.google.com/file/d/1nP93-X5vyF8smfyOMD_ks3FH-DtFZuTF/view?usp=sharing'>
								Union Cabinet
							</a>
						</li>
						<br />
						<li
							style={{ width: '280px', border: 'solid', borderColor: 'black' }}
							className='btn bg-primary'>
							<a
								style={{ fontSize: '25px', color: 'black' }}
								href='https://drive.google.com/file/d/1hsPxfh-yMesusUlj4U5jSEdVp9usf7LT/view?usp=sharing'>
								Lok Sabha
							</a>
						</li>
						<br />
						<li
							style={{ width: '280px', border: 'solid', borderColor: 'black' }}
							className='btn bg-primary'>
							<a
								style={{ fontSize: '25px', color: 'black' }}
								href='https://drive.google.com/file/d/11HqabnUL4LmwmslHKJLg-6QJdhq5UuaQ/view?usp=sharing'>
								Rajya Sabha
							</a>
						</li>
						<br />
						<li
							style={{ width: '280px', border: 'solid', borderColor: 'black' }}
							className='btn bg-primary'>
							<a
								style={{ fontSize: '25px', color: 'black' }}
								href='https://drive.google.com/file/d/1K_qqARN07PBAaM-HigrVvCm7qkkPPKiO/view?usp=sharing'>
								BBMP
							</a>
						</li>
						<br />
						<li
							style={{ width: '280px', border: 'solid', borderColor: 'black' }}
							className='btn bg-primary'>
							<a
								style={{ fontSize: '25px', color: 'black' }}
								href='https://drive.google.com/file/d/1KKpu3AuthkW1Zk8BZ1vVyR-lEYYEKTSI/view?usp=sharing'>
								UNEP
							</a>
						</li>
						<br />
						<li
							style={{ width: '280px', border: 'solid', borderColor: 'black' }}
							className='btn bg-primary'>
							<a
								style={{ fontSize: '25px', color: 'black' }}
								href='https://drive.google.com/file/d/1V290n3gqMYfLw5fbgY-FqGux4gaIDeZk/view?usp=sharing'>
								ECOSOC
							</a>
						</li>
						<br />
									
					</ul>
				</div>
				<div className='timeline'>
					<h1 className='timeline-heading'>Timeline of important events</h1>
					<div className='timeline-body'>
						<div
							className='vertical-line'
							style={isMobile ? { height: '1550px' } : {}}
						/>
						<div className='content-body'>
							<div className='date right'>
								<div className='content'>
									<h2>30th April</h2>
									<p>Registrations open</p>
								</div>
							</div>
							<div className='date left'>
								<div className='content'>
									<h2>20th July</h2>
									<p>Background guides released</p>
								</div>
							</div>
							<div className='date right'>
								<div className='content'>
									<h2>2nd August </h2>
									<p>Registrations close</p>
								</div>
							</div>
							<div className='date left'>
								<div className='content'>
									<h2>9th August </h2>
									<p>Final allocations and country matrices released</p>
								</div>
							</div>
							<div className='date left'>
								<div className='content'>
									<h2>24th-26th August </h2>
									<p>Pre-conference training</p>
								</div>
							</div>
							<div className='date right'>
								<div className='content'>
									<h2>28th August </h2>
									<p>INMUN begins!</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{!isMobile && (
				<div>
					<Footer />
				</div>
			)}
		</div>
	);
};

// April 30th - Registrations open
// June 30th - Background Guide released
// 2nd August - Registrations close
// 9th August - Final allocations released / Country matrix released
// 22nd August - Final day for Position Paper Submission
// 24-26th August - Pre conference training
// 28th August- INMUN Begins!

export default ConDet;
