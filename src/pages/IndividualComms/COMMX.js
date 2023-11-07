/** @format */

import React, { Fragment, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import Navbar from '../../layout/Navbar';
import XBG from '../Secretariat/Images/XBG.pdf'
import XMatrix from '../Secretariat/Images/XMatrix.pdf'
import abhi from '../Secretariat/Images/abhi2.jpg';
import omu from '../Secretariat/Images/omu.jpeg';
import adi from '../Secretariat/Images/adi1.jpg';
import johann from '../Secretariat/Images/johannnew.cr2';
import vivin from '../Secretariat/Images/vivin1.jpeg';
import aashna from '../Secretariat/Images/aashna2.jpeg';
import narayan from '../Secretariat/Images/narayan1.jpg';
import tommy from '../Secretariat/Images/tommy.jpeg';
import chari from '../Secretariat/Images/chari1.jpg';
import chari2 from '../Secretariat/Images/chari.jpeg';
import arnav from '../Secretariat/Images/arnav.webp';
import dafoe from '../Secretariat/Images/dafoe.webp';
import ameya from '../Secretariat/Images/ameya1.jpg';
import lasya from '../Secretariat/Images/lasya1.jpg';
import abhimanyu from '../Secretariat/Images/abhimanyu1.jpeg';
import ashutosh from '../Secretariat/Images/ashutosh2.jpeg';
import hari from '../Secretariat/Images/hari1.jpg';
import sud from '../Secretariat/Images/sud.jpeg';
import prady from '../Secretariat/Images/prady.jpeg';
import ananya from '../Secretariat/Images/ananya1.jpeg';
import ali from '../Secretariat/Images/ali.jpeg';
import yash from '../Secretariat/Images/yashiyer1.jpeg';
import krisha from '../Secretariat/Images/krishareddy1.jpeg';
import muhammad from '../Secretariat/Images/muhammadhafesjee1.jpeg';
import abhinavathrey from '../Secretariat/Images/abhinavathrey1.jpeg';
import arav from '../Secretariat/Images/aravb1.jpeg';
import bs from '../Secretariat/Images/bs.jpeg'
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
			commName: 'Committee X',
			agenda: 'The Vietnam War',
			background: vietnam,
		        commDesc: "1955 to 1975. A time when the blaze of carpet bombs and chemical agents disfigured Vietnam to hell on earth. A time when gunfire drowned the wails of children, and the waters ran red with the blood of 2 million. However, behind the facade of brutal guerilla warfare and grotesque traps at every step of the jungle, Vietnam was no more than a savage game of chess between the Cold war superpowers. As delegates of this committee, will you be the saviours of this nation, or the harbingers of death? The future of Vietnam would be instrumental in the power balance between the 2 sides of the iron curtain. Your actions will change not one nation, but every nation.",
		        icon: x,
			directors: [
				{
					name: 'Abhinav Vallur',
					image: abhi,
					post: 'Chairperson',
					des: "“Wake up to reality” - Madara Uchiha. With a keen eye for detail and an ability to foster meaningful discussions, Abhinav always found MUN to be a platform where he could fervently debate topics that impacted the world’s immediate reality. This zeal for debate coupled with his adaptability has earned him a range of accolades from prestigious conferences such as Harvard MUN and DSMUN, across various committee types. He is also an adept athlete who enjoys multiple sports, and is actively involved in the field of cancer research. In his free time you will most likely find him at the gym listening to metal, or binging Naruto (again). While he certainly enjoys all facets of MUN, he is innately biased toward fast paced, thrilling crisis committees that demand unparalleled versatility from delegates. To that end, he hopes to create a similar committee experience for you at INMUN. Presenting to you the director of Committee X, Abhinav Vallur.",
				},
			],
			ads: [
				{
					name: 'BS Chetan Swaroop Reddy',
					image: bs,
					des: 'BS Chetan is a passionate MUNner who has been active in the circuit since Grade 6. He has been to about 15 MUNs since then. Having been to MUNs since a young age, He has grown into diplomacy, politics and negotiations. Nevertheless, He always yearns for full-scale chaos in committee. He holds accolades from AJMUN, CISMUN, GMUN, and OxfordMUN among others.',
				},
				{
					name: 'Arav Bhojashettar',
					image: arav,
					des: "'It's been said politics is the second oldest profession and I've come to realize over the last few years, it bears a great similarity to the first.' - Ronald Reagan; Arav is known for being cocky and humorous. He highly values communication skills and logic. Arav tends to slip out of tricky situation just as simply as he creates chaos around himself. He bring high quality of debate and environment of unpredictablity into every committee.",
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
										href={XBG}
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
										href={XMatrix}
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
										href={XBG}
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
										href={XMatrix}
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
								style={{ gridGap: '3rem', alignItems: 'start' }}>
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
									<div key={ind} style={{margin: '0px auto'}}>
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
