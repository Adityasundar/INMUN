/** @format */

import React, { Fragment, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import Navbar from '../../layout/Navbar';
import JCCBG from '../Secretariat/Images/JCCBG.pdf'
import JCCMatrix from '../Secretariat/Images/JCCMatrix.pdf'
import gunav from '../Secretariat/Images/gunav.jpeg';
import omu from '../Secretariat/Images/omu.jpeg';
import abhi from '../Secretariat/Images/abhi1.jpg';
import adi from '../Secretariat/Images/adi1.jpg';
import vivin from '../Secretariat/Images/vivin.jpeg';
import zaid from '../Secretariat/Images/zaid.jpeg';
import aashna from '../Secretariat/Images/aashna1.jpg';
import narayan from '../Secretariat/Images/narayan1.jpg';
import johann from '../Secretariat/Images/johannnew.cr2';
import tommy from '../Secretariat/Images/tommy.jpeg';
import samu from '../Secretariat/Images/samu.jpeg';
import arnav from '../Secretariat/Images/arnav.webp';
import dafoe from '../Secretariat/Images/dafoe.webp';
import ameya from '../Secretariat/Images/ameya1.jpg';
import lasya from '../Secretariat/Images/lasya1.jpg';
import chari from '../Secretariat/Images/chari1.jpg';
import abhimanyu from '../Secretariat/Images/abhimanyu1.jpeg';
import ashutosh from '../Secretariat/Images/ashutosh2.jpeg';
import hari from '../Secretariat/Images/hari1.jpg';
import sud from '../Secretariat/Images/sud.jpeg';
import ananya from '../Secretariat/Images/ananya1.jpeg';
import ali from '../Secretariat/Images/ali.jpeg';
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
		commName: 'Joint Crisis Committee',
		agenda: 'World War II',
		background: wwii,
		commDesc:
			'The world was on the brink of destruction. Growing tensions between the major world powers erupted into a conflict, now known as world war ii. From the battlefields of Europe to the jungles of SouthAfrica, this war engulfed the entire world. Lives were lost, cities were leveled, and the very fabric of human civilization and society was threatened. But amid the chaos arose stories of heroism and bravery. Ordinary men and women rising to the call of action and defending their lands and beliefs. Are you willing to help them, and end this war peacefully, or do you believe in honour by martyrdom? This committee will pit you against the enemy, whose movements remain a mystery until its too late. Delegates will need to push their diplomatic and strategic skills to a whole new level in order to one up the other side.',
		icon: jcc,
		directors: [
			{
				name: 'Aditya Sundar',
				image: adi,
				post: 'Director of the Allies',
				des: 'Greetings delegates, this is Aditya Sundar from 12A and I will be serving as Director for the Allies. I have done a number of MUNs, from HMUN India to DSMUN and have developed a certain attitude towards Crisis Committees specifically, which is why I am looking forward to see how you delegates decide to move through one of the most significant events in history. Apart from doing MUNs, I am also a musician and a science student, so that’s 3 things I am really passionate about. Hope to see you in committee and may the force be with you!',
			},
			{
				name: 'Johann Ulatill',
				image: johann,
				post: 'Crisis Director',
				des: 'I am thrilled to introduce myself as the Crisis Director for INMUN 2023 and the International Head of Press. With over 4 years of exceptional MUN experience, I have accomplished significant milestones both within and outside the MUN community. As the founder of MUNwala, a successful soft skills training company, I have empowered individuals to enhance their personal and professional growth. With this wealth of experience, I am committed to creating a competitive and enriching environment at INMUN 2023. Get ready for an unforgettable journey!',
			},
			{
				name: 'Vivin Anand',
				image: vivin,
				post: 'Director of the Axis',
				des: "Hey delegates! I'm Vivin Anand, co-director for INMUN's JCC this year. I am looking forward to seeing how each and every delegate uniquely attempts to tackle the greatest and arguably most consequential war in modern history, from both sides! Outside of MUN, I am a huge sports fan, especially Cricket and Mixed Martial Arts and I love listening to and playing music. See you in committee!",
			},
		],
		dir2: [
			{
				name: 'Zaid Sherif',
				image: zaid,
				post: 'Co-director of the Axis',
				des: "'I'll always help topple a government' - Alex 'Technoblade'; Having been in the circuit since 2017, Zaid has definitely earned himself the reputation of being one of the most indomitable delegates in Banglore . He has attended over 25 conferences, which includes a diverse experience as an Executive Member or a member of the Secreteriat. With numerous accolades to his name with Best Delegate awards from conferences such as SJCMUN, CoMUN, AMUN and CJCMUN, him and his iconic bow-tie never fail to unnerve those around him. Presenting to you the co-director of JCC, Zaid Sheriff.",
			},
			{
				name: 'Gunav Menon',
				image: gunav,
				post: 'Co-director of the Allies',
				des: "Opinionated and never hesitant to elucidate his point of view, Gunav is as firm as he is considerate. Having been to more than 50 conferences, Gunav has an impressive placement record to say the least. Awards to his name include the likes of the Best Delegate Awards at MUNs such as CLMUN, GWHMUN, SMUN, SJBHSMUN and HMUN India to name a few and also accolades from MUNs such as TISBMUN, KMUN and BMUN. With a penchant for fast-paced debate and being skilled at handling situations that would make even the most seasoned MUNners uncomfortable, Gunav enjoys challenges and is adept at using a diplomatic approache to tackle even the most unnerving predicaments. Apart from MUN, Gunav is an avid debater and a passionate lover of Motorsport. Gunav actively participates in parliamentary debates and ADR Competitions at college and has even represented India in Sri Lanka at the Motorcross Championships twice. His perfervid appreciation for sport and speed is what, among other things, Gunav is known for."
			},
		],
		ads: [
			{
				name: 'Sudyotman Sudershan',
				image: sud,
				des: 'Hello delegates, I am Sudyotman Sudershan. I have been part of the MUN community for half a decade. I am absolutely excited to see our Joint Crisis Committee in action. I am looking forward to seeing how our committee will progress, and how the changing situation of the war will impact your decisions in face of threats both external and internal. See you in the War Room',
			},
			{
				name: 'Ashutosh Barman',
				image: ashutosh,
				des: 'I’ve always enjoyed a good debate, and am known to everyone close to me as the guy who argues too much - but it comes from a place of love. I’m passionate about sports, music, and anything to do with physics, and have been cursed by being a Ferrari fan. I love movies and games and really any sort of entertainment. Although I’ve been told otherwise, I firmly believe I have a good sense of humour. So if I make a “bad” joke - just laugh for my sanity. I am really looking forward to being on the board for this JCC, and if it lives up to my expectations, I promise it will be an unforgettable experience.',
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
										href={JCCBG}
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
										href={JCCMatrix}
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
							<div
								className={`grid-${comm.dir2.length} all-center directorBox`}>
								{comm.dir2.map((director, idx) => (
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
										href={JCCBG}
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
										href={JCCMatrix}
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
									<div
										key={idx}
										style={{ margin: '0px auto' }}>
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
								className={`grid-${comm.dir2.length} all-center directorBox`}>
								{comm.dir2.map((director, idx) => (
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
							<div
								className={`grid-${comm.ads.length} all-center directorBox`}
								style={{ gridGap: '3rem', alignItems: 'start' }}>
								{comm.ads.map((ad, ind) => (
									<div
										key={ind}
										style={{ margin: '0px auto' }}>
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
