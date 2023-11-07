/** @format */

import React, { Fragment, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import Navbar from '../../layout/Navbar';
import BBMPBG from '../Secretariat/Images/BBMPBG.pdf'
import BBMPMatrix from '../Secretariat/Images/BBMPMatrix.pdf'
import abhi from '../Secretariat/Images/abhi2.jpg';
import omu from '../Secretariat/Images/omu.jpeg';
import adi from '../Secretariat/Images/adi1.jpg';
import johann from '../Secretariat/Images/johannnew.cr2';
import vivin from '../Secretariat/Images/vivin1.jpeg';
import aashna from '../Secretariat/Images/aashna1.jpg';
import narayan from '../Secretariat/Images/narayan1.jpg';
import tommy from '../Secretariat/Images/tommy.jpeg';
import chari from '../Secretariat/Images/chari1.jpg';
import chari2 from '../Secretariat/Images/chari.jpeg';
import arnav from '../Secretariat/Images/arnav.webp';
import dafoe from '../Secretariat/Images/dafoe.webp';
import ameya from '../Secretariat/Images/ameya1.jpg';
import lasya from '../Secretariat/Images/lasya1.jpg';
import abhimanyu from '../Secretariat/Images/abhimanyu1.jpeg';
import ashutosh from '../Secretariat/Images/ashutosh1.jpg';
import hari from '../Secretariat/Images/hari1.jpg';
import sud from '../Secretariat/Images/sud.jpeg';
import ananya from '../Secretariat/Images/ananya1.jpeg';
import ali from '../Secretariat/Images/ali.jpeg';
import yash from '../Secretariat/Images/yashiyer1.jpeg';
import krisha from '../Secretariat/Images/krishareddy1.jpeg';
import muhammad from '../Secretariat/Images/muhammadhafesjee1.jpeg';
import abhinavathrey from '../Secretariat/Images/abhinavathrey1.jpeg';
import arav from '../Secretariat/Images/aravb1.jpeg';
import ayush from '../Secretariat/Images/ayushnair1.jpeg'
import bbmp from '../../icons/IBBMP.png';
import lok from '../../icons/ILOK.png';
import rajya from '../../icons/IRAJYA.png';
import unep from '../../icons/IUNEP.png';
import unhcr from '../../icons/IUNHCR.png';
import union from '../../icons/IUNION.png';
import jcc from '../../icons/IJCC.png';
import x from '../../icons/IX.png';

// background images
import vietnam from '../Secretariat/Images/vietnam.png';
import bluestar from '../Secretariat/Images/bluestar.jpeg';
import wwii from '../Secretariat/Images/heil_hitler.jpeg';
import bangalore from '../Secretariat/Images/bengaluru.jpeg';
import health from '../Secretariat/Images/health.jpeg';
import refugees from '../Secretariat/Images/refugees.jpeg';
import env from '../Secretariat/Images/unep.jpeg';
import Footer from '../../layout/Footer';

const DetComm = ({ match, dropDown, drop, height, name }) => {
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

	const comm = {
			commName: 'BBMP',
			agenda: 'The impact of unplanned urbanisation in the whitefield area ',
			background: bangalore,
		        commDesc: "As the city of Bangalore grows, so does its list of problems. 30 years ago the Whitefield area was a part of the Indian countryside; today it forms the core of the city and the country’s tech hub. The exponential rates of expansion in the city have left it in dire straits. From the depletion of 80% of our lakes the increase of garbage surrounding our streets, environmental and social issues are seen everywhere. In an attempt to return the garden city to its former glory, the BBMP hosts a conclave with its policy-makers. ",
		        icon: bbmp,
			directors: [
				{
					name: 'Ameya Mundkur',
					image: ameya,
					post: 'Chairperson',
					des: "Hi, delegates! I'm Ameya, your Chairperson for BBMP. I've been actively participating in MUNs for a few years now, my best memories from MUN are when committees spew into complete chaos and still come up with impactful ideas, and hope to see that in committee. My interests include Public policy and International Relations, and in my free time, you might find me playing instruments, listening to music, watching shows, or having random, useless debates with my friends. Feel free to ask me any questions. Excited to meet you all!"
				},
			],
			ads: [
				{
					name: 'Lasya Varma',
					image: lasya,
					des: "Hello delegates! I'm Lasya Mohan Varma, a 10th grader, and I am honored to be part of the Bruhat Bengaluru Mahanagara Palike. I love literature and movies, and I'm a huge fan of theater. I started MUNning less than two years ago but it has been a magical and enriching experience. I have been able to engage in some of my favorite activities through MUN: public speaking, debate, writing, and analyzing pertinent social issues. I am eager to participate in several more MUNs, and broaden my debate horizons. I hope to see some fierce debate in committee ultimately leading to constructive solutions we can implement not only in Whitefield but throughout the city."
				},
				{
					name: 'Krisha Reddy',
					image: krisha,
					des: "'Diplomacy is the velvet glove that cloaks the fist of power.' - This Executive Board member is no stranger to MUNs. With a placement at every conference she’s attended and even a BD in her first ever committee, she’s been through all munning has to offer. Whether it be arguing for climate rights or against China’s hold on economies, she is confident, well researched and knows how to build her bloc. Her achievements speak for her, and her ability to speak and argue points prove her caliber. Presenting the Assistant Director of the Bruhat Bengaluru Mahanagara Palike, Krisha Reddy.",
				},
			],
		};

	if (isMobile) {
		return (
			<Fragment>
				<Navbar
					dropDown={Down}
					drop={drop}
					height={heightfunc}
					name={namefunc}
					classname='navbarpage'
					show={show}
				/>{' '}
				<div style={{ position: 'relative', top: '120px' }}>
					<div style={{ backgroundColor: 'white' }}>
						<div
							className='container text-center '
							style={p1}>
							<img
								className='img round-img stylea center'
								src={comm.icon}
								alt='Alt...'></img>
							<div className='large text-center headfont'>{comm.commName}</div>
							<h1
								className='headfont'
								style={{ fontWeight: 'normal', fontSize: '30px' }}>
								{comm.agenda}
							</h1>
							<br />
							<h2
								className='generalfont2'
								style={mainbody}>
								{comm.commDesc}
							</h2>
							<div
								style={{
									margin: 'auto',
									marginTop: '30px',
								}}>
								<div
									className='btn btn-primary '
									style={{
										width: '200px',
										height: '50px',
										borderRadius: '20px',
									}}>
									<a
										href={BBMPBG}
										target='_blank'>
										Background Guide
									</a>
								</div>
								<div
									className='btn btn-secondary '
									style={{
										width: '200px',
										height: '50px',
										borderRadius: '20px',
									}}>
									<a
										href={BBMPMatrix}
										target='_blank'>
										Committee Matrix
									</a>
								</div>
							</div>
						</div>
					</div>
					<br />
					<br />

					<div
						style={{ position: 'relative' }}
						className='comm-div'>
						<div className='overlay-comm' />
						<img
							src={comm.background}
							alt='not working lmao'
							style={{
								position: 'absolute',
								height: '100%',
								zIndex: '-5',
								opacity: '0.3',
								objectFit: 'cover',
							}}
						/>
						<div style={{ zIndex: '100', positve: 'relative' }}>
							<div className='eb-title ebMobile'>
								<h1>{comm.commName} </h1>
								<h6>Agenda: {comm.agenda}</h6>
							</div>
							<div
								className={`grid-${comm.directors.length} all-center directorBox`}>
								{comm.directors.map((director, idx) => (
									<div key={idx}>
										<img
											src={director.image}
											className='directorImage'
										/>
										<h1 style={{ color: 'white' }}>{director.name}</h1>
										<h3>{director.post}</h3>
										<p style={{ maxWidth: '90%', color: 'white' }}>
											{director.des}
										</p>
									</div>
								))}
							</div>
							<div className={`grid-${comm.ads.length} all-center directorBox`}>
								{comm.ads.map((ad, ind) => (
									<div key={ind}>
										<img
											src={ad.image}
											className='directorImage'
										/>
										<h1 style={{ color: 'white' }}>{ad.name}</h1>
										<h3 style={{ color: 'white' }}>Assistant Director</h3>
										<p style={{ maxWidth: '90%', color: 'white' }}>{ad.des}</p>
									</div>
								))}
							</div>
						</div>
					</div>

					<div style={p3}>
						<div
							className='container text-center'
							style={{ backgroundColor: 'white' }}>
							<br />
							<br />
							<br />
							<br />
						</div>
					</div>
				</div>
			</Fragment>
		);
	} else {
		return (
			<Fragment>
				<Navbar
					dropDown={Down}
					drop={drop}
					height={heightfunc}
					name={namefunc}
					classname='navbarpage'
					show={show}
				/>{' '}
				<div style={{ position: 'relative', top: '120px' }}>
					<div style={{ backgroundColor: 'white' }}>
						<div
							className='container text-center '
							style={p1}>
							<img
								className='img round-img stylea center'
								src={comm.icon}
								alt='Alt...'></img>
							<div className='large text-center headfont'>{comm.commName}</div>
							<h1
								className='headfont'
								style={{ fontWeight: 'normal', fontSize: '30px' }}>
								{comm.agenda}
							</h1>
							<br />
							<h2
								className='generalfont2'
								style={mainbody}>
								{comm.commDesc}
							</h2>
							<div
								style={{
									margin: 'auto',
									marginTop: '30px',
								}}>
								<div
									className='btn btn-primary '
									style={{
										width: '200px',
										height: '50px',
										borderRadius: '20px',
									}}>
									<a
										href={BBMPBG}
										target='_blank'>
										Background guide
									</a>
								</div>
								<div
									className='btn btn-secondary '
									style={{
										width: '200px',
										height: '50px',
										borderRadius: '20px',
									}}>
									<a
										href={BBMPMatrix}
										target='_blank'>
										Committee Matrix
									</a>
								</div>
							</div>
						</div>
					</div>
					<br />
					<br />

					<div
						style={{ position: 'relative' }}
						className='comm-div'>
						<div className='overlay-comm' />
						<img
							src={comm.background}
							alt='not working lmao'
							style={{
								position: 'absolute',
								height: '100%',
								zIndex: '-5',
								opacity: '0.3',
								margin: 'auto',
							}}
						/>
						<div style={{ zIndex: '100', positve: 'relative' }}>
							<div className='eb-title'>
								<h1>Executive Board</h1>
							</div>
							<div
								className={`grid-${comm.directors.length} all-center directorBox`}
								style={{ gridGap: '3rem', alignItems: 'start' }} >
								{comm.directors.map((director, idx) => (
									<div key={idx} style={{margin: '0px auto'}}>
										<img
											src={director.image}
											className='directorImage'
										/>
										<h1 style={{ color: 'white' }}>{director.name}</h1>
										<h3>{director.post}</h3>
										<p style={{ color: 'white' }}>{director.des}</p>
									</div>
								))}
							</div>
							<div
								className={`grid-${comm.ads.length} all-center directorBox`}
								style={{ gridGap: '3rem' }}>
								{comm.ads.map((ad, ind) => (
									<div key={ind} style={{alignItems: 'start'}}>
										<img
											src={ad.image}
											className='directorImage'
										/>
										<h1 style={{ color: 'white' }}>{ad.name}</h1>
										<h3 style={{ color: 'white' }}>Assistant Director</h3>
										<p style={{ color: 'white' }}>{ad.des}</p>
									</div>
								))}
							</div>
						</div>
					</div>

					<div style={p3}>
						<div
							className='container text-center'
							style={{ backgroundColor: 'white' }}>
							<br />
							<br />
							<br />
							<br />
						</div>
					</div>
				</div>
				<Footer />
			</Fragment>
		);
	}
};

const p1 = {
	fontFamily: 'Times New Roman, Times, serif',
	backgroundColor: '#white',
};

const mainbody = {
	fontSize: '20px',
	fontWeight: 'lighter',
	textAlign: 'justify',
	textJustify: 'inter-word',
	color: 'black',
};

const p2 = {
	height: '1305px',
	width: '100%',
	fontFamily: 'Times New Roman, Times, serif',
};

const p3 = {
	fontFamily: 'Times New Roman, Times, serif',
	backgroundColor: 'white',
};

const bgimage = {
	position: 'absolute',
	width: '100%',
	height: '1305px',
	opacity: '0.2',
	objectFit: 'cover',
};

export default DetComm;

// <div
// 					className='tint'
// 					style={p2}>
// 					<img
// 						className='imgForOverlay'
// 						src={inventure}
// 						alt=''
// 						style={bgimage}
// 					/>
// 					<br />
// 					<br />
// 					<div className='container text-center'>
// 						<div className='x-large text-center headfont'>EXECUTIVE BOARD</div>
// 						<br />
// 						<div
// 							style={{
// 								display: 'grid',
// 								gridTemplateColumns: `repeat(${currState.dirIcon.length}, 1fr)`,
// 								gridGap: '1rem',
// 							}}>
// 							{currState.dirIcon.map((icon) => (
// 								<img
// 									className='img round-img center stylez'
// 									src={icon}
// 									alt='lmao ded'
// 								/>
// 							))}
// 						</div>
// 						<div
// 							style={{
// 								display: 'grid',
// 								gridTemplateColumns: `repeat(${currState.commDir.length}, 1fr)`,
// 								gridGap: '1rem',
// 							}}>
// 							{currState.commDir.map((director) => (
// 								<h1 style={{ paddingTop: '15px' }}>{director}</h1>
// 							))}
// 						</div>
// 						<div
// 							style={{
// 								display: 'grid',
// 								gridTemplateColumns: `repeat(${currState.commDir.length}, 1fr)`,
// 								gridGap: '1rem',
// 							}}>
// 							{currState.commDir.map((director) => (
// 								<h1
// 									style={{
// 										fontWeight: 'normal',
// 										color: '#000b3a',
// 									}}>
// 									Director
// 								</h1>
// 							))}
// 							<br />
// 						</div>
// 						<div
// 							style={{
// 								display: 'grid',
// 								gridTemplateColumns: `repeat(2, 1fr)`,
// 								gridGap: '1rem',
// 							}}>
// 							{currState.ADIcons.map((icon) => (
// 								<img
// 									className='img round-img center stylez'
// 									src={icon}
// 									alt=''
// 								/>
// 							))}
// 						</div>
// 						<div
// 							style={{
// 								display: 'grid',
// 								gridTemplateColumns: `repeat(2, 1fr)`,
// 								gridGap: '1rem',
// 							}}>
// 							{currState.commAD.map((assistantlmao) => (
// 								<h1 style={{ paddingTop: '15px' }}>{assistantlmao}</h1>
// 							))}
// 						</div>
// 						<div
// 							style={{
// 								display: 'grid',
// 								gridTemplateColumns: `repeat(2, 1fr)`,
// 								gridGap: '1rem',
// 							}}>
// 							{currState.commAD.map((assistantlmao) => (
// 								<h1 style={{ fontWeight: 'normal', color: '#000b3a' }}>
// 									Assistant Director
// 								</h1>
// 							))}
// 						</div>
// 						<br />
// 						<br />
// 					</div>
// 				</div>
